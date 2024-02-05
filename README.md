# CollapsibleNav Component

`CollapsibleNav` is a responsive sidebar navigation component for React applications. It features a collapsible design, ideal for optimizing screen space and enhancing user experience in applications with complex navigation needs. The component supports an expandable and collapsible mode, making it suitable for a wide range of layouts and devices.

## Live Example

You can see the `CollapsibleNav` component live in action at [flexibal-staff-overview-ikram.surge.sh](http://flexibal-staff-overview-ikram.surge.sh).

## Usage

To use the `CollapsibleNav` component, import it into your React component and include it in your JSX:

````jsx
import CollapsibleNav from 'path/to/CollapsibleNav';

function MyApp() {
  return (
    <div>
      <CollapsibleNav />
    </div>
  );
}



## Props

This section documents the various props that the `CollapsibleNav` component accepts:


| `isInitiallyCollapsed` | `boolean` | `false` | Determines if the navigation starts in a collapsed state.|

- `Prop`: isInitiallyCollapsed
-This is the actual name of the prop as used in the component. It's the identifier you'll use when passing data to the component.

- `Type`: boolean
-The data type of isInitiallyCollapsed is boolean, meaning it expects a true or false value. This is important for developers to know because it tells them what kind of data they need to provide for this prop.

- `Default`: `false`
- This indicates the default behavior of the CollapsibleNav component if the isInitiallyCollapsed prop is not explicitly provided. In this case, if you don’t specify the isInitiallyCollapsed prop when using CollapsibleNav, it will default to false, meaning the navigation will be expanded by default.
- `Description`: If set to true, the nav will start as a collapsed menu.
<CollapsibleNav isInitiallyCollapsed={true} />

- `Description`:"Determines if the navigation starts in a collapsed state."

This brief description explains the role of the isInitiallyCollapsed prop. When set to true, the navigation component will initially render in a collapsed state. When false or not provided, the component will start in an expanded state. This prop is useful for controlling the initial presentation of the navigation based on user preferences, screen size, or other factors.



## Styling

The `CollapsibleNav` component can be styled via SASS/CSS. The component uses BEM naming conventions, making it easy to understand and customize its styling. The primary classes used are:

- `collapsible-nav`: The base class for the component.
- `collapsible-nav--collapsed`: Modifier class used when the navigation is collapsed.
- `collapsible-nav__item`: Class for individual navigation items.


## Storybook Integration

`CollapsibleNav` is documented and visualized in Storybook, allowing you to interact with its props and see different states and variations. Run Storybook locally to explore the component:

```bash
npm run storybook


## Contributing

For questions, issues, or feature requests, please contact [Ikram](mailto:ikramlam26@gmail.com). Contributions to the `CollapsibleNav` component are welcome. Please ensure that your contributions adhere to the existing coding and styling standards.
Pull requests are welcome! For major changes, please open an issue first to discuss what you would

````
