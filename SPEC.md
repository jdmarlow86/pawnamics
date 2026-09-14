# PawNamics - Pet Sitting Platform Specification

## Concept & Vision

PawNamics is a premium pet sitting marketplace that connects pet owners with trusted local sitters. The platform exudes warmth and trustworthiness through a sophisticated dark theme accented with warm amber tones, evoking the cozy feeling of a pet by the fireplace. The experience feels premium yet approachable—like a boutique service rather than a generic listings site.

## Design Language

### Aesthetic Direction
Dark luxury pet care—deep charcoal backgrounds with warm amber and cream accents. Clean typography with subtle animations that feel playful like a wagging tail. Photography-forward design showcasing happy pets.

### Color Palette
- **Primary Background**: `#0f0f12` (deep charcoal)
- **Secondary Background**: `#1a1a1f` (elevated surfaces)
- **Card Background**: `#242428` (cards, modals)
- **Primary Accent**: `#f5a623` (warm amber - CTAs, highlights)
- **Secondary Accent**: `#7c5cff` (soft purple - secondary actions)
- **Text Primary**: `#f5f5f7` (cream white)
- **Text Secondary**: `#9a9aa0` (muted gray)
- **Success**: `#4ade80`
- **Error**: `#ef4444`
- **Border**: `#2a2a30`

### Typography
- **Headings**: "Outfit" (Google Font) - geometric, modern, friendly
- **Body**: "Inter" (Google Font) - clean readability
- **Scale**: 14px base, 1.5 line-height, modular scale 1.25

### Spatial System
- Base unit: 8px
- Spacing scale: 8, 16, 24, 32, 48, 64, 96px
- Border radius: 8px (buttons), 16px (cards), 24px (large containers)
- Max content width: 1280px

### Motion Philosophy
- Entrance animations: fade-up with 400ms ease-out, 50ms stagger
- Hover states: scale 1.02 with 200ms ease
- Page transitions: crossfade 300ms
- Micro-interactions: subtle bounce on success states

### Visual Assets
- **Icons**: Lucide icons (consistent 24px, 1.5px stroke)
- **Images**: Unsplash dog/cat photography with warm color grading
- **Decorative**: Subtle paw print patterns, gradient overlays

## Layout & Structure

### Navigation
Fixed top navbar with:
- Logo (left) - paw icon + "PawNamics" wordmark
- Nav links (center): Home, Find Sitters, Shelters, Affiliates
- Auth section (right): Login/Register or User dropdown when logged in

### Page Structure

#### Home Page
1. **Hero Section**: Full-width with gradient overlay, headline, CTA, featured pet image
2. **How It Works**: 3-step process with icons
3. **Featured Sitters**: Horizontal scroll of sitter cards
4. **Testimonials**: Card carousel
5. **Call to Action**: Subscription pitch for sitters

#### Find Sitters Page
1. **Search Bar**: Location input with filters dropdown
2. **Filter Panel**: Rate range, services, availability, ratings
3. **Results Grid**: Sitter cards with key info
4. **Map View Toggle**: (visual placeholder)

#### Shelters Page
1. **Hero Banner**: "Adopt, Don't Shop" messaging
2. **Featured Pets Grid**: Highlighted adoptable pets
3. **Shelter Directory**: List of local shelters with contact info

#### Affiliates Page
1. **Partner Grid**: Pet company cards with logos
2. **Exclusive Deals Section**: Featured promotions
3. **Deal Cards**: Code, discount, expiration

#### Sitter Profile/Sign Up
1. **Profile Photo Upload** (visual only)
2. **Bio & Experience**
3. **Services & Rates**
4. **Availability Calendar** (visual)
5. **Payment Setup**: CashApp, Venmo, PayPal, Bitcoin, Bank
6. **Subscription Selection**: Free, Pro, Premium tiers

### Responsive Strategy
- Desktop: Full multi-column layouts
- Tablet (768px): 2-column grids, collapsible filters
- Mobile (480px): Single column, hamburger menu, bottom nav consideration

## Features & Interactions

