# Standard Tailwind CSS Navigation Patterns

This document outlines standard navigation patterns implemented in the Swedish healthcare demo site using Tailwind CSS, following best practices for healthcare websites.

## Table of Contents

1. [Main Navigation Patterns](#main-navigation-patterns)
2. [Secondary Navigation](#secondary-navigation)
3. [Dropdown Navigation](#dropdown-navigation)
4. [Mobile Navigation](#mobile-navigation)
5. [Active State Indicators](#active-state-indicators)
6. [Accessibility Considerations](#accessibility-considerations)
7. [Healthcare-Specific Patterns](#healthcare-specific-patterns)

## Main Navigation Patterns

### Horizontal Navigation Bar

```html
<nav class="bg-white shadow-sm">
  <div class="container mx-auto px-4">
    <ul class="flex space-x-1">
      <li>
        <a href="#" class="px-4 py-3 block text-neutral-700 hover:text-primary-700 font-medium transition-colors duration-200">
          Navigation Item
        </a>
      </li>
    </ul>
  </div>
</nav>
```

**Key Classes Used:**

- `bg-white`: Clean background for healthcare professionalism
- `shadow-sm`: Subtle depth
- `container mx-auto px-4`: Responsive container with padding
- `flex space-x-1`: Horizontal layout with minimal spacing
- `px-4 py-3`: Comfortable touch targets
- `text-neutral-700 hover:text-primary-700`: Professional color scheme
- `font-medium`: Clear typography hierarchy
- `transition-colors duration-200`: Smooth color transitions

## Secondary Navigation

### Tab-style Secondary Navigation

```html
<div class="bg-white border-b border-neutral-200">
  <div class="container mx-auto px-4">
    <ul class="flex space-x-1">
      <li>
        <a href="#" class="flex items-center px-4 py-3 text-sm text-neutral-600 hover:text-primary-700 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-primary-300">
          Secondary Item
        </a>
      </li>
    </ul>
  </div>
</div>
```

**Key Classes Used:**

- `border-b border-neutral-200`: Visual separation from main content
- `text-sm`: Smaller typography for secondary hierarchy
- `border-b-2`: Bottom border for active state
- `border-transparent hover:border-primary-300`: Interactive border states

## Dropdown Navigation

### Standard Dropdown Pattern

```html
<li class="relative">
  <a href="#" class="px-4 py-3 block text-neutral-700 hover:text-primary-700 font-medium transition-colors duration-200">
    Parent Item
  </a>
  
  <div class="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-b-lg z-10">
    <ul>
      <li>
        <a href="#" class="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200">
          Dropdown Item
        </a>
      </li>
    </ul>
  </div>
  
  <button class="absolute right-0 top-3.5 px-2 text-neutral-500 hover:text-primary-700 focus:outline-none">
    <!-- Dropdown arrow icon -->
  </button>
</li>
```

**Key Classes Used:**

- `relative`: Positioning context for dropdown
- `absolute left-0 mt-0`: Positioned directly below parent
- `w-56`: Fixed width for consistency
- `shadow-lg rounded-b-lg`: Elevated appearance with rounded bottom
- `z-10`: Proper stacking context
- `hover:bg-primary-50`: Subtle background on hover

## Mobile Navigation

### Hamburger Menu Pattern

```html
<div class="md:hidden flex justify-between items-center py-3">
  <span class="font-semibold text-neutral-800">Meny</span>
  <button class="text-neutral-700 hover:text-primary-700 focus:outline-none" aria-label="Öppna meny">
    <!-- Hamburger icon -->
  </button>
</div>

<div class="md:hidden py-2 border-t border-neutral-200">
  <ul class="space-y-1">
    <li>
      <a href="#" class="block px-4 py-3 text-neutral-700 hover:text-primary-700 font-medium">
        Mobile Item
      </a>
    </li>
  </ul>
</div>
```

**Key Classes Used:**

- `md:hidden`: Mobile-only display
- `space-y-1`: Vertical spacing between items
- `border-t border-neutral-200`: Visual separator
- Full-width links for better mobile usability

## Active State Indicators

### Main Navigation Active States

```html
<a href="#" class="px-4 py-3 block text-neutral-700 hover:text-primary-700 font-medium transition-colors duration-200"
   :class="{ 'text-primary-700 font-semibold': isActive }">
  Navigation Item
</a>
```

### Secondary Navigation Active States

```html
<a href="#" class="flex items-center px-4 py-3 text-sm text-neutral-600 hover:text-primary-700 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-primary-300"
   :class="{ 
     'text-primary-700 font-semibold border-primary-600': isActive,
     'text-primary-600 border-primary-300': isParentActive 
   }">
  Secondary Item
</a>
```

### Dropdown Active States

```html
<a href="#" class="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
   :class="{ 'bg-primary-50 text-primary-700 font-medium': isActive }">
  Dropdown Item
</a>
```

## Accessibility Considerations

### ARIA Attributes

```html
<button aria-expanded="false" aria-label="Visa undermeny för Om oss">
  <!-- Dropdown toggle button -->
</button>
```

### Focus Management

```html
<button class="text-neutral-700 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
  <!-- Focus visible state -->
</button>
```

### Semantic HTML

- Use `<nav>` elements for navigation sections
- Use `<ul>` and `<li>` for navigation lists
- Use proper heading hierarchy

## Healthcare-Specific Patterns

### Patient-Focused Navigation

```html
<nav class="bg-white shadow-sm">
  <div class="container mx-auto px-4">
    <ul class="flex space-x-1">
      <li>
        <a href="#" class="px-4 py-3 block text-neutral-700 hover:text-primary-700 font-medium transition-colors duration-200">
          Boka tid
        </a>
      </li>
      <li>
        <a href="#" class="px-4 py-3 block text-neutral-700 hover:text-primary-700 font-medium transition-colors duration-200">
          Mina sidor
        </a>
      </li>
      <li>
        <a href="#" class="px-4 py-3 block text-neutral-700 hover:text-primary-700 font-medium transition-colors duration-200">
          Kontakt
        </a>
      </li>
    </ul>
  </div>
</nav>
```

### Emergency Information Pattern

```html
<div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
  <div class="flex">
    <div class="flex-shrink-0">
      <!-- Alert icon -->
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-red-800">Akutinformation</h3>
      <div class="mt-2 text-sm text-red-700">
        <p>Vid livshotande tillstånd, ring 112.</p>
      </div>
    </div>
  </div>
</div>
```

### Service Category Navigation

```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-semibold mb-4">Våra tjänster</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <a href="#" class="block p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200">
      <h3 class="font-medium text-neutral-800">Mottagningar</h3>
      <p class="text-sm text-neutral-600 mt-1">Besök våra olika mottagningar</p>
    </a>
    <!-- More service cards -->
  </div>
</div>
```

## Best Practices for Healthcare Navigation

1. **Clear Information Architecture**
   - Group related services together
   - Use familiar terminology
   - Prioritize patient needs

2. **Accessibility First**
   - Ensure keyboard navigation
   - Provide clear focus indicators
   - Use semantic HTML structure

3. **Mobile-First Design**
   - Touch-friendly targets (minimum 44px)
   - Clear visual hierarchy
   - Simplified mobile menu

4. **Visual Consistency**
   - Consistent color scheme
   - Predictable interaction patterns
   - Clear active states

5. **Performance Considerations**
   - Efficient CSS with Tailwind's purge options
   - Optimized icons and images
   - Minimal JavaScript for interactions

## Color Scheme for Healthcare

```css
/* Primary colors - Professional and trustworthy */
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-500: #3b82f6;
--primary-600: #2563eb;
--primary-700: #1d4ed8;

/* Neutral colors - Clean and professional */
--neutral-50: #f9fafb;
--neutral-100: #f3f4f6;
--neutral-200: #e5e7eb;
--neutral-600: #4b5563;
--neutral-700: #374151;
--neutral-800: #1f2937;

/* Success colors - Health and wellness */
--success-50: #f0fdf4;
--success-500: #22c55e;
--success-600: #16a34a;

/* Alert colors - Important information */
--alert-50: #fef2f2;
--alert-500: #ef4444;
--alert-600: #dc2626;
```

## Implementation Examples

### Complete Navigation Component Structure

```html
<template>
  <div class="min-h-screen bg-neutral-100 flex flex-col">
    <!-- Main Header -->
    <header class="bg-white shadow-md">
      <!-- Logo and primary navigation -->
    </header>
    
    <!-- Secondary Navigation (contextual) -->
    <SecondaryNavigation v-if="showSecondaryNav" />
    
    <!-- Main Content -->
    <main class="flex-grow">
      <router-view />
    </main>
    
    <!-- Footer -->
    <footer class="bg-neutral-800 text-white">
      <!-- Footer content -->
    </footer>
  </div>
</template>
```

This documentation provides a comprehensive guide to implementing standard navigation patterns in healthcare websites using Tailwind CSS, ensuring accessibility, usability, and professional appearance.
