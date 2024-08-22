export interface TRoutes {
  path: string,
  element: React.FC
  children: [
    {
      path: string,
      element: React.FC
    }
  ]
}