### Authentication System
- **Sign Up**: Email, password, name, account type (sitter/owner)
- **Login**: Email/password with "Remember me"
- **Logout**: Clear session, redirect to home
- **Session**: localStorage persistence
- **Validation**: Real-time field validation with helpful messages

### Sitter Profile Creation
- Required: Name, photo, bio, location, hourly rate
- Optional: Experience years, services offered, certifications
- Payment methods: Multi-select with input fields
- Subscription tier selection

### Search & Filters
- Location search (text input)
- Rate range slider ($0-$100+/hr)
- Services checkboxes: boarding, walking, sitting, grooming
- Availability filter: today, this week, specific dates
- Sort by: distance, rating, price

### Sitter Cards
- Photo, name, rating (stars), rate, distance
- Services badges
- Hover: expand to show bio preview
- Click: modal with full profile

### Shelters Features
- Pet cards: photo, name, breed, age, description
- Shelter cards: name, address, phone, hours
- "Adopt Me" badge on featured pets

### Affiliates Features
- Partner cards: logo, company name, description
- Deal cards: company, offer, promo code, expiry
- Click to reveal/expand full details

## Component Inventory

### Button
- **Primary**: Amber background, dark text, rounded
- **Secondary**: Transparent with amber border
- **Ghost**: Text only with hover underline
- **States**: default, hover (brighten 10%), active (scale 0.98), disabled (50% opacity)

### Input Field
- Dark background (#1a1a1f), light border
- Focus: amber border glow
- Error: red border, error message below
- Label above, placeholder inside

### Card
- Background #242428, 16px radius
- Subtle shadow on hover
- Image top, content below
- 24px padding

### Modal
- Centered overlay with backdrop blur
- Slide-up entrance animation
- Close button top-right
- Max-width 600px

### Navigation
- Fixed position, glass morphism effect
- Logo left, links center, actions right
- Mobile: hamburger menu with slide-out drawer

### Sitter Card (Special)
- Large photo area (16:10 ratio)
- Rating stars with count
- Rate prominently displayed
- Service badges below
- Location with map pin icon

### Pet Card (Shelter)
- Square image
- Name, breed, age overlay
- "Adopt" button
- Featured badge option

### Deal Card
- Company logo
- Offer headline
- Promo code with copy button
- Expiration countdown

## Technical Approach

### Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Storage**: localStorage for user data and session
- **No backend**: Client-side only (demo/prototype)

### Architecture
- Single HTML file with section-based navigation
- CSS in separate file (or embedded)
- JavaScript modules pattern
- State management via localStorage

### Data Model

```javascript
// User/Sitter
{
  id: "uuid",
  email: "string",
  password: "hashed",
  name: "string",
  type: "sitter" | "owner",
  profile: {
    photo: "url",
    bio: "string",
    location: { city: "string", state: "string" },
    rate: number,
    services: ["boarding", "walking", ...],
    experience: number,
    rating: number,
    reviewCount: number,
    paymentMethods: {
      cashapp: "string",
      venmo: "string",
      paypal: "string",
      bitcoin: "string",
      bank: "string"
    }
  },
  subscription: "free" | "pro" | "premium",
  createdAt: "timestamp"
}

// Pet (for shelters)
{
  id: "uuid",
  name: "string",
  species: "dog" | "cat",
  breed: "string",
  age: "string",
  description: "string",
  image: "url",
  shelterId: "string",
  featured: boolean
}

// Shelter
{
  id: "uuid",
  name: "string",
  address: "string",
  phone: "string",
  hours: "string",
  image: "url"
}

// Affiliate
{
  id: "uuid",
  company: "string",
  logo: "url",
  description: "string",
  deal: {
    headline: "string",
    code: "string",
    discount: "string",
    expires: "date"
  }
}
```

### Sample Data
Pre-populated with 6 realistic sitters, 8 shelter pets, 6 affiliate partners.

### File Structure
```
/pawnamics
  index.html    - Main application
  styles.css    - All styling
  app.js        - Application logic
  SPEC.md       - This file
```
