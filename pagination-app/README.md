# Data Table with Pagination

## 1. Task Description

**Task:** Implement Pagination for a Data Table

**Description:**
The goal of this task was to create a table that displays **paginated data**, allowing users to navigate through multiple pages of items. The table shows a limited number of rows per page (5 items per page), and pagination controls include "Previous", "Next", and three middle buttons with dots for easy navigation between pages.

---

### 2. Features

- **Paginated Display:** Only 5 items are shown on the current page at a time.
- **Pagination Controls:**
  - **Previous and Next Buttons** to move between pages.
  - **Middle Buttons with Dots** to navigate quickly between the first, last, and current pages.
- **Dynamic Data:** The table can display any dataset and will automatically adjust pagination based on the data size.

---

### 3. Application Workflow

1. **Data Display:**
   - A table renders a subset of the data corresponding to the current page. The user sees 5 items per page.

2. **Pagination Logic:**
   - The total number of items is divided by the number of items per page to calculate the total number of pages.
   - If there are more than 5 pages, pagination numbers are simplified by showing the first, last, and current pages, with dots `(...)` indicating hidden pages.
   - The user can navigate to a specific page by clicking the page number, and the `slice` method ensures the correct subset of data is shown based on the current page.

3. **Previous and Next Navigation:**
   - Users can click the **Previous** button to move to the previous page or the **Next** button to move to the next page. The page numbers update accordingly.

---

### 4. Technologies Used

- **React** for building the user interface.
- **useState Hook** to track the current page and manage the table data display.
- **Array.from** to generate dummy data for testing.
- **CSS** for styling the table and pagination controls, ensuring responsiveness at different screen sizes (e.g., 800px view).

---

### 5. Components & State Structure

#### Components

- **DataTable Component:**
  - Displays the table with a list of rows (5 per page) and handles pagination.

- **Pagination Component:**
  - Renders the pagination buttons (Previous, Next, numbered buttons) based on the current page and total pages.

#### State Management

- **useState:**
  - Used to manage the current page of the table.
  - The current page determines the subset of data displayed using the `slice()` method.

---

