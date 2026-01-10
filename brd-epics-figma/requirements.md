# Business Requirements Document (BRD)
## Interactive Grocery Mobile App

### Project Overview
Develop an interactive mobile grocery shopping application that allows customers to browse products, create shopping lists, customize orders, and schedule delivery or pickup for fresh groceries and household items.

### Business Objectives
- Increase online grocery sales by 40% through digital channels
- Reduce shopping time for customers by 50%
- Improve customer satisfaction scores to 4.5+ stars
- Capture customer preferences for personalized recommendations
- Achieve 25% repeat purchase rate within first quarter

### Stakeholders
- **Business Owner**: VP of Digital Experience
- **Product Manager**: Sarah Johnson
- **Technical Lead**: Mike Chen
- **UX Designer**: Lisa Park

---

## Functional Requirements

### FR-1: User Registration & Authentication
**Priority**: High  
**Description**: Users must be able to create accounts and securely log in to access personalized shopping features, saved lists, and order history.

**Requirements**:
- Email/phone-based registration
- Social login (Google, Apple, Facebook)
- Password reset functionality
- Biometric authentication (fingerprint/face ID)
- Profile management with dietary preferences
- Multiple delivery address management
- Family account sharing options

### FR-2: Product Browsing & Search
**Priority**: High  
**Description**: Users should easily browse and search the complete grocery catalog with real-time inventory and pricing.

**Requirements**:
- Category-based navigation (Produce, Dairy, Meat, Bakery, Pantry, Frozen, etc.)
- Search functionality with filters (organic, gluten-free, vegan, price range, brand)
- High-quality product images with multiple views
- Detailed product information (ingredients, nutritional facts, origin)
- Real-time stock availability and freshness indicators
- Featured deals, weekly specials, and seasonal items highlighted
- Barcode scanner for quick product lookup

### FR-3: Shopping List & Product Selection
**Priority**: High  
**Description**: Users must be able to create and manage shopping lists with quantity selection and substitution preferences.

**Requirements**:
- Create multiple shopping lists (Weekly, Party, Recipe-based)
- Quantity selection (by count, weight, or volume)
- Product substitution preferences (if item unavailable)
- Special instructions for pickers (ripeness, size preferences)
- Allergen warnings and dietary indicators
- Save favorite items and frequent purchases
- Recipe integration (add all ingredients to cart)
- Share shopping lists with family members

### FR-4: Shopping Cart Management
**Priority**: High  
**Description**: Users can add, modify, and remove items from their cart before checkout.

**Requirements**:
- Add multiple items to cart
- Edit item quantities and customizations
- Remove items from cart
- Save cart for later
- View running total with taxes
- Apply promo codes/discounts

### FR-5: Delivery & Pickup Scheduling
**Priority**: High  
**Description**: Users can schedule delivery or store pickup with time slot selection and address management.

**Requirements**:
- GPS-based location detection
- Multiple delivery address management
- List view and map view of service areas
- Store locations with inventory availability
- Delivery time slot selection (same-day, next-day, scheduled)
- Pickup time slot reservation
- Delivery zone verification with minimum order amounts
- Express delivery options (premium pricing)
- Contactless delivery instructions

### FR-6: Payment Processing
**Priority**: High  
**Description**: Secure payment processing with multiple payment methods.

**Requirements**:
- Credit/debit card payments
- Digital wallets (Apple Pay, Google Pay)
- Gift card redemption
- Save payment methods securely
- Split payment options
- Tipping functionality (for delivery)

### FR-7: Order Tracking & Management
**Priority**: Medium  
**Description**: Real-time order status updates from placement through shopping, packing, and delivery.

**Requirements**:
- Order confirmation screen with itemized receipt
- Push notifications for status changes (accepted, shopping, packed, out for delivery)
- Live shopping progress (items found/substituted)
- Estimated delivery/pickup time with GPS tracking
- Order history with reorder functionality
- Ability to modify order before shopping begins
- Contact shopper/driver option
- Photo confirmation of delivered items

### FR-8: Loyalty Program & Rewards
**Priority**: Medium  
**Description**: Integrate rewards program for points earning, digital coupons, and personalized offers.

**Requirements**:
- Points earning on purchases (1 point per dollar)
- Points balance display and redemption
- Digital coupon clipping and auto-apply at checkout
- Member-exclusive pricing and early access to sales
- Personalized offers based on purchase history
- Birthday rewards and anniversary bonuses
- Referral program (give $10, get $10)
- Tier-based benefits (Bronze, Silver, Gold)

### FR-9: Customer Support & Feedback
**Priority**: Low  
**Description**: In-app customer support for order issues, product questions, and feedback.

