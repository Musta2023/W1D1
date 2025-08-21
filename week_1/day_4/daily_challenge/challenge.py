import math
class Pagination:
    def __init__(self, items=None, page_size=10):
         self.items = items if items is not None else []
         self.page_size = page_size
         self.current_idx = 0
         self.total_pages = math.ceil(len(self.items) / self.page_size) if self.items else 0
    def get_page_items(self):
        """Return the list of items on the current page"""
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def get_visible_items(self):
        """Return the list of items visible on the current page"""
        return self.get_page_items()

    def go_to_page(self, page_num):
        """Go to a specific page """
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page number out of range")
        self.current_idx = page_num - 1
        return self

    def first_page(self):
        """Go to the first page"""
        self.current_idx = 0
        return self

    def last_page(self):
        """Go to the last page"""
        if self.total_pages > 0:
            self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        """Go to the next page if not on the last one"""
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        """Go to the previous page if not on the first one"""
        if self.current_idx > 0:
            self.current_idx -= 1
        return self
    def __str__(self):
        """Return current page items as a string, each on a new line."""
        items = self.get_page_items()
        if not items:
            return "No items to display."
        return "\n".join(str(item) for item in items)
    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(7)
print(p.current_idx + 1)
# Output: 7

p.go_to_page(0)
# Raises ValueError
