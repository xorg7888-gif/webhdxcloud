import { HostingPlan, Datacenter, FAQItem, Testimonial } from './types';

export const MINECRAFT_PLANS: HostingPlan[] = [
  {
    id: 'mc-grass',
    name: 'Grass Edition',
    price: 30,
    type: 'minecraft',
    specs: {
      cpu: 'Ryzen 9 7900X (1 Core)',
      ram: '1 GB DDR5 ECC RAM',
      storage: '15 GB NVMe SSD PCIe 4.0',
      bandwidth: '1 Gbps Unmetered Link',
      protection: '3 Tbps Mitigation'
    },
    features: [
      'Perfect for classic vanilla play',
      'Instant Setup (within 10s)',
      'Mumbai & Casablanca Nodes',
      'Free DNS Subdomain (hdx.me)',
      'Pre-installed Spigot/Paper',
      'Co-founders priority care'
    ]
  },
  {
    id: 'mc-stone',
    name: 'Stone Premium',
    price: 120,
    type: 'minecraft',
    specs: {
      cpu: 'Ryzen 9 7950X (2 Cores)',
      ram: '2 GB DDR5 ECC memory',
      storage: '35 GB NVMe SSD PCIe 4.0',
      bandwidth: '5 Gbps Unmetered Link',
      protection: '5 Tbps Multi-Shield Guard'
    },
    features: [
      'Recommended for cooperative SMPs',
      'Instant 10s deployment',
      'Any Global Datacenter choice',
      'Free MariaDB Database instance',
      '2 Backup points included',
      'Automated restart scheduler'
    ]
  },
  {
    id: 'mc-iron',
    name: 'Iron Extreme',
    price: 240,
    type: 'minecraft',
    specs: {
      cpu: 'Ryzen 9 7950X (3 Cores)',
      ram: '4 GB High-Speed DDR5',
      storage: '70 GB Enterprise NVMe',
      bandwidth: '10 Gbps Backbone',
      protection: '5 Tbps Multi-Shield Guard'
    },
    features: [
      'Stellar for medium modded play',
      'Full SFTP Directory write keys',
      'All Minecraft versions (1.8.x - 1.21.x)',
      'Free Dedicated MySQL Ports',
      '3 Backup slots + schedule S3',
      'Automatic crash restarter daemon'
    ]
  },
  {
    id: 'mc-diamond',
    name: 'Diamond Overlord',
    price: 399,
    popular: true,
    type: 'minecraft',
    specs: {
      cpu: 'AMD EPYC Node Engine (4 Cores)',
      ram: '8 GB High-Speed DDR5',
      storage: '140 GB Enterprise NVMe',
      bandwidth: '10 Gbps Unmetered Link',
      protection: 'Dedicated Edge Filters'
    },
    features: [
      'Designed for dense groups & mods',
      'Free Dedicated IP Option',
      'Pinnacle Purpur/Fabric performance',
      'Unlimited Backup slot allocation',
      'Aikar Flags pre-configured',
      'Priority ticket response under 15m'
    ]
  },
  {
    id: 'mc-netherite',
    name: 'Netherite Titan',
    price: 600,
    type: 'minecraft',
    specs: {
      cpu: 'Dual AMD EPYC 9654 (8 Cores)',
      ram: '16 GB High-Density DDR5',
      storage: '280 GB PCIe Gen4 NVMe',
      bandwidth: '10 Gbps Premium Routing',
      protection: 'Dedicated Edge Filters'
    },
    features: [
      'Ultimate tier for massive networks',
      'Free Dedicated IP included',
      'Heavy Forge/Fabric modpack support',
      'Unlimited Backup Slots & S3 integration',
      'Priority cofounder guidance channels',
      'Free BungeeCord proxy linking'
    ]
  }
];

