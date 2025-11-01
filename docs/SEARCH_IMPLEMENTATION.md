# Search Implementation Documentation

## Overview

This document describes the full-site search functionality implemented for the Swedish Healthcare Demo Site. The search feature allows users to search through all page content and navigate to relevant pages.

## Architecture

### Build-Time Components

1. **Search Index Generation** (`scripts/generate-search-index.js`)
   - Extracts content from all Vue components during build
   - Generates a JSON search index with page metadata, content, and keywords
   - Saves to `public/search-index.json` for client-side access

2. **Build Integration**
   - Search index generation is integrated into both `npm run build` and `npm run build:spa`
   - Index is automatically included in the build output

### Client-Side Components

1. **Search Composable** (`src/composables/useSearch.ts`)
   - Handles search functionality using the pre-generated index
   - Implements relevance scoring and ranking algorithm
   - Provides debounced search for performance
   - Includes analytics tracking for search usage
   - Manages search state and results

2. **SearchBox Component** (`src/components/interactive/SearchBox.vue`)
   - Enhanced version of the existing SearchBox component
   - Integrates with the search composable
   - Provides real-time search with dropdown results
   - Supports keyboard navigation and accessibility

3. **SearchResults Component** (`src/components/interactive/SearchResults.vue`)
   - Displays search results in a dropdown format
   - Shows page titles, snippets, and URLs
   - Includes highlighting of matching terms
   - Supports keyboard navigation (arrow keys, enter, escape)

4. **Header Integration** (`src/components/common/Header.vue`)
   - Replaces static search input with functional SearchBox component
   - Maintains responsive design for mobile and desktop
   - Preserves existing styling and dark mode support

## Features

### Search Functionality

- **Full-Content Search**: Searches through page titles, descriptions, and content
- **Relevance Ranking**: Prioritizes title matches, then description, then content
- **Keyword Matching**: Extracts and matches keywords for better relevance
- **Snippet Generation**: Shows contextual snippets around matching content
- **Debounced Input**: 300ms delay to improve performance
- **Result Limiting**: Shows maximum 8 results to prevent overwhelming users

### User Experience

- **Real-Time Results**: Updates as user types
- **Keyboard Navigation**: Arrow keys to navigate, Enter to select, Escape to close
- **Accessibility**: Proper ARIA labels and roles
- **Dark Mode Support**: Works with existing dark mode implementation
- **Mobile Responsive**: Optimized for both mobile and desktop views

### Analytics & Performance

- **Search Tracking**: Tracks total searches, popular queries, and recent queries
- **Local Storage**: Persists analytics data across sessions
- **Performance Optimization**: Debounced search and efficient algorithms
- **SSR Compatible**: Works in both development and server-side generated builds

## Usage

### For Users

1. Click on the search field in the header
2. Type your search query
3. View results in the dropdown
4. Use arrow keys to navigate between results
5. Press Enter to select a result or click on it
6. Press Escape to clear search

### For Developers

The search functionality is implemented as a composable that can be used in other components:

```typescript
import { useSearch } from '@/composables/useSearch'

const {
  searchQuery,
  searchResults,
  isLoading,
  hasResults,
  searchAnalytics,
  performSearch,
  navigateToResult,
  clearSearch,
  trackSearch
} = useSearch()
```

## Technical Details

### Search Algorithm

1. **Text Processing**: Converts all text to lowercase for case-insensitive matching
2. **Scoring System**:
   - Title exact match: +20 points
   - Title partial match: +10 points
   - Description match: +5 points
   - Content match: +3 points
   - Keyword match: +2 points per word
   - Title length bonus: Shorter titles get higher scores

### Performance Considerations

- **Debouncing**: Prevents excessive search operations during typing
- **Result Limiting**: Limits to 8 results for UI performance
- **Early Exit**: Skips search for queries shorter than 2 characters
- **Efficient Algorithms**: Uses optimized string operations

### Browser Compatibility

- **Modern Browsers**: Full functionality with fetch API
- **Older Browsers**: Graceful degradation with error handling
- **LocalStorage**: Used for analytics persistence (fallback to memory)

## File Structure

```
scripts/
└── generate-search-index.js     # Build-time search index generation

src/
├── composables/
│   └── useSearch.ts          # Search functionality composable
├── components/
│   ├── common/
│   │   └── Header.vue         # Updated with SearchBox integration
│   └── interactive/
│       ├── SearchBox.vue       # Enhanced search input component
│       └── SearchResults.vue    # Results dropdown component
└── ...

public/
└── search-index.json            # Generated search index (35KB)
```

## Future Enhancements

Potential improvements for future iterations:

1. **Fuzzy Search**: Implement fuzzy matching for typo tolerance
2. **Search History**: Display recent searches as suggestions
3. **Advanced Filters**: Add category or date-based filtering
4. **Search Analytics Dashboard**: Admin interface to view search statistics
5. **Search API**: Backend search for more advanced features
6. **Voice Search**: Add speech-to-text input capability
7. **Search Shortcuts**: Keyboard shortcuts for quick access
8. **A/B Testing**: Test different search algorithms and UI variations

## Troubleshooting

### Common Issues

1. **Search Not Working**: Ensure `search-index.json` is in public directory
2. **No Results**: Check that search index is properly generated
3. **Performance Issues**: Verify debouncing is working correctly
4. **SSR Errors**: Search is disabled during server-side rendering

### Debug Information

Search analytics are stored in localStorage under key `search-analytics` and can be inspected for debugging purposes.
