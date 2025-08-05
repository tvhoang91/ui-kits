import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          UI Kits Registry
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Component registry hosting multiple Shadcn/ui collections for different brands
        </p>
        <div className="pt-4">
          <Button size="lg" className="text-lg px-8">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}