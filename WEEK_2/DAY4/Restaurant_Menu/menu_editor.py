
from typing import Optional
from menu_item import MenuItem
from menu_manager import MenuManager

def _read_non_empty(prompt: str) -> str:
    while True:
        s = input(prompt).strip()
        if s:
            return s
        print("Please enter a non-empty value.")

def _read_price(prompt: str) -> int:
    while True:
        raw = input(prompt).strip()
        try:
            price = int(raw)
            if price < 0:
                raise ValueError
            return price
        except ValueError:
            print("Please enter a non-negative integer .")

def add_item_to_menu() -> None:
    """Ask for name & price, create MenuItem and save it."""
    name = _read_non_empty("Item name: ")
    price = _read_price("Item price (integer >= 0): ")
    try:
        item = MenuItem(name=name, price=price)
        item.save()
        print(f"✅ Item added successfully: id={item.id}, name={item.name}, price={item.price}")
    except Exception as e:
        print(f"❌ Error while adding item: {e}")

def remove_item_from_menu() -> None:
    """Ask for name, create MenuItem and delete by name (fallback in delete())."""
    name = _read_non_empty("Item name to delete: ")
    try:
        # We don't need the price or id; delete() will use name when id is None.
        item = MenuItem(name=name, price=0)
        deleted = item.delete()
        if deleted > 0:
            print(f"🗑️  Deleted {deleted} item(s) named '{name}'.")
        else:
            print("⚠️  No item deleted (item not found).")
    except Exception as e:
        print(f"❌ Error while deleting item: {e}")

def update_item_from_menu() -> None:
    """Ask for current name/price and new name/price; create MenuItem and call update()."""
    print("Current values to identify the item:")
    current_name = _read_non_empty("Current item name: ")
    current_price = _read_price("Current item price (integer >= 0): ")

    print("New values:")
    new_name = _read_non_empty("New item name: ")
    new_price = _read_price("New item price (integer >= 0): ")

    try:
        # Note: update() will match by id if known, else by current name.
        item = MenuItem(name=current_name, price=current_price)
        updated = item.update(new_name=new_name, new_price=new_price)
        if updated > 0:
            print(f"✏️  Item updated successfully -> name='{item.name}', price={item.price}")
        else:
            print("⚠️  No item updated (item not found).")
    except Exception as e:
        print(f"❌ Error while updating item: {e}")

def show_restaurant_menu() -> None:
    """Print all items currently in the DB."""
    try:
        items = MenuManager.all()
        if not items:
            print("📋 Menu is empty.")
            return
        print("📋 Restaurant Menu")
        print("-" * 40)
        for it in items:
            print(f"[{it.id}] {it.name:<25} {it.price:>5}")
        print("-" * 40)
    except Exception as e:
        print(f"❌ Error while fetching menu: {e}")

def view_item() -> None:
    """Ask a name and show that single item, if any."""
    name = _read_non_empty("Item name to view: ")
    try:
        found = MenuManager.get_by_name(name)
        if found:
            print(f"🔎 Found -> id={found.id}, name={found.name}, price={found.price}")
        else:
            print("❌ Item not found.")
    except Exception as e:
        print(f"❌ Error while searching for item: {e}")

def show_user_menu() -> None:
    """
    Show program menu and dispatch to actions.
    Options:
      V = View an Item
      A = Add an Item
      D = Delete an Item
      U = Update an Item
      S = Show the Menu
      E/X/Q = Exit (prints the menu before exiting)
    """
    while True:
        print("\\n=== Menu Editor ===")
        print("[V] View an Item")
        print("[A] Add an Item")
        print("[D] Delete an Item")
        print("[U] Update an Item")
        print("[S] Show the Menu")
        print("[E] Exit")
        choice = input("Choose an option: ").strip().lower()

        if choice == "v":
            view_item()
        elif choice == "a":
            add_item_to_menu()
        elif choice == "d":
            remove_item_from_menu()
        elif choice == "u":
            update_item_from_menu()
        elif choice == "s":
            show_restaurant_menu()
        elif choice in {"e", "x", "q"}:
            print("\\nExiting… Current restaurant menu:")
            show_restaurant_menu()
            print("Goodbye!")
            break
        else:
            print("Unknown option. Please choose V/A/D/U/S/E.")

if __name__ == "__main__":
    show_user_menu()
