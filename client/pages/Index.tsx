import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  UserPlus,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  ArrowRight,
  Calendar,
  Target,
  Briefcase,
  Star,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

const overviewStats = [
  {
    title: "Active Job Postings",
    value: "24",
    change: "+3 this week",
    trend: "up",
    icon: Briefcase,
    color: "text-brand-600",
    bgColor: "bg-brand-100",
  },
  {
    title: "New Candidates",
    value: "156",
    change: "+12% from last week",
    trend: "up",
    icon: Users,
    color: "text-trust-600",
    bgColor: "bg-trust-100",
  },
  {
    title: "Onboarding Progress",
    value: "89%",
    change: "8 in progress",
    trend: "neutral",
    icon: UserPlus,
    color: "text-innovation-600",
    bgColor: "bg-innovation-100",
  },
  {
    title: "Pending Approvals",
    value: "7",
    change: "2 urgent",
    trend: "attention",
    icon: AlertCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

const quickActions = [
  {
    title: "Post New Job",
    description: "Create and publish a new job posting",
    icon: Plus,
    href: "/recruitment",
    color: "bg-brand-600 hover:bg-brand-700",
  },
  {
    title: "Review Resumes",
    description: "Screen new candidate applications",
    icon: FileText,
    href: "/recruitment",
    color: "bg-trust-600 hover:bg-trust-700",
  },
  {
    title: "My Onboarding",
    description: "Continue your onboarding journey",
    icon: UserPlus,
    href: "/my-onboarding",
    color: "bg-innovation-600 hover:bg-innovation-700",
  },
];

const recentActivity = [
  {
    id: 1,
    type: "application",
    message: "Alex Johnson applied for Senior Frontend Developer",
    time: "2 hours ago",
    avatar: "AJ",
  },
  {
    id: 2,
    type: "interview",
    message: "Interview scheduled with Sarah Chen",
    time: "4 hours ago",
    avatar: "SC",
  },
  {
    id: 3,
    type: "onboarding",
    message: "Michael Rodriguez completed day 1 onboarding",
    time: "6 hours ago",
    avatar: "MR",
  },
  {
    id: 4,
    type: "job",
    message: "UX Designer position published",
    time: "1 day ago",
    avatar: "TD",
  },
];

const upcomingTasks = [
  {
    id: 1,
    title: "Interview with Alex Johnson",
    time: "Today, 2:00 PM",
    type: "interview",
    urgent: true,
  },
  {
    id: 2,
    title: "Review product manager applications",
    time: "Tomorrow, 10:00 AM",
    type: "review",
    urgent: false,
  },
  {
    id: 3,
    title: "Onboarding check-in with new hires",
    time: "Friday, 9:00 AM",
    type: "onboarding",
    urgent: false,
  },
];

const kpiData = [
  {
    title: "Time to Hire",
    value: "18 days",
    change: "-2 days",
    trend: "improvement",
    target: "15 days",
  },
  {
    title: "Onboarding Completion",
    value: "94%",
    change: "+5%",
    trend: "improvement",
    target: "95%",
  },
  {
    title: "Candidate Satisfaction",
    value: "4.7/5",
    change: "+0.2",
    trend: "improvement",
    target: "4.8/5",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-8 text-white shadow-xl">
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome to TalentFlow AI</h1>
              <p className="text-brand-100 text-lg">
                Your comprehensive recruitment and onboarding platform
              </p>
              <p className="text-brand-200 text-sm mt-1">
                Streamline your hiring process with AI-powered insights
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
              <Button className="bg-white text-brand-600 hover:bg-white/90 font-semibold">
                <Plus className="mr-2 h-4 w-4" />
                Quick Action
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10" />
      </div>

      {/* Overview Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => (
          <Card key={stat.title} className="border-0 shadow-lg rounded-xl bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`h-12 w-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div
                  className={`text-xs px-2 py-1 rounded-full ${
                    stat.trend === "up"
                      ? "bg-success-100 text-success-700"
                      : stat.trend === "attention"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {stat.change}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </h3>
                <div className="text-3xl font-bold tracking-tight">{stat.value}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Quick Actions */}
        <Card className="lg:col-span-1 border-0 shadow-lg rounded-xl bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
            <CardDescription className="text-base">Streamline your most common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickActions.map((action) => (
              <Link key={action.title} to={action.href}>
                <div className="group p-4 rounded-xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50/50 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-12 w-12 rounded-xl ${action.color} flex items-center justify-center group-hover:scale-105 transition-transform`}
                    >
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{action.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {action.description}
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-brand-600 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2 border-0 shadow-lg rounded-xl bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
            <CardDescription className="text-base">
              Latest updates across your recruitment pipeline
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-brand-100 text-brand-700 text-sm font-medium">
                      {activity.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs bg-brand-50 text-brand-700 border-brand-200">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Upcoming Tasks */}
        <Card className="border-0 shadow-lg rounded-xl bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold">Upcoming Tasks</CardTitle>
            <CardDescription className="text-base">
              Stay on top of your scheduled activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-brand-200 hover:bg-brand-50/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        task.urgent ? "bg-orange-500" : "bg-brand-500"
                      }`}
                    />
                    <div>
                      <p className="font-semibold text-sm">{task.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {task.time}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={task.urgent ? "destructive" : "outline"}
                    className="text-xs bg-brand-50 text-brand-700 border-brand-200"
                  >
                    {task.type}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6 bg-brand-50 border-brand-200 text-brand-700 hover:bg-brand-100">
              <Calendar className="mr-2 h-4 w-4" />
              View All Tasks
            </Button>
          </CardContent>
        </Card>

        {/* KPI Widgets */}
        <Card>
          <CardHeader>
            <CardTitle>Key Performance Indicators</CardTitle>
            <CardDescription>Track your recruitment efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {kpiData.map((kpi) => (
                <div key={kpi.title} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{kpi.title}</p>
                    <div className="text-right">
                      <p className="text-sm font-bold">{kpi.value}</p>
                      <p
                        className={`text-xs ${
                          kpi.trend === "improvement"
                            ? "text-success-600"
                            : "text-muted-foreground"
                        }`}
                      >
                        {kpi.change}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Current</span>
                      <span>Target: {kpi.target}</span>
                    </div>
                    <Progress
                      value={
                        kpi.title === "Time to Hire"
                          ? 75
                          : kpi.title === "Onboarding Completion"
                            ? 94
                            : 94
                      }
                      className="h-2"
                    />
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
