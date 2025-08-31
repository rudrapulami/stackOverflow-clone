const mockQuestions = [
  {
    id: 1,
    question: "What is a closure in JavaScript?",
    creator: "Alice Johnson",
    createdDate: "2023-10-01T09:00:00",
    tags: ["javascript", "functions", "closures"],
    body: "## JavaScript Closures\n\nA **closure** is a function that has access to its own scope, the outer function's scope, and the global scope.\n\n```javascript\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```\n\nClosures are commonly used for data privacy and function factories.",
    content: "Closures allow functions to remember their lexical scope. They are useful for data encapsulation. Commonly used in callbacks and event handlers."
  },
  {
    id: 2,
    question: "How does React's useEffect hook work?",
    creator: "Bob Smith",
    createdDate: "2023-11-05T14:30:00",
    tags: ["react", "hooks", "useeffect"],
    body: "## useEffect in React\n\nThe **useEffect** hook lets you perform side effects in function components.\n\n```javascript\nimport { useEffect } from 'react';\n\nuseEffect(() => {\n  console.log('Component mounted');\n  return () => {\n    console.log('Cleanup');\n  };\n}, []);\n```\n\nIt runs after render and can return a cleanup function.",
    content: "useEffect is used for side effects like data fetching, DOM manipulation, and subscriptions."
  },
  {
    id: 3,
    question: "What is the difference between var, let, and const in JavaScript?",
    creator: "Charlie Brown",
    createdDate: "2023-09-20T08:15:00",
    tags: ["javascript", "variables", "es6"],
    body: "## var, let, and const\n\n- **var**: Function-scoped, can be redeclared.\n- **let**: Block-scoped, cannot be redeclared in the same scope.\n- **const**: Block-scoped, must be initialized, cannot be reassigned.\n\n```javascript\nvar x = 10;\nlet y = 20;\nconst z = 30;\n```",
    content: "var is function-scoped, let and const are block-scoped. const is for constants."
  },
  {
    id: 4,
    question: "How do you center a div using CSS?",
    creator: "Dana White",
    createdDate: "2023-12-15T10:45:00",
    tags: ["css", "html", "frontend"],
    body: "## Centering a div\n\nUse **Flexbox**:\n\n```css\n.parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n```\n\nOr **CSS Grid**:\n\n```css\n.parent {\n  display: grid;\n  place-items: center;\n}\n```",
    content: "You can center a div using flexbox or grid with align-items and justify-content."
  },
  {
    id: 5,
    question: "What is REST API and how does it work?",
    creator: "Ethan Clark",
    createdDate: "2024-01-10T16:20:00",
    tags: ["api", "rest", "backend"],
    body: "## REST API\n\nA **REST API** is an architectural style for designing networked applications. It uses HTTP requests to perform CRUD operations.\n\n- **GET**: Retrieve data\n- **POST**: Create data\n- **PUT**: Update data\n- **DELETE**: Delete data\n\nExample:\n```http\nGET /users/1\nPOST /users\n```",
    content: "REST APIs use HTTP methods to interact with resources, often returning JSON."
  }
];

export default mockQuestions;
