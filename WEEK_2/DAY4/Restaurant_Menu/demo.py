from menu_item import MenuItem
from menu_manager import MenuManager

# Create & save
item = MenuItem('cosamia', 35)
item.save()
print('Saved:', item)


# Update
# rows = item.update('Veg ', 37)
# print('Updated rows:', rows, '->', item)

# Query by name
item2 = MenuManager.get_by_name('Beef')
print('get_by_name("Beef") ->', item2)

# List all
items = MenuManager.all()
print('All items:', items)

# # Delete
# deleted = item.delete()
# print('Deleted rows:', deleted)
