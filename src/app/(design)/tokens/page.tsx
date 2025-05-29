"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { ColorBlock } from "./color-block";

export default function TokensPage() {
  return (
    <div className="container p-5 md:p-10">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="font-bold text-3xl tracking-tight">Design Tokens</h1>
        <p className="mt-1 text-muted-foreground">
          A comprehensive overview of all color tokens used in the design system
        </p>
      </div>

      {/* Primary Theme */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Primary Theme</h2>
        <p className="mb-6 text-muted-foreground">
          The core colors that define the primary theme and overall look of the
          interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock
            name="Background"
            value="oklch(0.97 0.01 80.72)"
            className="bg-background text-foreground"
          />
          <ColorBlock
            name="Foreground"
            value="oklch(0.3 0.04 30.2)"
            className="bg-foreground text-background"
          />
          <ColorBlock
            name="Primary"
            value="oklch(0.52 0.13 144.17)"
            className="bg-primary text-primary-foreground"
          />
          <ColorBlock
            name="Primary Foreground"
            value="oklch(1.0 0 0)"
            className="bg-primary-foreground text-primary"
          />
        </div>
      </section>

      {/* Secondary & Accent */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Secondary & Accent</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for secondary elements and accents throughout the
          interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock
            name="Secondary"
            value="oklch(0.96 0.02 147.64)"
            className="bg-secondary text-secondary-foreground"
          />
          <ColorBlock
            name="Secondary Foreground"
            value="oklch(0.43 0.12 144.31)"
            className="bg-secondary-foreground text-secondary"
          />
          <ColorBlock
            name="Accent"
            value="oklch(0.9 0.05 146.04)"
            className="bg-accent text-accent-foreground"
          />
          <ColorBlock
            name="Accent Foreground"
            value="oklch(0.43 0.12 144.31)"
            className="bg-accent-foreground text-accent"
          />
        </div>
      </section>

      {/* UI Component */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">UI Component</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for specific UI components like cards, popovers, and muted
          elements.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock
            name="Card"
            value="oklch(0.97 0.01 80.72)"
            className="bg-card text-card-foreground"
          />
          <ColorBlock
            name="Card Foreground"
            value="oklch(0.3 0.04 30.2)"
            className="bg-card-foreground text-card"
          />
          <ColorBlock
            name="Popover"
            value="oklch(0.97 0.01 80.72)"
            className="bg-popover text-popover-foreground"
          />
          <ColorBlock
            name="Popover Foreground"
            value="oklch(0.3 0.04 30.2)"
            className="bg-popover-foreground text-popover"
          />
          <ColorBlock
            name="Muted"
            value="oklch(0.94 0.01 74.42)"
            className="bg-muted text-muted-foreground"
          />
          <ColorBlock
            name="Muted Foreground"
            value="oklch(0.45 0.05 39.21)"
            className="bg-muted-foreground text-muted"
          />
        </div>
      </section>

      {/* Utility & Form */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Utility & Form</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for borders, inputs, and other utility elements.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ColorBlock
            name="Border"
            value="oklch(0.88 0.02 74.64)"
            className="bg-border text-foreground"
          />
          <ColorBlock
            name="Input"
            value="oklch(0.88 0.02 74.64)"
            className="bg-input text-foreground"
          />
          <ColorBlock
            name="Ring"
            value="oklch(0.52 0.13 144.17)"
            className="bg-ring text-foreground"
          />
        </div>
      </section>

      {/* Status & Feedback */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Status & Feedback</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used to indicate different states and provide feedback to
          users.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock
            name="Destructive"
            value="oklch(0.54 0.19 26.72)"
            className="bg-destructive text-destructive-foreground"
          />
          <ColorBlock
            name="Destructive Foreground"
            value="oklch(1.0 0 0)"
            className="bg-destructive-foreground text-destructive"
          />
        </div>
      </section>

      {/* Chart & Visualization */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Chart & Visualization</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for data visualization and charts.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <ColorBlock
            name="Chart 1"
            value="oklch(0.67 0.16 144.21)"
            className="bg-chart-1 text-foreground"
          />
          <ColorBlock
            name="Chart 2"
            value="oklch(0.58 0.14 144.18)"
            className="bg-chart-2 text-foreground"
          />
          <ColorBlock
            name="Chart 3"
            value="oklch(0.52 0.13 144.17)"
            className="bg-chart-3 text-foreground"
          />
          <ColorBlock
            name="Chart 4"
            value="oklch(0.43 0.12 144.31)"
            className="bg-chart-4 text-foreground"
          />
          <ColorBlock
            name="Chart 5"
            value="oklch(0.22 0.05 145.73)"
            className="bg-chart-5 text-foreground"
          />
        </div>
      </section>

      {/* Sidebar & Navigation */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Sidebar & Navigation</h2>
        <p className="mb-6 text-muted-foreground">
          Colors specific to the sidebar and navigation components.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ColorBlock
            name="Sidebar"
            value="oklch(0.94 0.01 74.42)"
            className="bg-sidebar))] textdebar-foreground"
          />
          <ColorBlock
            name="Sidebar Foreground"
            value="oklch(0.3 0.04 30.2)"
            className="bg-sidebar-foreground text-sidebar"
          />
          <ColorBlock
            name="Sidebar Primary"
            value="oklch(0.52 0.13 144.17)"
            className="bg-sidebar-primary text-sidebar-primary-forereground"
          />
          <ColorBlock
            name="Sidebar Primary Foreground"
            value="oklch(1.0 0 0)"
            className="bg-sidebar-primary-foreground text-sidebar-primary"
          />
          <ColorBlock
            name="Sidebar Accent"
            value="oklch(0.9 0.05 146.04)"
            className="bg-sidebar-accent text-sidebar-accent-foreground"
          />
          <ColorBlock
            name="Sidebar Accent Foreground"
            value="oklch(0.43 0.12 144.31)"
            className="bg-sidebar-accent-foreground text-sidebar-accent"
          />
          <ColorBlock
            name="Sidebar Border"
            value="oklch(0.88 0.02 74.64)"
            className="bg-sidebar-border text-sidebar-foreground"
          />
          <ColorBlock
            name="Sidebar Ring"
            value="oklch(0.52 0.13 144.17)"
            className="bg-sidebar-ring text-sidebar-foreground"
          />
        </div>
      </section>

      {/*<div className="mt-8 flex justify-end">*/}
      {/*  <Button variant="outline" className="mr-2">*/}
      {/*    <Copy className="mr-2 size-4" />*/}
      {/*    Copy All Variables*/}
      {/*  </Button>*/}
      {/*  <Button>*/}
      {/*    Customize Theme*/}
      {/*    <ArrowRight className="ml-2 size-4" />*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </div>
  );
}
