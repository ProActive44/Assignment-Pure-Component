Question: Which out of the two components (which are performing the same functionality) is performing better and how?

The PureCounterComponent is likely to perform better in terms of rendering optimizations. This is because PureComponent implements a shallow comparison of props and state to determine whether the component should update. In the given scenario, where the state update depends only on the toggle, using PureComponent can prevent unnecessary renders when the toggle is unchanged.
