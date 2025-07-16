import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, 
  TrendingUp, 
  Crown, 
  ArrowRight, 
  Eye, 
  EyeOff,
  Fingerprint,
  ChevronRight,
  Star,
  Lock,
  Zap
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card } from './components/ui/card'

function App() {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'auth' | 'dashboard'>('welcome')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const WelcomeScreen = () => (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <Crown className="w-8 h-8 text-accent" />
            <span className="text-3xl font-bold text-primary">Apex Wealth</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Private Banking
            <br />
            <span className="text-gradient">Redefined</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exclusive wealth management platform for high net worth individuals. 
            Access private equity, hedge funds, and white-glove financial services.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Shield,
              title: "Bank-Grade Security",
              description: "Multi-layer biometric authentication and encrypted data protection"
            },
            {
              icon: TrendingUp,
              title: "Exclusive Opportunities",
              description: "Access to private deals and institutional-grade investments"
            },
            {
              icon: Zap,
              title: "Real-Time Intelligence",
              description: "AI-powered market insights and portfolio optimization"
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 glass-effect hover:bg-white/20 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-4">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 text-lg premium-shadow"
            onClick={() => setCurrentStep('auth')}
          >
            Access Your Wealth Dashboard
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Minimum portfolio requirement: $1,000,000
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-16 flex items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm">Trusted by 10,000+ HNW clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-sm">SEC Regulated</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )

  const AuthScreen = () => (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-background to-accent/5 flex items-center justify-center p-4"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInUp}
    >
      <Card className="w-full max-w-md p-8 premium-shadow">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold">Apex Wealth</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Secure Access</h2>
          <p className="text-muted-foreground">Enter your credentials to access your wealth dashboard</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <Input 
              type="email" 
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button 
            className="w-full h-12 bg-accent hover:bg-accent/90 text-primary font-semibold"
            onClick={() => setCurrentStep('dashboard')}
          >
            Access Dashboard
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full h-12 border-accent/20 hover:bg-accent/5"
            onClick={() => setCurrentStep('dashboard')}
          >
            <Fingerprint className="mr-2 w-5 h-5 text-accent" />
            Biometric Authentication
          </Button>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setCurrentStep('welcome')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to welcome
          </button>
        </div>
      </Card>
    </motion.div>
  )

  const DashboardScreen = () => (
    <motion.div 
      className="min-h-screen bg-background"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInUp}
    >
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-accent" />
              <div>
                <h1 className="text-xl font-bold">Apex Wealth</h1>
                <p className="text-sm text-muted-foreground">Private Banking Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
                <p className="text-2xl font-bold text-accent">$12,847,392</p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-accent font-semibold">JD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Portfolio Performance</h3>
              <div className="h-64 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive portfolio chart</p>
                  <p className="text-sm text-muted-foreground mt-2">+18.4% YTD Performance</p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-3">Asset Allocation</h4>
                <div className="space-y-3">
                  {[
                    { name: "Private Equity", value: "42%", color: "bg-accent" },
                    { name: "Hedge Funds", value: "28%", color: "bg-blue-500" },
                    { name: "Real Estate", value: "20%", color: "bg-green-500" },
                    { name: "Liquid Assets", value: "10%", color: "bg-gray-400" }
                  ].map((asset, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${asset.color}`}></div>
                        <span className="text-sm">{asset.name}</span>
                      </div>
                      <span className="text-sm font-medium">{asset.value}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-3">Recent Activity</h4>
                <div className="space-y-3">
                  {[
                    { action: "Private Equity Investment", amount: "+$500,000", time: "2 hours ago" },
                    { action: "Dividend Payment", amount: "+$25,000", time: "1 day ago" },
                    { action: "Real Estate Purchase", amount: "-$2,000,000", time: "3 days ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                      <span className={`text-sm font-medium ${activity.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {activity.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-4">Market Intelligence</h4>
              <div className="space-y-4">
                <div className="p-3 bg-accent/5 rounded-lg">
                  <p className="text-sm font-medium">Private Deal Alert</p>
                  <p className="text-xs text-muted-foreground mt-1">New tech unicorn seeking Series D funding</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium">Market Update</p>
                  <p className="text-xs text-muted-foreground mt-1">Fed signals potential rate cuts in Q2</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium">Tax Optimization</p>
                  <p className="text-xs text-muted-foreground mt-1">Harvest losses to reduce tax liability</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-4">Wealth Advisory</h4>
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Crown className="w-8 h-8 text-accent" />
                </div>
                <p className="text-sm font-medium">Your Wealth Advisor</p>
                <p className="text-xs text-muted-foreground mb-4">Sarah Chen, CFA</p>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-primary">
                  Schedule Call
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-4">Quick Actions</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-2 w-4 h-4" />
                  View Opportunities
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 w-4 h-4" />
                  Risk Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Crown className="mr-2 w-4 h-4" />
                  Concierge Services
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentStep === 'welcome' && <WelcomeScreen key="welcome" />}
        {currentStep === 'auth' && <AuthScreen key="auth" />}
        {currentStep === 'dashboard' && <DashboardScreen key="dashboard" />}
      </AnimatePresence>
    </div>
  )
}

export default App