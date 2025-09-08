from typing import List, Optional
from db import get_connection
from menu_item import MenuItem

class MenuManager:
    @classmethod
    def get_by_name(cls, name: str) -> Optional[MenuItem]:
        """Return a single item matching name, or None if not found."""
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    "SELECT item_id, item_name, item_price FROM menu_items WHERE item_name = %s LIMIT 1",
                    (name,),
                )
                row = cur.fetchone()
                if not row:
                    return None
                item_id, item_name, item_price = row
                return MenuItem(name=item_name, price=item_price, id=item_id)

    @classmethod
    def all_items(cls) -> List[MenuItem]:
        """Return all items as MenuItem objects."""
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT item_id, item_name, item_price FROM menu_items ORDER BY item_id")
                items = []
                for item_id, item_name, item_price in cur.fetchall():
                    items.append(MenuItem(name=item_name, price=item_price, id=item_id))
                return items

    # Alias for the exercise's Codebox convenience
    @classmethod
    def all(cls) -> List[MenuItem]:
        return cls.all_items()