**Requirements**:
- FAQ section (delivery, returns, product questions)
- Live chat support with AI chatbot
- Order issue reporting (missing items, quality issues, delivery problems)
- Rate order and shopping experience
- Product reviews and ratings
- Contact methods (phone, email, chat)
- Request refund or replacement for damaged items
- Accessibility support hotline

---

## Non-Functional Requirements

### NFR-1: Performance
- App launch time: < 2 seconds
- Menu load time: < 1 second
- Order submission: < 3 seconds
- Support 10,000 concurrent users

### NFR-2: Security
- PCI DSS compliance for payment data
- End-to-end encryption for sensitive data
- GDPR and CCPA compliance
- Regular security audits

### NFR-3: Usability
- Intuitive UI requiring no training
- Accessibility compliance (WCAG 2.1 AA)
- Support for multiple languages (English, Spanish)
- Works on iOS 14+ and Android 10+

### NFR-4: Reliability
- 99.9% uptime
- Graceful degradation during outages
- Offline mode for menu browsing

---

## Figma Design References

### Design Files (MCP Server Connected ✅)

#### Main App Design File ✅
- **File URL**: `https://www.figma.com/proto/Keh2M4DFkwxA1qGYfVaCvg/Untitled?node-id=1-1225`
- **File Key**: `Keh2M4DFkwxA1qGYfVaCvg`
- **File Type**: Figma Design (Full MCP Support ✅)
- **App Name**: Grocery Shopping Mobile App

**Verified Working Screens:**
  - **Home/Browse Screen**: node-id=`1:1225` ✅ (Tested - Shows: Fruits category, product grid, navigation tabs)
    - Features: Search bar, category carousel (Fruits), product cards, bottom navigation
    - Visible elements: "Favorites", "History", "Following" tabs, Product images with pricing
  
**Additional Screens to Explore** (Get node IDs by navigating in Figma):
  - Product Detail: Right-click frame → Copy link → extract node-id
  - Shopping Cart: Right-click frame → Copy link → extract node-id
  - Checkout Flow: Right-click frame → Copy link → extract node-id
  - Categories View: Right-click frame → Copy link → extract node-id

**MCP Tools Available:**
- ✅ `get_screenshot` - Working (tested successfully)
- ✅ `get_design_context` - Available (extract UI code)
- ✅ `get_metadata` - Available (get XML structure)
- ✅ `get_variable_defs` - Available (get design tokens)
- ✅ `get_code_connect_map` - Available (design-to-code mapping)

### Design System Elements (Extractable via MCP)

#### Brand Colors (Extract from Figma using `get_variable_defs`)
**From Screenshot Analysis:**
- Primary: #4CAF50 or similar (Green - visible in fresh produce imagery)
- Background: #FFFFFF (White)
- Surface: #F5F5F5 (Light Gray for cards)
- Text Primary: #000000 or #212121 (Dark text)
- Text Secondary: #757575 (Gray for labels like "Brand")
- Product Card BG: #FFFFFF (White cards)

**To Get Exact Colors:**
```
Use MCP command: get_variable_defs with fileKey: Keh2M4DFkwxA1qGYfVaCvg and nodeId: 1:1225
```

**Observable Design Elements:**
- Clean, minimal aesthetic
- Image-heavy product display
- Card-based layout
- Bottom tab navigation (5 tabs visible: Home, Search/Discover, Cart, Notifications, Profile)

#### Typography (Extract from Figma design system)
- Primary Font: System Default or Custom (check Figma)
- Headings: Bold, 20-28px
- Product Names: Semi-Bold, 16-18px
- Body: Regular, 14-16px
- Prices: Bold, 16-20px
- Captions: 12px
- Labels: 10-12px

#### Components (Use `get_code_connect_map` tool)
- Bottom Navigation Bar (Home, Categories, Cart, Account)
- Product Card (with image, name, price, add-to-cart)
- Category Tile
- Shopping Cart Icon with Badge Counter
- Search Bar with Filter Button
- Quantity Stepper (+/-)
- Order Status Timeline
- Delivery Slot Selector
- Product List Item (list view)
- CTA Buttons (Primary, Secondary, Outline)
- Chip/Tag (Organic, Sale, New, etc.)

#### Interaction Patterns (Use `get_design_context` tool)
- Bottom navigation with 4-5 tabs (Home, Categories, Search, Cart, Account)
- Horizontal scrollable category chips
- Grid/List toggle for product views
- Quick add-to-cart with animation
- Bottom sheet for product details and quantity selection
- Pull-to-refresh on product lists and order history
- Floating cart button with item count badge
- Swipe gestures for product image gallery
- Sticky header with search and filters

