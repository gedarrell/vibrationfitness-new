import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Shield,
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
  Activity,
  Target,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
              <Activity className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold">WBF Studio</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-sm font-medium hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="#membership" className="text-sm font-medium hover:text-green-600 transition-colors">
              Membership
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              (813) 606-1055
            </Button>
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Book Free Session
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                  🎯 First Two Sessions FREE
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Vibration
                  </span>
                  <br />
                  Fitness Studio
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Stimulate Your Mind, Body and Soul with our unique low-impact exercise routines using vibrating
                  plates. Experience the ancient 3-minute holding drill technique enhanced with modern technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  Start Your Free Sessions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-muted-foreground">Access Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">365</div>
                  <div className="text-sm text-muted-foreground">Days Open</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">20</div>
                  <div className="text-sm text-muted-foreground">Vibration Plates</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Vibration Fitness Studio"
                width={600}
                height={600}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-800">
              Health Benefits
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Transform Your Health</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Experience the proven benefits of whole body vibration training with our unique exercise routines.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Improve Circulation</CardTitle>
                <CardDescription>
                  Enhance blood flow throughout your body for better overall health and vitality.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Muscle Toning</CardTitle>
                <CardDescription>
                  Build and tone muscles efficiently with our low-impact vibration training.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Increase Core Strength</CardTitle>
                <CardDescription>Strengthen your core muscles for better posture and stability.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Boost Metabolism</CardTitle>
                <CardDescription>Accelerate your metabolism for better weight management and energy.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Full Body Workout</CardTitle>
                <CardDescription>Engage every muscle group with our comprehensive vibration routines.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Relieve Joint Pain</CardTitle>
                <CardDescription>Reduce joint pain and stiffness with our gentle, low-impact approach.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Gregory E. Darrell - Founder"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                  Meet Our Founder
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Gregory E. Darrell</h2>
                <p className="text-lg text-muted-foreground">
                  With over 40 years of martial arts experience, including 1st and 3rd degree black belts in Goju Ryu
                  Karate, Gregory brings a unique perspective to fitness training.
                </p>
                <p className="text-muted-foreground">
                  Starting his martial arts journey at age 14 in 1974, Gregory spent 12 years competing in tournaments
                  and opened his own dojo in 1981. His extensive background in low-impact training techniques led to the
                  creation of Whole Body Vibration Fitness Studio.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>40+ years martial arts experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Certified in Goju Ryu Karate (1st & 3rd degree)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Former dojo owner and instructor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Pioneer in vibration fitness training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-800">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Complete Wellness Experience</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Choose from our comprehensive range of services designed to meet your unique fitness and wellness needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded bg-green-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Individual Sessions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  30-35 minute basic and advanced low-impact exercise routines on vibration plates at your own pace.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Personalized workout intensity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>20 vibration plates available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Instructional TV monitors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Personal Training</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  45-minute customized sessions designed for weight loss, balance improvement, and rehabilitation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>One-on-one attention</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Customized fitness plans</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Available 6 times daily</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded bg-purple-100 flex items-center justify-center">
                    <Heart className="h-4 w-4 text-purple-600" />
                  </div>
                  <span>Senior Classes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specialized weekend classes designed to keep seniors independent with gentle, effective exercises.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Weekend convenient times</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Age-appropriate routines</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Focus on independence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded bg-orange-100 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-orange-600" />
                  </div>
                  <span>Wellness Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete your fitness experience with our detox steam sauna and targeted massage sessions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>20-30 minute steam sauna</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>10-minute massage gun sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Stress reduction & pain relief</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-800">
              Membership Plans
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Flexible membership options designed to fit your lifestyle and fitness goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Basic Membership</CardTitle>
                <div className="text-4xl font-bold text-green-600">
                  $45<span className="text-lg text-muted-foreground">/month</span>
                </div>
                <CardDescription>Perfect for getting started with vibration fitness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>1 session per day (7am-7pm)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Monday-Saturday access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Standard & advanced routines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Add-on: Massage ($10) & Sauna ($15)</span>
                </div>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Start Basic Plan</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Gold Membership</CardTitle>
                <div className="text-4xl font-bold text-green-600">
                  $70<span className="text-lg text-muted-foreground">/month</span>
                </div>
                <CardDescription>Ultimate access with premium benefits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>24/7 unlimited access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Unlimited sessions anytime</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Free sauna & massage sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>50% off personal training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>15% discount (6-month advance payment)</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Start Gold Plan
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-green-600 mb-2">🎁 Loyalty Program</p>
            <p className="text-muted-foreground">Get 10% back for each new member you refer (up to 6 individuals)</p>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-800">
              Visit Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hours & Location</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Saturday</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Gold Members</span>
                  <span>24/7 Access</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Personal Training</span>
                  <span>8AM, 10AM, 12PM, 2PM, 4PM, 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Senior Classes</span>
                  <span>Weekends: 2PM, 5PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Whole Body Vibration Fitness Studio</p>
                  <p className="text-muted-foreground">123 Main Street</p>
                  <p className="text-muted-foreground">Lakeland, FL 33801</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span>(813) 606-1055</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-green-600" />
                    <span>gedvibration@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-800">
              Get Started
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Book Your Free Sessions</h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Ready to transform your health? Start with two FREE sessions and experience the WBF difference.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Us Today</CardTitle>
                <CardDescription>
                  Fill out the form below to book your free sessions or ask any questions about our programs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" type="tel" placeholder="(813) 555-0123" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message / Questions
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your fitness goals or ask any questions..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Book My Free Sessions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
                  <Activity className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">WBF Studio</span>
              </div>
              <p className="text-muted-foreground">
                Stimulating your mind, body and soul through innovative vibration fitness.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Individual Sessions</li>
                <li>Personal Training</li>
                <li>Senior Classes</li>
                <li>Steam Sauna</li>
                <li>Massage Therapy</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Membership</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Basic Plan - $45/month</li>
                <li>Gold Plan - $70/month</li>
                <li>Free Trial Sessions</li>
                <li>Loyalty Program</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>123 Main Street</li>
                <li>Lakeland, FL 33801</li>
                <li>(813) 606-1055</li>
                <li>gedvibration@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Whole Body Vibration Fitness Studio. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-4 sm:mt-0 italic">
              "Wealth consists of not having great possessions, but in having few wants" - Stoic Inspiration
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
