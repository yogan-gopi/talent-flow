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
    <div className="flex flex-1 flex-col gap-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your recruitment and onboarding
            activities.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Meeting
          </Button>
          <Button className="bg-brand-600 hover:bg-brand-700">
            <Plus className="mr-2 h-4 w-4" />
            Quick Action
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div
                className={`h-8 w-8 rounded-md ${stat.bgColor} flex items-center justify-center`}
              >
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs ${
                  stat.trend === "up"
                    ? "text-success-600"
                    : stat.trend === "attention"
                      ? "text-orange-600"
                      : "text-muted-foreground"
                }`}
              >
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Streamline your most common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action) => (
              <Link key={action.title} to={action.href}>
                <Button
                  variant="outline"
                  className="w-full justify-start h-auto p-4 hover:bg-muted"
                >
                  <div
                    className={`mr-3 h-8 w-8 rounded-md ${action.color} flex items-center justify-center`}
                  >
                    <action.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {action.description}
                    </div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4" />
                </Button>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates across your recruitment pipeline
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-brand-100 text-brand-700 text-xs">
                      {activity.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>
              Stay on top of your scheduled activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        task.urgent ? "bg-orange-500" : "bg-brand-500"
                      }`}
                    />
                    <div>
                      <p className="font-medium text-sm">{task.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {task.time}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={task.urgent ? "destructive" : "outline"}
                    className="text-xs"
                  >
                    {task.type}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
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
