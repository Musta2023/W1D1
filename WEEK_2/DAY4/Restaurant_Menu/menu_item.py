from dataclasses import dataclass
from typing import Optional
from db import get_connection

@dataclass
class MenuItem:
    name: str
    price: int
    id: Optional[int] = None  # populated after save() or when loaded

    def save(self) -> None:
        """Insert the item into the database. Sets self.id."""
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """                    INSERT INTO menu_items (item_name, item_price)
                    VALUES (%s, %s)
                    RETURNING item_id
                    """,                    (self.name, self.price),
                )
                self.id = cur.fetchone()[0]

    def delete(self) -> int:
        """Delete this item from the DB. Returns number of rows deleted."""
        with get_connection() as conn:
            with conn.cursor() as cur:
                if self.id is not None:
                    cur.execute("DELETE FROM menu_items WHERE item_id = %s", (self.id,))
                else:
                    # Fallback by name (may delete multiple if duplicates exist)
                    cur.execute("DELETE FROM menu_items WHERE item_name = %s", (self.name,))
                return cur.rowcount

    def update(self, new_name: Optional[str] = None, new_price: Optional[int] = None) -> int:
        """        Update this item's name and/or price in the DB. Returns number of rows updated.
        If self.id is known, updates by id; otherwise updates by current name.
        """
        if new_name is None and new_price is None:
            return 0

        # Build dynamic SET clause safely
        sets = []
        params = []
        if new_name is not None:
            sets.append("item_name = %s")
            params.append(new_name)
        if new_price is not None:
            sets.append("item_price = %s")
            params.append(new_price)
        set_sql = ", ".join(sets)

        with get_connection() as conn:
            with conn.cursor() as cur:
                if self.id is not None:
                    params.append(self.id)
                    cur.execute(f"UPDATE menu_items SET {set_sql} WHERE item_id = %s", params)
                else:
                    params.append(self.name)
                    cur.execute(f"UPDATE menu_items SET {set_sql} WHERE item_name = %s", params)
                # Update in-memory state if successful
                if cur.rowcount > 0:
                    if new_name is not None:
                        self.name = new_name
                    if new_price is not None:
                        self.price = new_price
                return cur.rowcount

