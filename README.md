## IP Address Tracker
![Banner](public/cover.png)
A beautiful, modern web application for tracking and locating IP addresses in real-time with an interactive map interface.

## Features

- **Real-Time IP Tracking**: Instantly search and locate any IP address
- **Interactive Map**: View exact location on an embedded OpenStreetMap
- **Detailed Information**: Get comprehensive data including:
  - IP Address
  - City & Region
  - Country
  - Timezone
  - ISP (Internet Service Provider)
  - Organization
- **Beautiful Animated UI**: Smooth transitions and modern glassmorphism design
- **Loading States**: Elegant loading spinner with animation
- **Error Handling**: User-friendly error messages
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Auto-Detection**: Leave the search empty to track your own IP

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **IP-API** - Free IP geolocation API
- **OpenStreetMap** - Interactive map integration

## Design Features

- **Gradient Backgrounds**: Stunning blue-to-slate gradient with pattern overlay
- **Glassmorphism Effects**: Modern blur and transparency effects
- **Custom Animations**:
  - Fade-in animations for smooth content appearance
  - Slide-up animations for search bar
  - Shake animation for errors
  - Pulse animation for the logo
  - Spin animations for loading spinner
- **Hover Effects**: Interactive cards with scale and glow effects
- **Custom Scrollbar**: Styled scrollbar matching the theme
- **Color-Coded Cards**: Each info card has unique gradient colors
- **Live Location Indicator**: Animated ping effect on the map

## Installation

1. **Clone the repository**:
```bash
git clone https://github.com/codewithdhruba01/IP-AddressTracker.git
cd ip-address-tracker
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

4. **Build for production**:
```bash
npm run build
```

5. **Preview production build**:
```bash
npm run preview
```

## Usage

1. **Track Any IP Address**:
   - Enter an IP address in the search bar
   - Click the "Track" button or press Enter
   - View detailed information and location on the map

2. **Track Your Own IP**:
   - Leave the search field empty
   - Click the "Track" button
   - Your IP information will be displayed

3. **Explore the Map**:
   - The interactive map shows the exact location
   - Zoom in/out and pan around to explore
   - The marker indicates the precise coordinates

## Project Structure

```
src/
├── components/          # React components
│   ├── SearchBar.tsx   # IP search input with track button
│   ├── InfoCard.tsx    # Display IP information in cards
│   ├── MapView.tsx     # Interactive map component
│   └── LoadingSpinner.tsx  # Animated loading indicator
├── services/           # API services
│   └── ipService.ts    # IP geolocation API integration
├── types/              # TypeScript types
│   └── index.ts        # IPData interface
├── App.tsx             # Main application component
├── index.css           # Global styles and animations
└── main.tsx            # Application entry point
```

## API Information

This project uses the free [IP-API](https://ip-api.com/) service for IP geolocation. The API provides:

- **Rate Limit**: 45 requests per minute
- **No API Key Required**: Free for non-commercial use
- **Data Provided**: Location, ISP, timezone, and more

> For production use with higher limits, consider upgrading to their pro service.

### Map Provider
Currently uses OpenStreetMap. To switch to another provider:
- Update the `mapUrl` in `src/components/MapView.tsx`
- Consider services like Google Maps, Mapbox, or Leaflet

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<div align="center">
   
⭐ If you find this project useful, please give it a star!

**Built with ❤️ by Dhrubaraj Pati for developers**

[Website](https://codewithdhruba.vercel.app/) • [GitHub](https://github.com/codewithdhruba01) • [Twitter](https://x.com/codewithdhruba)

</div>
