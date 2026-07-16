# Layout Components

## CardContainer

The `CardContainer` component encapsulates the common `bg-white rounded-lg shadow-md p-6` pattern
found throughout the Vue views, providing a consistent and reusable card container with dark mode
support.

### Usage

```vue
<template>
	<!-- Basic usage -->
	<CardContainer>
		<h2>Card Title</h2>
		<p>Card content goes here</p>
	</CardContainer>

	<!-- With additional CSS classes -->
	<CardContainer class="mb-6 mt-4">
		<h2>Card Title</h2>
		<p>Card content goes here</p>
	</CardContainer>

	<!-- With hover effects (for interactive cards) -->
	<CardContainer hoverable>
		<h2>Interactive Card</h2>
		<p>This card has hover effects</p>
	</CardContainer>

	<!-- Combined with custom classes and hover effects -->
	<CardContainer class="h-full" hoverable>
		<h2>Full Height Interactive Card</h2>
		<p>This card fills its container and has hover effects</p>
	</CardContainer>
</template>

<script setup>
	import CardContainer from '@/components/layout/CardContainer.vue'
</script>
```

### Props

| Prop        | Type      | Default     | Description                                                        |
| ----------- | --------- | ----------- | ------------------------------------------------------------------ |
| `class`     | `string`  | `undefined` | Additional CSS classes to apply to the container                   |
| `hoverable` | `boolean` | `false`     | Whether the container should have hover effects (scale and shadow) |

### Features

- **Dark Mode Support**: Automatically uses `dark:bg-dark-bg-tertiary` class in dark mode
- **Hover Effects**: Optional hover animations when `hoverable` prop is true
- **Flexible**: Accepts any content via slots
- **Consistent Styling**: Maintains the exact same appearance as the original pattern

### Migration from Original Pattern

Replace this pattern:

```html
<div class="rounded-lg bg-white p-6 shadow-md">
	<!-- content -->
</div>
```

With:

```vue
<CardContainer>
  <!-- content -->
</CardContainer>
```

For cards with hover effects, replace:

```html
<div
	class="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg"
>
	<!-- content -->
</div>
```

With:

```vue
<CardContainer hoverable>
  <!-- content -->
</CardContainer>
```

### Examples in the Codebase

The following files have been updated to use `CardContainer`:

1. `src/views/HomeView.vue` - Interactive cards with hover effects
2. `src/views/AboutView.vue` - Simple card usage
3. `src/views/ContactPage.vue` - Multiple cards with different layouts
4. `src/views/BookAppointmentPage.vue` - Grid layout with cards
5. `src/views/ServicesPage.vue` - Service cards in grid layout
6. `src/views/MyPagesPage.vue` - Complex layout with multiple cards

These examples demonstrate various usage patterns and can serve as reference for implementing the
component in other views.
