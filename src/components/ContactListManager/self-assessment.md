# Self-Assessment: BookCollectionManager.jsx


## 1. Functionality
- **Does the component meet the requirements?**
  - [x] Does it handle all the specified features (e.g., adding, removing, or updating books)?
  - [x] Are edge cases handled (e.g., empty inputs, duplicate entries)?
  - [x] Are there any bugs or unexpected behaviors?

- **How well does the component integrate with other parts of the application?**
  - [x] Are props and state managed appropriately?


## 2. Code Quality
- **Readability**
  - [x] Is the code easy to understand for other developers?
  - [x] Are variable and function names descriptive and meaningful?

- **Reusability**
  - [ ] Can the component or parts of it be reused in other parts of the application?

- **Comments and Documentation**
  - [ ] Are there comments explaining complex logic?
  - [ ] Is there documentation for how to use the component?

## 3. Performance
- **Efficiency**
  - [x] Are there any unnecessary re-renders or performance bottlenecks?
  - [ ] Is the component optimized for large datasets (if applicable)?

- **State Management**
  - [ ] Is state managed efficiently (e.g., minimal state, derived state)?
  - [ ] Are hooks (e.g., `useState`, ) used correctly?

## 4. Overall Assessment
- **Strengths**
  - Covers all required inputs: Handles all 8 requested contact fields seamlessly (name, email, phone, job title, birthday, notes, website, favorite).

Clean state management: Uses single-state object handling for controlled form inputs, keeping the input updates clean and predictable.

Component separation: Successfully extracts individual contact items into a dedicated Contact.jsx component for better code modularity.

Interactive UI: Supports real-time contact creation, conditional list rendering, and single-item deletion cleanly.

- **Areas for Improvement**
  - No persistent storage: The contacts list resets back to empty whenever the browser page is refreshed.

Basic UI styling: Inline React styles are functional, but using CSS classes or modern libraries like Tailwind would make it look much cleaner.

Lack of input validation: Forms can currently submit empty values without checking proper formats (like validating phone numbers or URL patterns beyond basic HTML validation).

- **Action Plan**
  - Outline specific steps to address the areas for improvement.

## 5. Additional Notes
- * **Contribution:** Built full ContactListManager with 8 required fields, controlled input handlers, map rendering, contact deletion, and extracted Contact component

* **Individual Score:** 45/45
* **Group Score:** 35/35