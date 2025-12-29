# My Gadget Nepal (MGN) E-commerce

A modern, full-stack e-commerce platform built with **Next.js 15**, designed specifically for the Nepalese market with seamless local payment integrations.

## 🚀 Features

### 🛍️ Customer Storefront
- **Modern UI/UX**: Responsive and dynamic design powered by **Tailwind CSS v4** and **Framer Motion**.
- **Product Discovery**: Browse products by Category and Subcategory with advanced search and filtering.
- **Rich Product Details**: View detailed specifications, variants, and high-quality image galleries.
- **User Engagement**: Customer reviews and ratings system.
- **Shopping Experience**: Smooth cart management and secure checkout process.

### ⚡ Admin Dashboard
- **Centralized Control**: Comprehensive dashboard to manage the entire platform.
- **Product Management**: Create, update, and delete products, categories, and subcategories.
- **Order Management**: Track order lifecycles (Pending, Confirmed, Shipped, Cancelled) and payment statuses.
- **Banner Management**: Control homepage banners and promotional content.
- **User Management**: View and manage customer accounts and roles.

### 🔐 Authentication & Security
- **Secure Access**: Robust authentication using **NextAuth.js** / **Supabase**.
- **Role-Based Access**: Distinct portals and permissions for Admins and Customers.

### 💳 Payment Integration(yet to build)
Support for popular local payment methods:
- **eSewa**
- **Khalti**
- **Fonepay**
- **Cash on Delivery (COD)**

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Image Hosting**: [ImageKit](https://imagekit.io/)
- **Utilities**: `date-fns`, `axios`, `react-hot-toast`

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/mgn-ecom.git
   cd mgn-ecom
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add the necessary variables. Here is an example template:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/mgn_ecom?schema=public"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-super-secret-key"

   # ImageKit (for image uploads)
   IMAGEKIT_PUBLIC_KEY="your_public_key"
   IMAGEKIT_PRIVATE_KEY="your_private_key"
   IMAGEKIT_URL_ENDPOINT="your_url_endpoint"

   # Payment Gateways (Add specific keys as needed)
   # ESEWA_...
   # KHALTI_...
   ```

4. **Initialize the Database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the Development Server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
src/
├── app/
│   ├── (clients)/      # Customer-facing pages (Home, Shop, Cart, etc.)
│   ├── admin/          # Admin dashboard pages
│   ├── api/            # API routes (Auth, Products, Orders, etc.)
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components
├── lib/                # Utility functions and configurations (Prisma, Utils)
└── ...
```

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Generates Prisma client and builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for Nepal.