### Screen Flows
1. **Onboarding** (4 screens)
   - Welcome splash with value proposition
   - Location/Zip code entry
   - Account creation or guest checkout
   - Notification permissions

2. **Product Discovery**
   - Home screen with featured deals and categories
   - Category browse (nested subcategories)
   - Search with autocomplete
   - Filter and sort options
   - Product grid/list view

3. **Product Selection**
   - Product detail view
   - Quantity selector
   - Substitution preferences
   - Add to cart or shopping list
   - Related products recommendations

4. **Shopping Cart & Checkout**
   - Cart review with edit capabilities
   - Apply coupons and rewards
   - Delivery/Pickup selection
   - Time slot picker
   - Delivery address confirmation
   - Payment method selection
   - Tip selection (for delivery)
   - Order summary and place order

5. **Order Tracking**
   - Order confirmation
   - Status timeline (Received → Shopping → Packed → Out for Delivery → Delivered)
   - Live shopper updates
   - GPS tracking for delivery
   - Communication with shopper/driver
   - Order completion and rating

### How to Use Figma MCP During Demo ✅

**Your Working Figma File:**
- URL: `https://www.figma.com/proto/Keh2M4DFkwxA1qGYfVaCvg/Untitled`
- FileKey: `Keh2M4DFkwxA1qGYfVaCvg`
- Verified NodeId: `1:1225` (Home screen with Fruits category)

**Before Demo:**
1. ✅ File confirmed working with MCP server
2. ✅ Screenshot successfully extracted (shows grocery home screen)
3. Navigate in Figma to get more node-ids for other screens
4. Test 1 more screen to have backup for demo

**During Demo (Strategic Tool Use - 6 calls/month limit):**
1. **Call 1**: ✅ **USED** - Got screenshot of Home Screen (successful)
2. **Call 2**: Extract design context for Product Card component
3. **Call 3**: Get metadata/structure of entire page
4. **Call 4**: Get variable definitions (colors, spacing)
5. **Call 5-6**: Save for live audience requests or additional screens

**Demo-Ready Prompts:**

**Prompt for Design Context:**
```
Get the design context for my grocery app home screen.
Use fileKey: Keh2M4DFkwxA1qGYfVaCvg and nodeId: 1:1225
Generate React + Tailwind code for the product card component visible in the design.
```

**Prompt for Variables:**
```
Get variable definitions from my Figma design.
Use fileKey: Keh2M4DFkwxA1qGYfVaCvg and nodeId: 1:1225
Show me the colors, spacing, and typography tokens used.
```

**Prompt for Metadata:**
```
Get metadata from my Figma design to see the structure.
Use fileKey: Keh2M4DFkwxA1qGYfVaCvg and nodeId: 1:1225
```

**What We Observed in Screenshot:**
- ✅ Search bar at top
- ✅ Horizontal tabs: Favorites, History, Following
- ✅ Category carousel with "Fruits" featured prominently
- ✅ Product grid with circular product images (4 items visible)
- ✅ Secondary product grid with rectangular cards showing brands and pricing ($10.99)
- ✅ Bottom navigation with 5 tabs (Home, Discover, Cart, Notifications, Profile)
- ✅ Clean, modern design with image-heavy focus

---

## Success Metrics
- Mobile app orders comprise 40% of total online grocery sales within 6 months
- Average basket size increases by 20% compared to in-store shopping
- Cart abandonment rate below 25%
- App store rating above 4.5 stars (iOS and Android)
- Customer retention rate of 65% (monthly active users)
- Repeat purchase rate of 25% within first quarter
- Average delivery time under 90 minutes for express delivery
- Substitution acceptance rate above 85%

## Timeline
- Phase 1 (MVP): 4 months - Core shopping and checkout features
- Phase 2: 2 months - Loyalty program, shopping lists, and personalization
- Phase 3: 2 months - Advanced features (recipe integration, smart reorder, AI recommendations)
- Phase 4: 1 month - Optimization, analytics, and performance tuning

## Budget
$450,000 for development, testing, and initial marketing

## Constraints & Assumptions
- Integration with existing inventory management system
- Real-time stock synchronization required
- Partnership with third-party delivery services (Instacart, DoorDash) or in-house delivery fleet
- Must comply with food safety and cold chain requirements
- Perishable item handling with expiration date tracking
- Integration with existing loyalty/rewards platform
- Must work within existing e-commerce infrastructure
- Support for multiple store locations with different inventory
- Compliance with local regulations for alcohol and tobacco sales (age verification)
