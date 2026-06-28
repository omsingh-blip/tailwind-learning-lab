# 📚 Project 02 — Pricing Card Learnings

## 🎯 Project Goal

Build a modern SaaS pricing card while learning how to create interactive user interfaces using Tailwind CSS.

---

# 🧠 Concepts Learned

## 1. Visual Hierarchy

A user should naturally read the card in this order:

```text
Badge
↓

Plan Name
↓

Price
↓

Description
↓

Features
↓

Call To Action Button
```

Large text and bold font should be reserved for the most important information.

---

## 2. Thinking in UI Sections

Instead of writing one long component, break the UI into logical sections.

```text
Pricing Card

├── Badge
├── Header
├── Divider
├── Features
└── Button
```

This makes components easier to maintain and later convert into reusable React components.

---

# 📦 Tailwind Utilities Learned

## Layout

```text
flex
flex-col
items-center
justify-center
w-full
max-w-sm
min-h-screen
```

---

## Spacing

```text
p-8
px-4
py-3
mt-4
mt-6
gap-3
gap-6
space-y-4
```

### Difference

**gap**

Used inside Flexbox and Grid layouts.

```jsx
<div className="flex flex-col gap-4">
```

**space-y**

Adds vertical spacing between direct children.

```jsx
<div className="space-y-4">
```

---

## Typography

```text
text-xs
text-sm
text-lg
text-3xl
text-5xl

font-semibold
font-bold
font-extrabold

uppercase

tracking-wider

leading-6

text-center
```

### Learned

Typography creates hierarchy.

Not every piece of text should have the same size or weight.

---

## Colors

```text
bg-white

bg-indigo-600

text-white

text-slate-500

text-slate-700

text-green-500
```

### Learned

Use one primary accent color.

Avoid mixing too many accent colors unless the design requires it.

---

## Gradients

```text
bg-gradient-to-br

from-slate-900

via-indigo-900

to-black
```

Creates modern landing page backgrounds.

---

## Borders

```text
border

border-t

rounded-xl

rounded-2xl

rounded-full
```

---

## Shadows

```text
shadow-lg

shadow-xl

hover:shadow-2xl
```

Shadows create depth and improve visual hierarchy.

---

# 🎨 Interactive States

One of the biggest lessons in this project.

Hover states are applied **per utility**.

Correct:

```jsx
hover:bg-indigo-700
hover:shadow-xl
hover:scale-105
```

Incorrect:

```jsx
hover:bg-indigo-700+shadow-xl
```

Every utility needs its own variant.

---

## Transitions

```text
transition

transition-all

duration-300
```

These create smooth animations.

Without transitions, UI changes feel abrupt.

---

## Transform

```text
hover:scale-105
```

Adds subtle motion.

Micro-interactions make interfaces feel polished.

---

## Cursor

```text
cursor-pointer
```

Shows users that an element is clickable.

---

# 📱 Responsive Thinking

Instead of

```text
min-w-sm
```

prefer

```text
w-full max-w-sm
```

Reason:

* Fills available width on small devices.
* Stops growing after reaching the maximum width.

This is a common responsive pattern in modern React applications.

---

# ⚛️ React Concepts Learned

## Rendering Lists

Instead of writing:

```jsx
<div>Feature 1</div>
<div>Feature 2</div>
<div>Feature 3</div>
```

Create data first.

```jsx
const features = [
  "Unlimited Projects",
  "AI Code Review",
  "Priority Support",
];
```

Then render dynamically.

```jsx
features.map(...)
```

This separates data from presentation.

---

## Using key

Every mapped element needs a unique key.

```jsx
key={feature}
```

React uses keys to efficiently update lists.

---

## Component Thinking

Instead of thinking about HTML elements...

```text
div
div
span
button
```

Think about UI sections.

```text
Pricing Card

Header

Feature List

Purchase Button
```

This mindset makes future components reusable.

---

# 💡 Design Principles Learned

## Keep Colors Consistent

Choose one primary accent color.

Example:

```text
Indigo
```

Use it for:

* Badge
* Button
* Hover states

This creates a consistent design language.

---

## Let Content Control Height

Instead of

```text
h-[320px]
```

prefer

```text
p-8
```

Cards should naturally grow with their content.

---

## Use Semantic HTML

Prefer:

```html
<h2>
```

instead of

```html
<span>
```

for headings.

Use:

```html
<p>
```

for descriptions.

This improves accessibility and readability.

---

# 🚀 New React + Tailwind Pattern

A feature row is better represented as:

```text
Feature Row

├── Icon
└── Text
```

Instead of putting everything inside a single inline element.

Use Flexbox.

```jsx
flex items-center gap-3
```

---

# 🏆 Key Takeaways

After completing this project, you should be comfortable with:

* Interactive cards
* Hover effects
* Smooth animations
* Typography hierarchy
* Building feature lists
* Rendering arrays with `map()`
* Using icons inside Flexbox
* Responsive card sizing
* Designing with a consistent color palette
* Structuring components into logical UI sections

---

# 📈 Progress

Completed:

* ✅ Project 01 — Profile Card
* ✅ Project 02 — Pricing Card

Next Project:

➡️ **Project 03 — Login Page**

Upcoming concepts:

* Forms
* Inputs
* Labels
* Focus states
* Validation UI
* Password visibility toggle
* Responsive form layouts