export const VPS_PLANS: HostingPlan[] = [
  {
    id: 'vps-nano',
    name: 'VPS Nano',
    price: 60,
    type: 'vps',
    specs: {
      cpu: '1 vCore CPU',
      ram: '1GB DDR4 RAM',
      storage: '20GB SSD Storage',
      bandwidth: '1Gbps Network Traffic',
      protection: 'Basic DDoS Protection'
    },
    features: [
      'KVM hypervisor allocation',
      'Linux Support (Ubuntu/Debian/Rocky)',
      'Instant KVM Container deployment',
      'Full root console credentials',
      'Morocco, India, USA Datacenters',
      'Perfect for lightweight bot hubs'
    ]
  },
  {
    id: 'vps-basic',
    name: 'VPS Basic',
    price: 149,
    type: 'vps',
    specs: {
      cpu: '2 vCore CPU',
      ram: '2GB DDR4 RAM',
      storage: '40GB NVMe SSD Link',
      bandwidth: '2.5Gbps Network Block',
      protection: 'Better CPU Priority Shield'
    },
    features: [
      'Dedicated KVM hypervisor threads',
      'Full root SSH configurations API',
      'Linux or Windows Server OS options',
      'Instant Deployment (under 10s)',
      'Enterprise DDoS protection layers',
      'Weekly snapshots included'
    ]
  },
  {
    id: 'vps-plus',
    name: 'VPS Plus',
    price: 349,
    type: 'vps',
    specs: {
      cpu: '4 vCore CPU',
      ram: '8GB DDR4 RAM',
      storage: '80GB NVMe SSD Link',
      bandwidth: '5Gbps Premium Routing',
      protection: 'Advanced DDoS Shielding'
    },
    features: [
      'Optimized Ryzen core assignments',
      'Double the IOPS reading speeds',
      'Linux, Windows & Custom ISO upload',
      'Full root access and API shell',
      'Better performance under load',
      'Dedicated backup archives'
    ]
  },
  {
    id: 'vps-pro',
    name: 'VPS Pro',
    price: 699,
    popular: true,
    type: 'vps',
    specs: {
      cpu: '6 vCore CPU',
      ram: '16GB DDR4 RAM',
      storage: '160GB NVMe SSD Link',
      bandwidth: '10Gbps Premium Network',
      protection: 'Enterprise DDoS Shielding'
    },
    features: [
      'Ryzen Extreme thread priorities',
      'Full root terminal CLI',
      'High-end multi-app Compilation status',
      'Instant deployment in under 10s',
      'Premium global routing paths',
      'Priority cofounder ticket resolve'
    ]
  },
  {
    id: 'vps-ultra',
    name: 'VPS Ultra',
    price: 1200,
    type: 'vps',
    specs: {
      cpu: '8 vCore CPU',
      ram: '32GB DDR5 RAM',
      storage: '320GB NVMe SSD Link',
      bandwidth: 'Dedicated Priority Network',
      protection: 'Advanced DDoS Shielding'
    },
    features: [
      'Premium Ryzen CPU cores exclusive',
      'High density lightning fast DDR5 RAM',
      'Dedicated server resources block',
      'Full root access & ISO support',
      'Maximum application IOPS performance',
      '24/7 dedicated system administrators'
    ]
  }
];

export const GAME_PLANS: HostingPlan[] = [
  {
    id: 'game-starter',
    name: 'Gamer Lite',
    price: 50,
    type: 'game',
    specs: {
      cpu: 'Intel i9-14900K (1 Core)',
      ram: '2 GB DDR5 Memory',
      storage: '25 GB NVMe SSD',
      bandwidth: 'Unmetered 1Gbps',
      protection: 'Gamer Shield active'
    },
    features: [
      'Supports Rust, Palworld, CS2, etc.',
      'Instant panel configuration',
      'Global location selection',
      'Full SFTP access included',
      'Steam Workshop direct integration',
      'Auto-restarts & scheduling'
    ]
  },
  {
    id: 'game-upgraded',
    name: 'Gamer Unlimited',
    price: 150,
    popular: true,
    type: 'game',
    specs: {
      cpu: 'Intel i9-14900K (3 Cores)',
      ram: '6 GB DDR5 Memory',
      storage: '75 GB NVMe SSD',
      bandwidth: 'Unmetered 10Gbps Link',
      protection: 'Gamer Shield active'
    },
    features: [
      'Designed for up to 64 active players',
      'Zero jitter, customized tickrate',
      'Premium global locations priority',
      'Real-time automated backups',
      'One-click mod loader system',
      'VIP Discord support channels'
    ]
  }
];

