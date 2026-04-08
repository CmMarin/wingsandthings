import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "motion/react";
import HeaderHeroSection from "../imports/HeaderHeroSection/HeaderHeroSection";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Menu, X, Flame, Zap, Skull, Gamepad2, Palette, ShoppingBag, Users, Info, DollarSign } from "lucide-react";

const menu: Record<string, any[]> = {
  wings: [
    { name: "Aripioare Coreene cu pastă Gochujang", category: "Korean Wings", heat: 4, desc: "Aripioare cu pastă gochujang, susan și ceapă verde.", img: "https://images.unsplash.com/photo-1730900737727-9301ca83437e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzcGljeSUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzU2NjcxODN8MA&ixlib=rb-4.1.0&q=80&w=1080", color: "#dc2626", bestSeller: true, variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
    { name: "Aripioare cu Miere și Muștar", category: "Honey Mustard Wings", heat: 2, desc: "Aripioare glazurate cu miere și muștar.", img: "https://images.unsplash.com/photo-1616787928056-ae5ab4b649d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxzcGljeSUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzU2NjcxODN8MA&ixlib=rb-4.1.0&q=80&w=1080", color: "#fbbf24", bestSeller: true, variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
    { name: "Aripioare cu Sos Vietnamez de Pește", category: "Vietnamese Wings", heat: 2, desc: "Aripioare în stil vietnamez cu arome proaspete.", img: "https://images.unsplash.com/photo-1684253643886-579c329dcd07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGljeSUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzU2NjcxODN8MA&ixlib=rb-4.1.0&q=80&w=1080", color: "#ea580c", bestSeller: true, variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
    { name: "Aripioare cu Sos BBQ", category: "BBQ Wings", heat: 2, desc: "Aripioare glazurate în sos BBQ hickory.", img: "https://images.unsplash.com/photo-1720462944690-8cace8bbb90c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxzcGljeSUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzU2NjcxODN8MA&ixlib=rb-4.1.0&q=80&w=1080", color: "#b91c1c", bestSeller: true, variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
    { name: "Aripioare cu Mango Habanero", category: "Mango Habanero Wings", heat: 5, desc: "Aripioare picante dulci-acrișoare.", img: "https://images.unsplash.com/photo-1593214932660-b9564b1924ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzU2NjcxODN8MA&ixlib=rb-4.1.0&q=80&w=1080", color: "#ef4444", variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
    { name: "Aripioare Buffalo", category: "Buffalo Wings", heat: 4, desc: "Aripioare clasice Buffalo în sos iute-acrișor.", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwdGVuZGVyc3xlbnwxfHx8fDE3NzU2Nzk5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080", color: "#dc2626", variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
    { name: "Aripioare Crocante", category: "Classic Wings", heat: 2, desc: "Aripioare crocante clasice.", img: "https://images.unsplash.com/photo-1593214932660-b9564b1924ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGNoaWNrZW4lMjB3aW5ncyUyMHJlc3RhdXJhbnQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzU2NjcxODN8MA&ixlib=rb-4.1.0&q=80&w=1080", color: "#ff4500", variants: [{ label: "5 buc", price: "105 MDL" }, { label: "8 buc", price: "168 MDL" }] },
    { name: "Crispy Strips", category: "Classic Wings", heat: 1, desc: "Fâșii de pui crocante.", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwdGVuZGVyc3xlbnwxfHx8fDE3NzU2Nzk5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080", color: "#f59e0b", variants: [{ label: "Porție", price: "95 MDL" }] },
    { name: "Combo Wings & Taco & Fries", category: "Combos", heat: 2, desc: "Combinația ideală.", img: "https://images.unsplash.com/photo-1544026220-43890fceb9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb21ibyUyMG1lYWx8ZW58MXx8fDE3NzU2ODg4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080", color: "#10b981", variants: [{ label: "Porție", price: "200 MDL" }] },
    { name: "Platou cu aripioare", category: "Combos", heat: 3, desc: "Platoul regilor.", img: "https://images.unsplash.com/photo-1585803270030-9b48c772b1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMXx8Y2hpY2tlbiUyMHdpbmdzfGVufDF8fHx8MTc3NTY4ODkxN3ww&ixlib=rb-4.1.0&q=80&w=1080", color: "#8b5cf6", variants: [{ label: "Platou", price: "295 MDL" }] },
  ],
  cauliflower: [
    { name: "Conopidă Buffalo", category: "Cauliflower", desc: "Conopidă în sos Buffalo.", img: "https://images.unsplash.com/photo-1563805042-7684c8a9e9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxyb2FzdGVkJTIwY2F1bGlmbG93ZXJ8ZW58MXx8fHwxNzc1Njc5ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
    { name: "Conopidă Coreeană cu Gochujang", category: "Cauliflower", desc: "Conopidă cu pastă gochujang.", img: "https://images.unsplash.com/photo-1622340329947-f018378619bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxiaXRlcyUyMGZvb2R8ZW58MXx8fHwxNzc1Njc5OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
    { name: "Conopidă cu Miere și Muștar", category: "Cauliflower", desc: "Conopidă glazurată cu miere și muștar.", img: "https://images.unsplash.com/photo-1534080564583-b26aeb399dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyb2FzdGVkJTIwY2F1bGlmbG93ZXJ8ZW58MXx8fHwxNzc1Njc5ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
    { name: "Conopidă cu Sos BBQ", category: "Cauliflower", desc: "Conopidă glazurată în sos BBQ hickory.", img: "https://images.unsplash.com/photo-1563805042-7684c8a9e9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxyb2FzdGVkJTIwY2F1bGlmbG93ZXJ8ZW58MXx8fHwxNzc1Njc5ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
    { name: "Conopidă cu Mango Habanero", category: "Cauliflower", desc: "Conopidă dulce și picantă.", img: "https://images.unsplash.com/photo-1534080564583-b26aeb399dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyb2FzdGVkJTIwY2F1bGlmbG93ZXJ8ZW58MXx8fHwxNzc1Njc5ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "8 buc", price: "110 MDL" }, { label: "12 buc", price: "160 MDL" }] },
  ],
  tacos: [
    { name: "Taco cu vită coreeană", category: "Tacos", desc: "Taco delicios cu vită marinată.", img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0YWNvc3xlbnwxfHx8fDE3NzU2Nzk4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Porție", price: "135 MDL" }] },
    { name: "Taco Jamaican Jerk", category: "Tacos", desc: "Taco cu arome jamaicane.", img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0YWNvc3xlbnwxfHx8fDE3NzU2Nzk4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Porție", price: "115 MDL" }] },
  ],
  sides: [
    { name: "Cartofi prăjiți 150g", category: "Sides", desc: "Cartofi crocanți.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmcmllc3xlbnwxfHx8fDE3NzU2Nzk5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Porție", price: "50 MDL" }] },
    { name: "Cartofi wedges prăjiți 200g", category: "Sides", desc: "Wedges picanți.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmcmllc3xlbnwxfHx8fDE3NzU2Nzk5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Porție", price: "60 MDL" }] },
    { name: "Bile de cartofi prăjite 150g", category: "Sides", desc: "Tater tots aurii.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmcmllc3xlbnwxfHx8fDE3NzU2Nzk5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Porție", price: "60 MDL" }] },
    { name: "Inele de ceapă", category: "Sides", desc: "Inele de ceapă suculente.", img: "https://images.unsplash.com/photo-1639024471210-62153eb268a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxvbmlvbiUyMHJpbmdzfGVufDF8fHx8MTc3NTY3OTk1Mnww&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Porție", price: "65 MDL" }] },
  ],
  drinks: [
    { name: "Litra IPA fără alcool", category: "Beer", img: "https://images.unsplash.com/photo-1538481199042-4852facbfdb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxpZGVhbCUyMGJlZXJ8ZW58MXx8fHwxNzc1Njc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "0.3L", price: "50 MDL" }, { label: "0.5L", price: "70 MDL" }] },
    { name: "Beermaster Harap Alb", category: "Beer", img: "https://images.unsplash.com/photo-1505075936515-2882aedd4bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw8fHxpZGVhbCUyMGJlZXJ8ZW58MXx8fHwxNzc1Njc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "0.3L", price: "30 MDL" }, { label: "0.4L", price: "40 MDL" }, { label: "0.5L", price: "50 MDL" }] },
    { name: "Beermaster 110 Ale", category: "Beer", img: "https://images.unsplash.com/photo-1538481199042-4852facbfdb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxpZGVhbCUyMGJlZXJ8ZW58MXx8fHwxNzc1Njc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "0.3L", price: "30 MDL" }, { label: "0.4L", price: "40 MDL" }, { label: "0.5L", price: "50 MDL" }] },
    { name: "Beermaster Golden Lager", category: "Beer", img: "https://images.unsplash.com/photo-1535958636474-b021ce487661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGVhbCUyMGJlZXJ8ZW58MXx8fHwxNzc1Njc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "0.3L", price: "30 MDL" }, { label: "0.4L", price: "40 MDL" }, { label: "0.5L", price: "50 MDL" }] },
    { name: "Beermaster Classic Kvass", category: "Soft drinks", img: "https://images.unsplash.com/photo-1538481199042-4852facbfdb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxpZGVhbCUyMGJlZXJ8ZW58MXx8fHwxNzc1Njc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "0.3L", price: "30 MDL" }, { label: "0.4L", price: "35 MDL" }, { label: "0.5L", price: "40 MDL" }] },
    { name: "Beermaster Cider Caru' cu Mere", category: "Cider", img: "https://images.unsplash.com/photo-1538481199042-4852facbfdb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxpZGVhbCUyMGJlZXJ8ZW58MXx8fHwxNzc1Njc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "0.3L", price: "30 MDL" }, { label: "0.4L", price: "40 MDL" }, { label: "0.5L", price: "50 MDL" }] },
    { name: "Labrewtory", category: "Beer", img: "https://images.unsplash.com/photo-1535958636474-b021ce487661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGVhbCUyMGJlZXJ8ZW58MXx8fHwxNzc1Njc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Flying Mamaliga", price: "65 MDL" }, { label: "American Amber Ale", price: "65 MDL" }, { label: "American Pale Ale", price: "65 MDL" }, { label: "Brut IPA", price: "65 MDL" }, { label: "Irish Stout", price: "65 MDL" }] },
    { name: "Keller-Holz", category: "Beer", img: "https://images.unsplash.com/photo-1535958636474-b021ce487661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGVhbCUyMGJlZXJ8ZW58MXx8fHwxNzc1Njc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "0.5L Munich Helles", price: "60 MDL" }, { label: "0.5L Weissbier", price: "60 MDL" }, { label: "0.3L IPA", price: "60 MDL" }, { label: "0.3L Alkoholfrei", price: "60 MDL" }] },
    { name: "Vin (Pahar)", category: "Wine", img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3aW5lJTIwZ2xhc3N8ZW58MXx8fDE3NzU2ODkwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Roșu, Merlot", price: "50 MDL" }, { label: "Rose, Malbec", price: "50 MDL" }, { label: "Alb, Chardonnay", price: "50 MDL" }] },
    { name: "Băuturi Răcoritoare 0.3L", category: "Soft drinks", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcml0ZXxlbnwxfHx8fDE3NzU2ODkwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Coca-Cola", price: "30 MDL" }, { label: "Sprite", price: "30 MDL" }, { label: "Fanta", price: "30 MDL" }] },
    { name: "Apa Bucovina", category: "Soft drinks", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwdGVhfGVufDF8fHx8MTc3NTY3OTkwM3ww&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Carbogazoasă 0.5L", price: "30 MDL" }, { label: "Plată 0.3L", price: "30 MDL" }] },
    { name: "Ceai & Cafea", category: "Hot drinks", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwdGVhfGVufDF8fHx8MTc3NTY3OTkwM3ww&ixlib=rb-4.1.0&q=80&w=1080", variants: [{ label: "Ceai Nestea", price: "40 MDL" }, { label: "Cafea Americano", price: "30 MDL" }, { label: "Cafea Espresso", price: "30 MDL" }, { label: "Ceai Negru", price: "50 MDL" }, { label: "Ceai Verde", price: "50 MDL" }, { label: "Ceai Fructe", price: "50 MDL" }, { label: "Ceai Din Plante", price: "50 MDL" }] },
  ]
};

  const wingMenuItems = menu.wings;
const bestSellers = menu.wings.filter((item) => item.bestSeller);
const mainMenuDisplay = bestSellers.length ? bestSellers : menu.wings.slice(0, 6);

const arcadeGames = [
  { name: "Street Fighter II", available: true, type: "Fighting" },
  { name: "Pac-Man", available: true, type: "Arcade Classic" },
  { name: "Mortal Kombat", available: false, type: "Fighting" },
  { name: "Catan", available: true, type: "Board Game" },
  { name: "Cards Against Humanity", available: true, type: "Board Game" },
  { name: "Jenga XL", available: true, type: "Party Game" },
];

const artPieces = [
  {
    title: "Inferno Wings",
    artist: "Marcus Blade",
    price: "$450",
    img: "https://images.unsplash.com/photo-1571063769977-3c1869a4b022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncnVuZ2UlMjBhcnQlMjBnYWxsZXJ5JTIwc3RyZWV0JTIwYXJ0JTIwdXJiYW58ZW58MXx8fHwxNzc1NjY3MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Mixed media on canvas, 24x36"
  },
  {
    title: "Sonic Destruction",
    artist: "Raven Steel",
    price: "$380",
    img: "https://images.unsplash.com/photo-1571063769585-bdaaeba1e48f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxncnVuZ2UlMjBhcnQlMjBnYWxsZXJ5JTIwc3RyZWV0JTIwYXJ0JTIwdXJiYW58ZW58MXx8fHwxNzc1NjY3MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Acrylic and spray paint, 30x40"
  },
  {
    title: "Amplified Fury",
    artist: "Jade Riot",
    price: "$520",
    img: "https://images.unsplash.com/photo-1561458074-ffd014dddda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxncnVuZ2UlMjBhcnQlMjBnYWxsZXJ5JTIwc3RyZWV0JTIwYXJ0JTIwdXJiYW58ZW58MXx8fHwxNzc1NjY3MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Digital print on metal, 20x30"
  },
];

const t = {
  "navMenu": {
    "EN": "Menu",
    "RO": "Meniu",
    "RU": "Меню"
  },
  "navSauces": {
    "EN": "Sauces",
    "RO": "Sosuri",
    "RU": "Соусы"
  },
  "navArcade": {
    "EN": "Arcade",
    "RO": "Jocuri",
    "RU": "Игры"
  },
  "navArt": {
    "EN": "Art",
    "RO": "Artă",
    "RU": "Искусство"
  },
  "navLocation": {
    "EN": "Location",
    "RO": "Locație",
    "RU": "Локация"
  },
  "theMeat": {
    "EN": "THE MEAT",
    "RO": "CARNEA",
    "RU": "МЯСО"
  },
  "bestSellersTitle": {
    "EN": "Best Sellers",
    "RO": "Cele mai Vândute",
    "RU": "Хиты Продаж"
  },
  "chooseWeapon": {
    "EN": "Choose your weapon. Each wing is a riff, each bite is a breakdown. No compromises.",
    "RO": "Alege-ți arma. Fiecare aripioară e un riff, fiecare mușcătură e un breakdown. Fără compromisuri.",
    "RU": "Выбирай оружие. Каждое крылышко - это рифф, каждый укус - брейкдаун. Без компромиссов."
  },
  "openFullMenu": {
    "EN": "Open Full Menu",
    "RO": "Deschide Meniul Complet",
    "RU": "Открыть Полное Меню"
  },
  "sauceMenuTitle1": {
    "EN": "Sauce",
    "RO": "Lab.",
    "RU": "Лаб."
  },
  "sauceMenuTitle2": {
    "EN": "Lab",
    "RO": "Sosuri",
    "RU": "Соусов"
  },
  "sauceLabDesc": {
    "EN": "Handcrafted heat levels from mild to absolutely unhinged. Find your threshold.",
    "RO": "Niveluri de iuțeală artizanale, de la blând la absolut nebunesc. Găsește-ți limita.",
    "RU": "Крафтовые уровни остроты от мягких до абсолютно безумных. Найди свой предел."
  },
  "wingGamesTitle1": {
    "EN": "Wing",
    "RO": "Jocuri",
    "RU": "Игры"
  },
  "wingGamesTitle2": {
    "EN": "Games",
    "RO": "Aripioare",
    "RU": "Крылышек"
  },
  "wingGamesDesc": {
    "EN": "Board Games & Battles",
    "RO": "Jocuri de Societate și Bătălii",
    "RU": "Настольные Игры и Битвы"
  },
  "wingGamesSub": {
    "EN": "Find a rival or make a truce. Play our games or bring your own. The victor takes the glory. The loser buys the next round.",
    "RO": "Găsește un rival sau faceți pace. Joacă jocurile noastre sau adu-le pe ale tale. Învingătorul ia gloria. Pierzătorul cumpără următorul rând.",
    "RU": "Найди соперника или заключи перемирие. Играй в наши игры или приноси свои. Победитель забирает славу. Проигравший покупает следующий раунд."
  },
  "noQuarters": {
    "EN": "NO QUARTERS NEEDED",
    "RO": "FĂRĂ FISE",
    "RU": "МОНЕТЫ НЕ НУЖНЫ"
  },
  "artWallTitle1": {
    "EN": "Art",
    "RO": "Peretele",
    "RU": "Стена"
  },
  "artWallTitle2": {
    "EN": "Wall",
    "RO": "Arte",
    "RU": "Искусства"
  },
  "gallerySpace": {
    "EN": "Gallery Space",
    "RO": "Spațiu de Galerie",
    "RU": "Галерея"
  },
  "artWallDesc": {
    "EN": "Local artists only. Raw talent, unfiltered expression. 100% of sales go to the creators. Keep the scene alive.",
    "RO": "Doar artiști locali. Talent pur, expresie nefiltrată. 100% din vânzări merg la creatori. Păstrează scena vie.",
    "RU": "Только местные художники. Чистый талант, нефильтрованное самовыражение. 100% продаж идут создателям. Сохраняй сцену живой."
  },
  "spotOnWall": {
    "EN": "Want a spot on the wall?",
    "RO": "Vrei un loc pe perete?",
    "RU": "Хочешь место на стене?"
  },
  "submitPortfolio": {
    "EN": "Submit your portfolio. We swap artists monthly.",
    "RO": "Trimite portofoliul. Schimbăm artiștii lunar.",
    "RU": "Отправь свое портфолио. Мы меняем художников каждый месяц."
  },
  "submitSpecs": {
    "EN": "Submit Specs",
    "RO": "Trimite Specificații",
    "RU": "Отправить Заявку"
  },
  "findThePitTitle": {
    "EN": "Find The Pit",
    "RO": "Găsește Groapa",
    "RU": "Найди Яму"
  },
  "open7Days": {
    "EN": "Open 7 days. Late nights. Loud music.",
    "RO": "Deschis 7 zile. Nopți târzii. Muzică tare.",
    "RU": "Открыто 7 дней. Поздние ночи. Громкая музыка."
  },
  "getDirections": {
    "EN": "Get Directions",
    "RO": "Obține Indicații",
    "RU": "Проложить Маршрут"
  },
  "callBar": {
    "EN": "Call the Bar",
    "RO": "Sună la Bar",
    "RU": "Позвонить в Бар"
  },
  "bornInFire": {
    "EN": "Born in fire.",
    "RO": "Născut în foc.",
    "RU": "Рожденный в огне."
  },
  "forgedFlavor": {
    "EN": "Forged in flavor.",
    "RO": "Făurit din savoare.",
    "RU": "Выкованный во вкусе."
  },
  "noCorpBs": {
    "EN": "No corporate bullshit.",
    "RO": "Fără vrăjeli corporatiste.",
    "RU": "Никакой корпоративной ерунды."
  },
  "hours": {
    "EN": "Hours",
    "RO": "Program",
    "RU": "Часы работы"
  },
  "social": {
    "EN": "Social",
    "RO": "Social Media",
    "RU": "Соцсети"
  },
  "monThu": {
    "EN": "Mon-Thu",
    "RO": "Luni-Joi",
    "RU": "Пн-Чт"
  },
  "friSat": {
    "EN": "Fri-Sat",
    "RO": "Vin-Sâm",
    "RU": "Пт-Сб"
  },
  "sun": {
    "EN": "Sun",
    "RO": "Dum",
    "RU": "Вс"
  },
  "rights": {
    "EN": "© 2026 Wings & Things. All rights reserved. Do not copy our vibes.",
    "RO": "© 2026 Wings & Things. Toate drepturile rezervate. Nu ne copiați vibe-ul.",
    "RU": "© 2026 Wings & Things. Все права защищены. Не копируйте наш вайб."
  },
    "addToRound": { "EN": "Add to Round", "RO": "Adaugă la Comandă", "RU": "Добавить в Заказ" },
  "yourRound": { "EN": "Your Round", "RO": "Comanda Ta", "RU": "Твой Заказ" },
  "summonWaiter": { "EN": "Summon Waiter", "RO": "Cheamă Ospătarul", "RU": "Позвать Официанта" },
  "emptyRound": { "EN": "Your round is empty. Pick a weapon.", "RO": "Comanda e goală. Alege o armă.", "RU": "Ваш заказ пуст. Выбери оружие." },
  "qty": { "EN": "QTY", "RO": "CANT", "RU": "КОЛ-ВО" },
  "total": { "EN": "TOTAL", "RO": "TOTAL", "RU": "ИТОГО" },
  "sendIt": { "EN": "SEND IT TO THE PIT", "RO": "TRIMITE LA GROAPĂ", "RU": "ОТПРАВИТЬ В ЯМУ" },
  "remove": { "EN": "X", "RO": "X", "RU": "X" },
  "noWeakSauce": {
    "EN": "NO WEAK SAUCE",
    "RO": "FĂRĂ SOS SLAB",
    "RU": "НИКАКОГО СЛАБОГО СОУСА"
  }
};

type Lang = "EN" | "RO" | "RU";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedWing, setSelectedWing] = useState<any | null>(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState<typeof artPieces[0] | null>(null);

  const [currentLang, setCurrentLang] = useState<Lang>("EN");
  const [tray, setTray] = useState<any[]>([]);
  const [trayOpen, setTrayOpen] = useState(false);

  const addToTray = (item: any) => {
    setTray(prev => {
      const existing = prev.find(i => i.name === item.name && i.variantLabel === item.variantLabel);
      if (existing) return prev.map(i => (i.name === item.name && i.variantLabel === item.variantLabel) ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
    setSelectedWing(null);
    setFullMenuOpen(false);
  };

  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const menuSectionRef = useRef(null);
  const sauceSectionRef = useRef(null);
  const arcadeRef = useRef(null);
  const artRef = useRef(null);

  const menuInView = useInView(menuSectionRef, { once: true, amount: 0.2 });
  const sauceInView = useInView(sauceSectionRef, { once: true, amount: 0.2 });
  const arcadeInView = useInView(arcadeRef, { once: true, amount: 0.2 });
  const artInView = useInView(artRef, { once: true, amount: 0.2 });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.15]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    if (menuOpen || selectedWing || fullMenuOpen || selectedArt) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen, selectedWing, fullMenuOpen, selectedArt]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f3f4f6] overflow-x-hidden relative">
      <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#000]/95 border-b-8 border-[#ff4500] backdrop-blur-none"
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <motion.div
            className="flex items-center justify-center transform hover:rotate-3 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <img 
               src="/logo-wings.png"
               alt="Wings and Things Logo"
               className="h-19 w-auto  "
            />
          </motion.div>

          <div className="hidden md:flex gap-10 items-center mt-2">
            {[ { id: "menu", label: t.navMenu[currentLang] }, { id: "sauces", label: t.navSauces[currentLang] }, { id: "arcade", label: t.navArcade[currentLang] }, { id: "art", label: t.navArt[currentLang] }, { id: "location", label: t.navLocation[currentLang] } ].map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className="font-['Anton'] text-xl uppercase tracking-widest text-[#f3f4f6] hover:text-[#e63946] transition-colors relative group"
                whileHover={{ scale: 1.1, y: -2 }}
              >{item.label}<div className="absolute -bottom-1 left-0 w-0 h-1 bg-[#e63946] group-hover:w-full transition-all duration-300"></div>
              </motion.a>
            ))}
            
            <div className="flex gap-2 ml-4 font-['Anton'] text-xl text-[#f3f4f6] tracking-widest border-l-4 border-[#333] pl-6 mt-1">
              <span onClick={() => setCurrentLang('RO')} className={`cursor-pointer transition-colors ${currentLang === 'RO' ? 'text-[#e63946] drop-shadow-[2px_2px_0_#fff]' : 'text-gray-500 hover:text-[#f3f4f6]'}`}>RO</span>
              <span className="text-gray-700">/</span>
              <span onClick={() => setCurrentLang('EN')} className={`cursor-pointer transition-colors ${currentLang === 'EN' ? 'text-[#e63946] drop-shadow-[2px_2px_0_#fff]' : 'text-gray-500 hover:text-[#f3f4f6]'}`}>EN</span>
              <span className="text-gray-700">/</span>
              <span onClick={() => setCurrentLang('RU')} className={`cursor-pointer transition-colors ${currentLang === 'RU' ? 'text-[#e63946] drop-shadow-[2px_2px_0_#fff]' : 'text-gray-500 hover:text-[#f3f4f6]'}`}>RU</span>
            </div>
          </div>

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#f3f4f6] bg-[#e63946] p-2 border-2 border-[#ff4500] shadow-[4px_4px_0_#000]"
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-y-0 right-0 w-full bg-black z-40 md:hidden flex flex-col items-center justify-center gap-8"
      >
        {[ { id: "menu", label: t.navMenu[currentLang] }, { id: "sauces", label: t.navSauces[currentLang] }, { id: "arcade", label: t.navArcade[currentLang] }, { id: "art", label: t.navArt[currentLang] }, { id: "location", label: t.navLocation[currentLang] } ].map((item, i) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            initial={{ opacity: 0, x: 50 }}
            animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setMenuOpen(false)}
            className="font-['Teko'] text-5xl font-bold text-[#f3f4f6] hover:text-[#ff4500] transition-colors"
          >{item.label}</motion.a>
        ))}
      </motion.div>

      
      {/* Floating Tray Button */}
      <AnimatePresence>
        {tray.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={() => setTrayOpen(true)}
              className="bg-[#e63946] text-[#f3f4f6] px-6 py-4 font-['Anton'] text-3xl uppercase tracking-wider border-4 border-black shadow-[8px_8px_0_#ff4500] hover:scale-105 transition-transform flex items-center gap-4"
            >
              {t.yourRound[currentLang]}
              <span className="bg-black text-[#ff4500] px-3 py-1 font-['Teko'] text-2xl -skew-x-12">
                {tray.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tray Sidebar */}
      <AnimatePresence>
        {trayOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[450px] bg-[#111] border-l-8 border-[#ff4500] z-50 flex flex-col shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-overlay z-0" />
            <div className="p-6 sm:p-8 flex justify-between items-center border-b-4 border-gray-800 relative z-10 bg-black">
              <h2 className="font-['Anton'] text-5xl uppercase text-[#f3f4f6] drop-shadow-[3px_3px_0_#e63946]">{t.yourRound[currentLang]}</h2>
              <button 
                onClick={() => setTrayOpen(false)}
                className="p-3 bg-[#e63946] text-[#f3f4f6] hover:bg-white hover:text-black border-2 border-black rotate-3 hover:rotate-90 transition-all shadow-[4px_4px_0_#000]"
              >
                <X size={28} strokeWidth={3} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 relative z-10">
              {tray.length === 0 ? (
                <div className="text-center mt-20">
                  <Flame size={64} className="text-gray-800 mx-auto mb-6" />
                  <p className="font-['Manrope'] text-xl font-bold text-gray-500 uppercase tracking-widest">{t.emptyRound[currentLang]}</p>
                </div>
              ) : (
                tray.map((item, idx) => (
                  <div key={idx} className="bg-black border-2 border-gray-800 p-4 flex gap-4 items-center group hover:border-[#ff4500] transition-colors relative">
                    <img src={item.img} className="w-20 h-20 object-cover border border-gray-800 filter contrast-125 saturate-125" />
                    <div className="flex-1">
                      <h4 className="font-['Teko'] text-2xl font-bold text-[#f3f4f6] uppercase leading-none mb-1">{item.name}</h4>
                      <p className="font-['Manrope'] text-sm font-bold text-[#ff4500] uppercase tracking-widest">{item.variants?.[0]?.price || item.price}</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                       <div className="flex bg-[#1a1a1a] border border-gray-700 font-['Teko'] text-xl">
                         <button onClick={() => setTray(tray.map(i => i === item ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))} className="px-3 hover:bg-gray-800 text-gray-400">-</button>
                         <span className="px-3 font-bold">{item.quantity}</span>
                         <button onClick={() => setTray(tray.map(i => i === item ? { ...i, quantity: i.quantity + 1 } : i))} className="px-3 hover:bg-gray-800 text-gray-400">+</button>
                       </div>
                       <button onClick={() => setTray(tray.filter(i => i !== item))} className="text-gray-500 hover:text-[#e63946] font-['Manrope'] text-xs font-bold uppercase underline tracking-widest">{t.remove[currentLang]}</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {tray.length > 0 && (
              <div className="p-6 sm:p-8 bg-black border-t-4 border-gray-800 relative z-10">
                <button 
                  onClick={() => {
                    alert('Order Sent to the Pit!');
                    setTray([]);
                    setTrayOpen(false);
                  }}
                  className="w-full py-5 bg-[#ff4500] text-black font-['Anton'] text-3xl uppercase tracking-widest hover:bg-white transition-colors border-4 border-black shadow-[8px_8px_0_#e63946] flex flex-col items-center justify-center"
                >
                  {t.sendIt[currentLang]}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wing Detail Modal */}
      <AnimatePresence>
        {selectedWing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWing(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border-4 border-black max-w-4xl w-full relative overflow-visible shadow-[15px_15px_0px_#ff4500]"
            >
              <button
                onClick={() => setSelectedWing(null)}
                className="absolute -top-6 -right-6 z-20 bg-[#ff4500] p-4 hover:bg-[#ff4500] hover:text-black hover:rotate-90 transition-all border-2 border-black"
                title="Close"
              >
                <X className="text-black" size={32} />
              </button>

              <div className="grid md:grid-cols-2 relative">
                
                {/* Visual texture overlay over entire modal */}
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-10" />

                <div className="relative h-96 md:h-auto border-r-2 border-gray-900 bg-black flex items-center justify-center p-8 overflow-hidden group">
                  <div className="absolute inset-0 bg-[#e63946] mix-blend-multiply opacity-40 z-0"></div>
                  <img
                    src={selectedWing.img}
                    alt={selectedWing.name}
                    className="w-full h-[120%] object-cover object-center filter saturate-150 contrast-125 scale-110 group-hover:scale-[1.15] rotation-1 transition-transform duration-[2s] z-10"
                    style={{ transformOrigin: 'center center' }}
                  />
                  {/* Gritty vignette */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black z-20 pointer-events-none" />
                </div>

                <div className="p-10 relative z-20">
                  <div className="mb-6 flex justify-between items-start">
                    <div>
                      <span className="font-['Manrope'] text-xs font-extrabold tracking-[0.3em] text-gray-500 uppercase block mb-2">Item Docs</span>
                      <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#f3f4f6] leading-[0.9]">
                        {selectedWing.name}
                      </h2>
                    </div>
                  </div>

                  {selectedWing.heat !== undefined && (
                    <div className="flex gap-1 mb-8 p-3 bg-black border border-gray-800 w-fit">
                      {[...Array(5)].map((_, i) => (
                        <Flame
                          key={i}
                          size={20}
                          className={i < selectedWing.heat ? "text-[#ff4500] fill-[#ff4500] drop-shadow-[0_0_5px_rgba(255,69,0,0.8)]" : "text-gray-800"}
                        />
                      ))}
                    </div>
                  )}

                  <p className="font-['Manrope'] text-[16px] leading-[1.8] text-gray-400 mb-8 border-l-2 border-[#ff4500] pl-4 italic">
                    "{selectedWing.desc}"
                  </p>

                  {selectedWing.variants && selectedWing.variants.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-gray-400 font-['Manrope'] text-sm uppercase tracking-widest font-bold mb-3">Opțiuni / Variante</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedWing.variants.map((v: any, idx: number) => (
                          <button 
                            key={v.label} 
                            onClick={() => setSelectedVariantIndex(idx)}
                            className={`px-4 py-2 border-2 uppercase font-['Teko'] text-xl font-bold transition-all ${selectedVariantIndex === idx ? 'border-[#ff4500] bg-[#e63946] text-black shadow-[4px_4px_0_#000]' : 'border-gray-800 bg-[#111] text-gray-400 hover:border-gray-600'}`}>
                            {v.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <div className="flex justify-between items-end border-b-2 border-gray-800 pb-2 mb-4">
                       <h3 className="font-['Teko'] text-2xl text-[#d1d5db] uppercase tracking-widest leading-none">Specs</h3>
                       {selectedWing.details && <span className="font-['Manrope'] text-xs text-gray-600 uppercase">Vol. {selectedWing.details}</span>}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-black border border-gray-700 text-xs font-['Manrope'] font-bold text-gray-400 uppercase tracking-widest">{selectedWing.category}</span>
                      {selectedWing.sides?.map((side) => (
                        <span
                          key={side}
                          className="px-3 py-1 bg-[#1a1a1a] border border-[#ff4500]/50 text-xs font-['Manrope'] font-bold text-[#f3f4f6] uppercase tracking-widest pointer-events-none"
                        >
                          + {side}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-800">
                    <span className="font-['Anton'] text-4xl sm:text-5xl text-[#f3f4f6]">{selectedWing.variants?.[selectedVariantIndex]?.price || selectedWing.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToTray({ ...selectedWing, price: selectedWing.variants?.[selectedVariantIndex]?.price || selectedWing.price, variantLabel: selectedWing.variants?.[selectedVariantIndex]?.label, variantIndex: selectedVariantIndex })}
                      className="px-6 py-3 sm:px-8 sm:py-4 bg-[#ff4500] text-black font-['Teko'] text-xl sm:text-2xl font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-black border-2 border-black border-r-4 border-b-4 transition-all shadow-[6px_6px_0px_#000]"
                    >
                      {t.addToRound[currentLang]}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Menu Modal */}
      <AnimatePresence>
        {fullMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={() => setFullMenuOpen(false)}
            className="fixed inset-0 bg-[#050505] z-50 overflow-y-auto"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0" />
            <div className="min-h-screen py-16 px-6 md:px-12 relative z-10">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-7xl mx-auto"
              >
                <div className="flex items-center justify-between mb-16 border-b-8 border-[#ff4500] pb-8">
                  <div>
                    <span className="font-['Manrope'] text-xs font-extrabold tracking-[0.4em] text-gray-500 uppercase block mb-4">Official Document</span>
                    <h2 className="font-['Anton'] text-[45px] sm:text-[60px] md:text-[120px] uppercase tracking-tighter text-[#f3f4f6] leading-none drop-shadow-lg">
                      Full Menu
                    </h2>
                  </div>
                  <button
                    onClick={() => setFullMenuOpen(false)}
                    className="bg-[#ff4500] p-6 hover:bg-[#ff4500] hover:text-black transition-colors rotate-3 hover:rotate-90 border-4 border-black shadow-[8px_8px_0px_rgba(255,255,255,0.1)]"
                  >
                    <X className="text-black" size={40} />
                  </button>
                </div>

                <div>
                  {Object.entries(menu).map(([categoryKey, items]: any, catIndex) => (
                    <div key={categoryKey} className="mb-16">
                      <div className="flex items-center gap-4 mb-8">
                        <h3 className="font-['Teko'] text-5xl md:text-7xl text-[#ff4500] uppercase font-bold tracking-wider leading-none">
                          {categoryKey}
                        </h3>
                        <div className="h-2 flex-grow bg-[repeating-linear-gradient(45deg,#333_0,#333_2px,transparent_2px,transparent_8px)]"></div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {(items as any[]).map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => {
                              setFullMenuOpen(false);
                              setSelectedWing(item);
                            }}
                            className="bg-black border-4 border-gray-900 hover:border-[#ff4500] transition-all cursor-pointer group shadow-[6px_6px_0px_#111] hover:shadow-[10px_10px_0px_#ff4500] hover:-translate-y-1 relative"
                          >
                            {/* Decorative Tape */}
                            <div className="absolute -top-3 left-4 w-12 h-6 bg-[#ff4500]/10 rotate-[-5deg] mix-blend-overlay" />
                            
                            <div className="flex gap-0 sm:gap-6 p-4 sm:p-6 flex-col sm:flex-row">
                              <div className="w-full sm:w-40 h-40 flex-shrink-0 overflow-hidden border-2 border-gray-800 relative bg-[#111]">
                                <div className="absolute inset-0 bg-[#e63946] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity z-10"></div>
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter saturate-150 contrast-125"
                                />
                              </div>
                              <div className="flex-1 mt-4 sm:mt-0 flex flex-col">
                                <div className="flex items-start justify-between mb-3 gap-2">
                                  <h3 className="font-['Teko'] text-3xl md:text-4xl font-bold text-[#f3f4f6] uppercase leading-[0.9]">
                                    {item.name}
                                  </h3>
                                  <div className="flex gap-0.5 flex-shrink-0 bg-[#111] p-1 border border-gray-800">
                                    {(item.heat !== undefined) && [...Array(5)].map((_, i) => (
                                      <Flame
                                        key={i}
                                        size={14}
                                        className={i < item.heat ? "text-[#ff4500] fill-[#ff4500]" : "text-gray-700 hidden sm:block"}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="font-['Manrope'] text-sm text-gray-400 mb-4 border-l-2 border-gray-700 pl-3 italic opacity-80 h-10 overflow-hidden line-clamp-2">
                                  {item.desc}
                                </p>
                                <div className="mt-auto flex items-end justify-between">
                                  <span className="font-['Anton'] text-3xl text-[#f3f4f6] bg-gray-900 px-3 py-1 border border-gray-800">{item.variants?.[0]?.price || item.price}</span>
                                  <span className="font-['Manrope'] text-xs font-bold text-[#ff4500] uppercase tracking-widest group-hover:underline underline-offset-4 decoration-2">Details &rarr;</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Art Detail Modal */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArt(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 sm:p-12 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.95, rotate: 2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border-4 sm:border-8 border-[#ff4500] p-4 sm:p-6 max-w-4xl w-full relative shadow-[15px_15px_0px_#e63946] my-auto"
            >
              <button
                onClick={() => setSelectedArt(null)}
                className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-20 bg-[#ff4500] p-4 hover:bg-[#e63946] hover:text-[#f3f4f6] transition-colors border-4 border-black rotate-12 hover:rotate-90 shadow-[6px_6px_0px_rgba(255,255,255,0.2)]"
              >
                <X className="text-black hover:text-[#f3f4f6]" size={32} />
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative w-full md:w-1/2 h-[50vh] border-4 border-gray-900 bg-[#111]">
                  <img
                    src={selectedArt.img}
                    alt={selectedArt.title}
                    className="w-full h-full object-contain p-4 filter contrast-125 saturate-125 brightness-90"
                  />
                  {/* Decorative tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#ff4500]/20 rotate-[-2deg] mix-blend-overlay" />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#ff4500]/20 rotate-[2deg] mix-blend-overlay" />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center py-4">
                  <span className="font-['Manrope'] text-xs font-bold tracking-[0.4em] text-[#e63946] uppercase block mb-4 border-l-2 border-[#e63946] pl-2">Art Info</span>
                  <h2 className="font-['Anton'] text-5xl sm:text-6xl uppercase tracking-tighter text-[#f3f4f6] mb-2 leading-none">
                    {selectedArt.title}
                  </h2>
                  <p className="font-['Manrope'] text-sm tracking-widest text-gray-500 uppercase font-bold mb-8">
                    // Artist: <span className="text-[#f3f4f6]">{selectedArt.artist}</span>
                  </p>
                  
                  <div className="bg-[#111] p-6 border-l-4 border-[#ff4500] mb-8 relative">
                    <div className="absolute -left-2 top-0 w-4 h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)] pointer-events-none"></div>
                    <p className="font-['Manrope'] text-gray-300 leading-relaxed font-bold">
                      {selectedArt.desc}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t-4 border-dashed border-gray-800 pt-8">
                    <span className="font-['Anton'] text-5xl text-[#f3f4f6] bg-black px-4 py-2 border-2 border-[#ff4500] transform -skew-x-[10deg]">{selectedArt.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-5 bg-[#e63946] text-[#f3f4f6] font-['Teko'] text-3xl font-extrabold uppercase tracking-widest hover:bg-[#ff4500] hover:text-black transition-colors flex items-center justify-center gap-3 border-4 border-black shadow-[6px_6px_0px_rgba(230,57,70,0.4)]"
                    >
                      <ShoppingBag size={24} />
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative h-screen"
        >
          <HeaderHeroSection />
        </motion.div>

      {/* Menu Section */}
      <section id="menu" ref={menuSectionRef} className="relative py-32 px-6 bg-[#161616]">
        {/* Subtle gritty background to avoid plain gray */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#0a0a0a] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={menuInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-20"
          >
            <motion.div
              className="inline-flex flex-col items-center justify-center gap-1 mb-8"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-['Teko'] text-[#e63946] text-xl font-bold tracking-[0.2em] bg-[#1a1a1a] px-3 py-1 border border-[#e63946] shadow-[2px_2px_0px_#e63946]">{t.theMeat[currentLang]}</span>
            </motion.div>
            <h2 className="font-['Anton'] text-[40px] sm:text-[70px] md:text-[140px] leading-[1] md:leading-[0.8] uppercase tracking-tighter text-[#f3f4f6] mb-6 drop-shadow-xl relative inline-block">{t.bestSellersTitle[currentLang]}</h2>
            <motion.button
              onClick={() => setFullMenuOpen(true)}
              whileHover={{ scale: 1.05, boxShadow: "4px 4px 0px rgba(255, 69, 0, 1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#ff4500] text-black font-['Teko'] text-xl sm:text-2xl font-bold uppercase tracking-wider hover:bg-[#ff4500] transition-all flex items-center gap-3 mx-auto shadow-[4px_4px_0px_rgba(255,69,0,0.5)]"
            >
              <Info size={24} />{t.openFullMenu[currentLang]}</motion.button>
          </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 mt-16 pb-16">
          {mainMenuDisplay.slice(0, 3).map((item, index) => (
            <WingCard
              key={item.name}
              item={item}
              index={index}
              inView={menuInView}
              onClick={() => { setSelectedWing(item); setSelectedVariantIndex(0); }}
            />
          ))}
        </div>
        </div>
      </section>

      {/* Sauce Lab Section */}
      <section id="sauces" ref={sauceSectionRef} className="relative py-32 px-6 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute left-0 top-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #ff4500 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #e63946 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1], x: [20, -20, 20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={sauceInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-28 relative"
         >
           <motion.div
             className="inline-flex items-center justify-center p-6 bg-black border-4 border-[#e63946] mb-8 shadow-[8px_8px_0px_#e63946]"
             animate={{ rotate: 360, scale: [1, 1.1, 1] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
           >
             <Zap className="text-[#e63946]" size={40} />
           </motion.div>
           <h2 className="font-['Anton'] text-[45px] sm:text-[80px] md:text-[160px] uppercase tracking-tighter mb-4 leading-[0.8] drop-shadow-xl text-[#f3f4f6] mix-blend-difference">{t.sauceMenuTitle1[currentLang]} <span className="text-[#e63946] bg-black px-4 ml-[-20px] skew-x-[-10deg] inline-block shadow-[4px_4px_0px_#fff]">{t.sauceMenuTitle2[currentLang]}</span>
           </h2>
         </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Death March",
                level: "EXTREME",
                peppers: ["Carolina Reaper", "Ghost Pepper", "Scorpion"],
                desc: "Sign the waiver. No mercy.",
                icon: <Skull className="text-red-600" size={40} />
              },
              {
                name: "Wall of Sound",
                level: "HOT",
                peppers: ["Habanero", "Thai Chili", "Cayenne"],
                desc: "Sustained heat with melodic depth",
                icon: <Flame className="text-orange-500" size={40} />
              },
              {
                name: "Crowd Pleaser",
                level: "MEDIUM",
                peppers: ["Jalapeño", "Serrano", "Poblano"],
                desc: "Accessible fire for the masses",
                icon: <Flame className="text-yellow-500" size={40} />
              },
              {
                name: "Sound Check",
                level: "MILD",
                peppers: ["Sweet Bell", "Paprika", "Ancho"],
                desc: "Warmup round for your taste buds",
                icon: <Zap className="text-green-500" size={40} />
              },
            ].map((sauce, index) => (
              <SauceCard key={sauce.name} sauce={sauce} index={index} inView={sauceInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Arcade Section */}
      <section id="arcade" ref={arcadeRef} className="relative py-40 px-6 bg-[#111] overflow-hidden">
        {/* Checkered background pattern */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }} />
        </div>
        
        <div className="absolute -left-32 top-1/3 transform -rotate-90 pointer-events-none opacity-5 font-['Anton'] text-[10vw] leading-none text-[#f3f4f6] whitespace-nowrap hidden lg:block overflow-hidden w-full h-full">{t.noQuarters[currentLang]}</div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={arcadeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 md:mb-32 relative"
          >
            <motion.div
              className="inline-flex items-center justify-center p-6 bg-[#ff4500] border-8 border-black shadow-[15px_15px_0px_#000] mb-12 rotate-[-5deg]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Gamepad2 className="text-black" size={60} />
            </motion.div>
            <h2 className="font-['Anton'] text-[45px] sm:text-[70px] md:text-[180px] uppercase tracking-tighter mb-4 leading-tight text-[#f3f4f6] drop-shadow-[8px_8px_0_#ff4500]">
              <span className="skew-x-[-10deg] inline-block">{t.wingGamesTitle1[currentLang]}</span><br className="sm:hidden" />
              <span className="text-[#ff4500] bg-black px-6 shadow-[10px_10px_0_#fff] relative sm:-right-10 md:-right-20 ml-4 sm:ml-0 mt-4 sm:mt-0 inline-block">{t.wingGamesTitle2[currentLang]}</span>
            </h2>
            <div className="font-['Manrope'] text-lg md:text-xl text-gray-300 max-w-2xl mx-auto bg-black p-8 md:p-12 border-8 border-gray-900 mt-20 shadow-[15px_15px_0px_#ff4500] transform rotate-1">
              <p className="font-['Teko'] text-4xl text-[#f3f4f6] mb-4 uppercase tracking-widest text-[#ff4500] bg-black inline-block px-4 py-1 border-2 border-[#ff4500] -mt-16">{t.wingGamesDesc[currentLang]}</p>
              <p className="leading-relaxed font-bold">{t.wingGamesSub[currentLang]}</p>
            </div>
          </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
              {arcadeGames.map((game, index) => (
                <motion.div
                  key={game.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={arcadeInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="bg-black border-4 border-gray-800 p-6 md:p-8 relative overflow-hidden group shadow-[6px_6px_0px_#111] md:shadow-[10px_10px_0px_#111] hover:shadow-[10px_10px_0px_#ff4500] hover:border-[#ff4500] transition-all cursor-pointer flex flex-col h-full"
                >
                  {!game.available && (
                    <div className="absolute top-4 -right-10 md:top-6 md:-right-12 px-10 py-1 md:px-12 md:py-2 bg-red-600 text-black font-['Anton'] text-lg md:text-xl uppercase rotate-45 shadow-[2px_2px_0px_#000] border-2 border-black z-20">
                      In Use
                    </div>
                  )}
                  {game.available && (
                    <div className="absolute top-4 -right-10 md:top-6 md:-right-12 px-10 py-1 md:px-12 md:py-2 bg-[#ff4500] text-black font-['Anton'] text-lg md:text-xl uppercase rotate-45 shadow-[2px_2px_0px_#000] border-2 border-black z-20">
                      Open
                    </div>
                  )}

                  <Gamepad2 className="text-[#333] mb-4 md:mb-6 group-hover:text-[#f3f4f6] transition-colors" size={48} />

                  <h3 className="font-['Teko'] text-3xl md:text-4xl font-extrabold text-[#f3f4f6] uppercase mb-2 leading-[0.9] w-3/4 group-hover:text-[#ff4500] break-words">
                    {game.name}
                  </h3>
                  <span className="inline-block bg-[#ff4500] text-black px-2 py-1 font-['Manrope'] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                    {game.type}
                  </span>

                  <div className="mt-auto pt-4 md:pt-6 border-t-4 border-dashed border-gray-800 relative group-hover:border-gray-600">
                    <p className="font-['Manrope'] text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">
                      {game.available ? "> Walk up and play" : "> Try again later"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={arcadeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-[#ff4500] border-8 border-black p-8 shadow-[12px_12px_0px_#000] flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-6 group cursor-pointer hover:bg-[#ff4500] transition-colors">
              <Users className="text-black group-hover:scale-110 transition-transform" size={48} />
              <div>
                <p className="font-['Anton'] text-4xl md:text-5xl text-black uppercase mb-2 leading-none">Host a Tournament</p>
                <p className="font-['Manrope'] text-black font-bold uppercase tracking-widest text-sm">Organizers drink free. Bring the crowd.</p>
              </div>
            </div>

            <div className="bg-black border-8 border-gray-800 p-8 shadow-[12px_12px_0px_#ff4500] flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-6 group cursor-pointer hover:border-[#ff4500] transition-colors">
              <Zap className="text-[#f3f4f6] group-hover:scale-110 transition-transform group-hover:text-[#ff4500]" size={48} />
              <div>
                <p className="font-['Anton'] text-4xl md:text-5xl text-[#f3f4f6] uppercase mb-2 leading-none">Get Notified</p>
                <p className="font-['Manrope'] text-gray-400 font-bold uppercase tracking-widest text-sm group-hover:text-gray-300">Sign up for fight nights & tournaments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Art Gallery Section */}
      <section id="art" ref={artRef} className="relative py-32 px-6 bg-[#050505] border-t-8 border-[#e63946] overflow-hidden">
        {/* Grungy background pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 2px, transparent 2px, transparent 12px)' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={artInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-left mb-24 md:flex items-end justify-between border-b-4 border-gray-800 pb-12"
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-4 bg-black border-2 border-[#ff4500] px-4 py-2 mb-8 shadow-[4px_4px_0px_#e63946] skew-x-[5deg]"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <Palette className="text-[#e63946]" size={24} />
                <span className="font-['Manrope'] text-sm font-bold text-[#f3f4f6] tracking-[0.2em] uppercase">{t.gallerySpace[currentLang]}</span>
              </motion.div>
              <h2 className="font-['Anton'] text-[45px] sm:text-[80px] md:text-[160px] uppercase tracking-tighter mb-4 leading-[0.8] text-[#f3f4f6]">{t.artWallTitle1[currentLang]} <span className="text-[#e63946] bg-[#111111] px-4 ml-[-20px] inline-block shadow-[8px_8px_0px_#e63946] rotate-2">{t.artWallTitle2[currentLang]}</span>
              </h2>
            </div>
            
            <p className="font-['Manrope'] text-lg text-gray-400 max-w-sm mt-8 md:mt-0 bg-[#111] p-6 border-l-4 border-[#e63946] leading-relaxed">
              Local artists only. Raw talent, unfiltered expression. 100% of sales go to the creators. Keep the scene alive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artPieces.map((art, index) => (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 30 }}
                animate={artInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => setSelectedArt(art)}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? -1 : 1 }}
                className="bg-black border-4 border-gray-900 p-4 hover:border-[#e63946] transition-all cursor-pointer group shadow-[12px_12px_0px_#111] hover:shadow-[16px_16px_0px_#e63946]"
              >
                <div className="relative h-[28rem] overflow-hidden border-2 border-gray-800 mb-6 bg-[#0a0a0a]">
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter group-hover:contrast-125 saturate-50 group-hover:saturate-100"
                  />
                  {/* Price Tag Sticker over Image */}
                  <div className="absolute top-4 right-[-20px] bg-yellow-400 text-black px-8 py-2 rotate-45 font-['Anton'] text-2xl shadow-[2px_2px_0px_rgba(0,0,0,0.5)] border-2 border-black z-20">
                    {art.price}
                  </div>
                </div>

                <div className="p-2">
                  <h3 className="font-['Teko'] text-4xl font-extrabold text-[#f3f4f6] uppercase mb-1 leading-none group-hover:text-[#e63946] transition-colors">
                    {art.title}
                  </h3>
                  <p className="font-['Manrope'] text-sm tracking-widest text-gray-500 uppercase font-bold mb-4">
                    // {art.artist}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t-[3px] border-dashed border-gray-800">
                    <span className="font-['Manrope'] text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Purchase Inquiry
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="bg-[#ff4500] p-3 rounded-full text-black shadow-[4px_4px_0px_#e63946]"
                    >
                      <ShoppingBag size={20} fill="currentColor" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={artInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#ff4500] border-8 border-black p-8 shadow-[15px_15px_0px_#e63946] -rotate-1 relative z-20"
          >
            <div className="transform rotate-1">
              <h4 className="font-['Anton'] text-4xl md:text-6xl text-black uppercase tracking-tighter leading-none mb-2">{t.spotOnWall[currentLang]}</h4>
              <p className="font-['Manrope'] text-lg text-gray-800 font-bold">{t.submitPortfolio[currentLang]}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-[#f3f4f6] font-['Teko'] text-3xl font-extrabold uppercase tracking-wide hover:bg-[#e63946] shadow-[6px_6px_0px_rgba(0,0,0,0.3)] transition-colors whitespace-nowrap"
            >{t.submitSpecs[currentLang]}</motion.button>
          </motion.div>
        </div>
      </section>

      {/* Location Teaser */}
      <section id="location" className="relative py-40 px-6 border-y-[12px] border-black overflow-hidden flex items-center justify-center min-h-[70vh]">
        {/* Darker grunge red background instead of pure red */}
        <div className="absolute inset-0 bg-[#8b1c00] z-0" />
        <div className="absolute inset-0 opacity-[0.3] mix-blend-color-burn bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-10" />
        
        <div className="absolute inset-0 flex select-none pointer-events-none opacity-5 font-['Anton'] text-[25vw] leading-none text-black break-all whitespace-pre-wrap mix-blend-overlay overflow-hidden z-10">
          LOCATION LOCATION LOCATION LOCATION LOCATION
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="bg-black p-12 md:p-20 shadow-[20px_20px_0px_#fff] border-8 border-black text-[#f3f4f6] relative rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[90vw]"
          >
            {/* Duct tape effect */}
            <div className="absolute -top-6 top-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#ff4500]/20 backdrop-blur-md rotate-[-3deg] mix-blend-overlay" />
            
            <h2 className="font-['Anton'] text-[60px] sm:text-[45px] sm:text-[60px] md:text-[120px] uppercase tracking-tighter text-[#f3f4f6] mb-4 leading-[0.8] drop-shadow-[5px_5px_0_#ff4500]">{t.findThePitTitle[currentLang]}</h2>
            <div className="font-['Manrope'] text-xl md:text-2xl text-gray-300 mb-12 font-bold max-w-2xl mx-auto uppercase tracking-widest leading-loose">
              <span className="bg-[#ff4500] text-black px-2 mt-1 inline-block">123 Metal Avenue</span><br />
              Downtown District<br />
              <span className="text-[#ff4500] italic">{t.open7Days[currentLang]}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto border-t-4 border-dashed border-gray-800 pt-12">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "8px 8px 0px #fff" }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-6 bg-[#ff4500] text-black font-['Teko'] text-3xl md:text-4xl font-extrabold uppercase tracking-widest border-4 border-black hover:bg-[#ff4500] transition-all shadow-[6px_6px_0px_transparent]"
              >{t.getDirections[currentLang]}</motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "8px 8px 0px #ff4500" }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-6 bg-transparent text-[#f3f4f6] font-['Teko'] text-3xl md:text-4xl font-extrabold uppercase tracking-widest border-4 border-[#ff4500] hover:bg-black hover:text-[#ff4500] transition-all shadow-[6px_6px_0px_transparent]"
              >{t.callBar[currentLang]}</motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="relative py-20 px-6 bg-black">
        <div className="absolute top-0 left-0 w-full h-[8px] bg-[repeating-linear-gradient(90deg,#ff4500_0,#ff4500_20px,transparent_20px,transparent_40px)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 border-b-8 border-gray-900 pb-20">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-['Anton'] text-5xl sm:text-6xl md:text-8xl text-[#f3f4f6] mb-6 leading-none drop-shadow-[5px_5px_0_#ff4500] -skew-x-[10deg]">WINGS &<br/>THINGS</h3>
              <p className="font-['Manrope'] text-lg text-gray-400 font-bold uppercase tracking-widest max-w-sm border-l-4 border-[#ff4500] pl-6 mt-8">
                Born in fire.<br/>{t.forgedFlavor[currentLang]}<br/>No corporate bullshit.
              </p>
            </div>

            <div>
              <h4 className="font-['Teko'] text-4xl font-bold text-[#ff4500] mb-8 uppercase tracking-widest border-b-2 border-gray-800 pb-2 inline-block">INFO</h4>
              <ul className="font-['Manrope'] text-lg text-[#f3f4f6] font-bold uppercase tracking-wider space-y-4">
                <li className="flex flex-col">
                  <span className="text-gray-500 text-sm">Hours</span>
                  <span>Every day 12:00 - 22:00</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-500 text-sm">Address</span>
                  <span>Str. Mitropolit Gavriil <br/>Bănulescu-Bodoni 4<br/>Chișinău</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-500 text-sm">Phone</span>
                  <span>0674 93 930</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-['Teko'] text-4xl font-bold text-[#ff4500] mb-8 uppercase tracking-widest border-b-2 border-gray-800 pb-2 inline-block">{t.social[currentLang]}</h4>
              <div className="flex flex-col gap-4 font-['Manrope'] text-xl font-extrabold uppercase truncate">
                <motion.a href="https://www.instagram.com/wingsandthings.md/" target="_blank" rel="noreferrer" className="text-[#f3f4f6] hover:text-[#ff4500] hover:translate-x-2 transition-transform flex items-center gap-4 group">
                  <span className="text-gray-700 text-sm group-hover:text-[#f3f4f6]">01</span>INSTAGRAM
                </motion.a>
                <motion.a href="https://www.facebook.com/p/Wings-and-things-61570643753532/" target="_blank" rel="noreferrer" className="text-[#f3f4f6] hover:text-[#ff4500] hover:translate-x-2 transition-transform flex items-center gap-4 group">
                  <span className="text-gray-700 text-sm group-hover:text-[#f3f4f6]">02</span>FACEBOOK
                </motion.a>
                <motion.a href="https://www.tiktok.com/@wings.and.things92" target="_blank" rel="noreferrer" className="text-[#f3f4f6] hover:text-[#ff4500] hover:translate-x-2 transition-transform flex items-center gap-4 group">
                  <span className="text-gray-700 text-sm group-hover:text-[#f3f4f6]">03</span>TIKTOK
                </motion.a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <p className="font-['Manrope'] text-sm font-bold text-gray-500 uppercase tracking-widest">{t.rights[currentLang]}</p>
            <div className="font-['Anton'] text-[8vw] md:text-[100px] leading-none text-gray-900 select-none overflow-hidden h-20 -my-10 opacity-30 pointer-events-none">{t.noWeakSauce[currentLang]}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WingCard({ item, index, inView, onClick }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative group cursor-pointer !rounded-none flex flex-col h-full transform ${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"} hover:rotate-0 transition-transform duration-300`}
    >
      <div className="bg-black border-4 border-[#ff4500] shadow-[12px_12px_0px_#e63946] flex flex-col h-full relative z-10 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-300">
        
        {/* Number Badge */}
        <div className="absolute -top-6 -left-6 z-30 bg-[#ff4500] border-4 border-black p-3 shadow-[6px_6px_0px_#e63946] transform -rotate-6 group-hover:rotate-0 transition-transform">
          <span className="font-['Anton'] text-4xl text-black">0{index + 1}</span>
        </div>

        {/* Tape Graphics */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#ff4500]/20 backdrop-blur-sm rotate-[-2deg] mix-blend-overlay z-20" />
        <div className="absolute -bottom-3 right-10 w-24 h-8 bg-[#ff4500]/20 backdrop-blur-sm rotate-[4deg] mix-blend-overlay z-20" />

        {/* Image Container */}
        <div className="relative h-72 md:h-80 overflow-hidden bg-[#111] p-3 border-b-4 border-[#ff4500]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay z-10" />
          
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full w-full relative z-0"
          >
            <ImageWithFallback
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover filter contrast-125 saturate-[1.2] grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />

          {/* Action Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center bg-[#e63946]/40 mix-blend-multiply z-20"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            className="absolute inset-0 flex items-center justify-center z-30"
          >
            <div className="bg-black text-[#f3f4f6] px-8 py-3 border-2 border-[#ff4500] transform -skew-x-12 shadow-[6px_6px_0px_#fff]">
              <span className="font-['Teko'] text-3xl font-extrabold uppercase tracking-widest block transform skew-x-12">
                Order
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="relative p-6 pt-8 bg-black z-20 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4 gap-4">
             <h3 className="font-['Anton'] text-4xl md:text-5xl text-[#e5e7eb] uppercase tracking-wide leading-tight break-words group-hover:text-[#ff4500] transition-colors drop-shadow-[3px_3px_0_rgba(230,57,70,0.8)] [text-shadow:_1px_1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_-1px_-1px_0_#000]">
              {item.name}
            </h3>
            {item.heat !== undefined && (
               <div className="flex bg-[#111] p-1 border-2 border-[#333] shrink-0 transform rotate-2">
                {[...Array(5)].map((_, i) => (
                  <Flame
                    key={i}
                    size={16}
                    className={i < item.heat ? "text-[#e63946] fill-[#e63946]" : "text-gray-800 hidden sm:block"}
                  />
                ))}
              </div>
            )}
          </div>
          
          <p className="font-['Manrope'] text-sm md:text-base leading-[1.6] text-gray-400 mb-8 border-l-4 border-[#333] pl-4 italic group-hover:border-[#e63946] transition-colors line-clamp-3">
            {item.desc}
          </p>

          <div className="flex items-end justify-between mt-auto pt-6 border-t-4 border-dotted border-[#333]">
            <div className="flex flex-col">
              <span className="font-['Manrope'] text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                Standard Order
              </span>
              <span className="font-['Anton'] text-5xl font-bold bg-[#e63946] text-[#f3f4f6] px-3 border-2 border-[#ff4500] transform skew-x-[-10deg] inline-block w-fit">
                {item.variants?.[0]?.price || item.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SauceCard({ sauce, index, inView }: any) {
  // Determine sauce color mapping based on level
  const getColors = () => {
    switch (sauce.level) {
      case "EXTREME": return { primary: "#7f1d1d", secondary: "#dc2626", border: "#fca5a5" }; // deep reds
      case "HOT": return { primary: "#b45309", secondary: "#ea580c", border: "#fde68a" }; // fiery orange
      case "MEDIUM": return { primary: "#a16207", secondary: "#eab308", border: "#fef08a" }; // yellow
      case "MILD": return { primary: "#166534", secondary: "#22c55e", border: "#bbf7d0" }; // green
      default: return { primary: "#b45309", secondary: "#ff4500", border: "#fff" };
    }
  };
  
  const colors = getColors();

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="relative p-6 sm:p-8 border-[6px] border-black bg-[#111] group cursor-pointer transition-all flex flex-col h-full overflow-hidden"
      style={{ boxShadow: `12px 12px 0px ${colors.secondary}` }}
    >
      {/* Heavy dripping paint / Splatter effect abstraction */}
      <div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-2xl opacity-40 mix-blend-screen group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-0"
        style={{ backgroundColor: colors.primary }}
      />
      <div 
        className="absolute top-10 -left-10 w-40 h-40 rounded-full blur-xl opacity-30 mix-blend-screen group-hover:opacity-50 transition-opacity duration-700 delay-100 pointer-events-none z-0"
        style={{ backgroundColor: colors.secondary }}
      />
      
      {/* Background drips using svg shapes */}
      <svg className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none z-0 group-hover:opacity-40 transition-opacity" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ fill: colors.primary }}>
        <path d="M0,0 L100,0 L100,30 Q90,70 80,40 Q70,90 60,30 Q50,60 40,20 Q30,70 20,30 Q10,50 0,20 Z" />
      </svg>

      <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-10 transition-transform transform group-hover:rotate-12 group-hover:scale-110 duration-500" style={{ color: colors.secondary }}>
        {sauce.icon}
      </div>

      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
        <span 
          className="font-['Manrope'] text-lg sm:text-xl font-extrabold text-black tracking-[0.2em] uppercase px-4 py-1 border-2 border-black w-fit transform -skew-x-[15deg] shadow-[4px_4px_0px_#000]"
          style={{ backgroundColor: colors.secondary }}
        >
          {sauce.level}
        </span>
        <span className="font-['Manrope'] text-xs font-bold text-gray-400 tracking-[0.5em] uppercase border-b-2 border-dashed border-gray-700 pb-1">BOTTLE NO. {index + 1}</span>
      </div>

      <h3 className="font-['Anton'] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-[#f3f4f6] mb-4 transition-colors leading-[0.8] break-words relative z-10 drop-shadow-[5px_5px_0_#000]">
        {sauce.name}
      </h3>

      <p className="font-['Manrope'] text-sm sm:text-lg text-gray-300 mb-10 w-full sm:w-[80%] relative z-10 leading-relaxed font-semibold italic border-l-4 pl-4" style={{ borderColor: colors.secondary }}>
        "{sauce.desc}"
      </p>

      <div className="flex flex-wrap gap-2 sm:gap-4 mt-auto relative z-10">
        {sauce.peppers.map((pepper: string) => (
          <motion.span
            key={pepper}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black border-2 text-[10px] sm:text-xs font-['Manrope'] font-bold text-[#f3f4f6] uppercase tracking-wider transition-colors cursor-default"
            style={{ borderColor: colors.secondary }}
          >
            {pepper}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
