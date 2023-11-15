# Base Template for Angular 16 Medium/Large Projects

This is a simple template for frontend projects guided by a Domain-Driven Design (DDD) architecture, which can be highly valuable for medium to large-scale projects.

**Note:** This template is not recommended for small projects (less than 8 pages). For smaller projects, it might be more suitable to maintain a layered or simpler architecture with the following directories:

- `Pages`
- `Core`
  - `Guards`
  - `Models`
  - `Services`
  - `Resolvers`
- `Layouts`
- `Auth`
- `Commons`

## Directory Structure

An initial directory organization is established as follows. It begins with an "auth" directory, which is a module that exposes authentication and registration pages (it can be a module with routes if necessary). We continue with the "commons" folder, housing common components for at least 2 different domains of the application (these can be components within a module or standalone components if necessary). The "core" directory stores guards, interceptors, services, and system models that are not directly related to the domains but are crucial for the page's functioning.

Following that is "layouts," which defines the main page layout (the primary container that houses different pages). Finally, we have the "pages" module (where different domains are stored) and it routes to each page. Each domain consists of different pages (modules) with a default route to the main component, along with various components, directives, and pipes.

**Note:** In some cases, it may be necessary to have a "commons" module within a domain to share components, directives, or pipes among the pages of the same domain.

## Reason for Organization

This architecture is chosen to focus on the application's domain, modularizing its parts in a way that everything required to manage a domain is located in a single subfolder. This approach helps move away from the notorious "spaghetti code" and allows having small, domain-oriented packages that promote element reusability without disturbing or compromising the defined architecture.