export const DATACENTERS: Datacenter[] = [
  {
    slug: 'morocco',
    name: 'Casablanca, Morocco',
    flag: '🇲🇦',
    latency: 22,
    protection: '5 Tbps DDoS Shield',
    reliability: '99.99%',
    description: 'High-end infrastructure offering unparalleled speed for both North Africa & Southern Europe.',
    coords: { x: 44, y: 55 }
  },
  {
    slug: 'india',
    name: 'Mumbai, India',
    flag: '🇮🇳',
    latency: 15,
    protection: '3.2 Tbps Smart Shield',
    reliability: '99.98%',
    description: 'Located in Mumbai, providing local South-Asian players with extremely stable latency.',
    coords: { x: 70, y: 56 }
  },
  {
    slug: 'dubai',
    name: 'Dubai, UAE',
    flag: '🇦🇪',
    latency: 24,
    protection: '4.5 Tbps Dedicated Shield',
    reliability: '99.99%',
    description: 'Ultra-low latency routing for gamer hubs spanning the entire Middle East.',
    coords: { x: 62, y: 51 }
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    latency: 12,
    protection: '5.5 Tbps Global Shield',
    reliability: '99.99%',
    description: 'Top-tier connectivity hub covering Singapore, Thailand, Indonesia, and Australian connections.',
    coords: { x: 74, y: 68 }
  },
  {
    slug: 'germany',
    name: 'Frankfurt, Germany',
    flag: '🇩🇪',
    latency: 10,
    protection: '8.2 Tbps Core Mitigation',
    reliability: '100% Core SLA',
    description: 'At the heart of Europe. Incredible backbone connectivity and redundant fiber optic loops.',
    coords: { x: 47, y: 38 }
  },
  {
    slug: 'usa',
    name: 'Ashburn, USA',
    flag: '🇺🇸',
    latency: 18,
    protection: '10 Tbps Mega Guard',
    reliability: '99.99%',
    description: 'America\'s primary server corridor. Sub-millisecond links with all tier 1 ISPs.',
    coords: { x: 26, y: 44 }
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How fast is server setup?',
    answer: 'Extremely fast. As soon as you purchase a plan or click an allocation, our automated hypervisor spins up your panel, generates security tokens, and puts your server online in less than 10 seconds. You receive clear connection credentials instantly.',
    category: 'General'
  },
  {
    question: 'Why are plans on HDXCloud so cheap?',
    answer: 'Through our parent brand HDX CO, we own our core physical enterprise server racks and operate custom virtual virtualization layers without relying on third-party broker licenses. This allows us to deliver high-end Ryzen/EPYC performance to consumers directly with minimal markups.',
    category: 'Pricing'
  },
  {
    question: 'Do you support custom Minecraft modpacks and plugins?',
    answer: 'Absolutely! Our custom control panel has a built-in one-click installer for all major systems (Forge, Fabric, Spigot, Purpur, Paper) as well as direct search installers for Modpacks (FTB, CurseForge) and over 50,000 plugins.',
    category: 'Minecraft'
  },
  {
    question: 'Is real-time DDoS protection included?',
    answer: 'Yes! Every packet routed to HDXCloud passes through our custom edge filters that block UDP reflections, TCP floods, DNS amplifications, and intensive bot-nets. Your server continues operating smoothly without ping spikes or sudden crashes.',
    category: 'Security'
  },
  {
    question: 'Can I change my plan or locations later?',
    answer: 'Yes, seamlessly. You can scale your RAM, CPU, and NVMe SSD quotas directly in our billing portal in a single click without reinstalling or losing data. You can also file a migration ticket to swap your datacenter location.',
    category: 'Technical'
  },
  {
    question: 'Is the control dashboard beginner-friendly?',
    answer: 'We built our dashboard to balance simple controls (like simple visual toggle switches, live stats sliders, and clear mod loaders) with full expert options (SFTP directories, dedicated databases, custom startup arguments, and fully integrated SSH credentials). It is perfect for both first-timers and veteran hosts.',
    category: 'General'
  },
  {
    question: 'Are there Co-Founders active to support clients?',
    answer: 'We have a very active core team! Founded by HDX CO, with Co-Founders CLOWN and SENSHI driving community efforts, we are consistently active on our Discord Server. Clients can chat directly with founders for priority tickets and collaborative inquiries hosting.',
    category: 'Support'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alex "TheBuilder"',
    role: 'Server Network Owner',
    rating: 5,
    content: 'Unbelievable performance. I moved my 120-player Modded Minecraft SMP server from a generic provider where we constantly suffered TPS lag. On HDXCloud\'s $4.99 Pro plan, we have a stable 20.0 TPS with no issue whatsoever! Best value in the market.',
    avatarUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Sora_Dev',
    role: 'Full Stack App Developer',
    rating: 5,
    content: 'My VPS was configured under 15 seconds. Having Casablanca, Morocco as a datacenter location is an absolute goldmine. Latency across North Africa is sub 20ms and the price of $3.99 for AMD cores is unmatched.',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Kaelen G.',
    role: 'Guild Organizer',
    rating: 5,
    content: 'We use the $1.99 Game Starter plan to host our Rust training arenas. Seamless plugin support, automated night backups, and instant server restarts. I\'ve already recommended this to 3 other clans. Incredible work by HDX CO!',
    avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Valkyria_MC',
    role: 'Modded Realm Admin',
    rating: 5,
    content: 'The discord support team is legendary. Co-founders SENSHI and CLOWN were super helpful when I had issues migrating my custom fabric mod database. Setup took 1 minute. High-end look but actually cheap!',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop'
  }
];
