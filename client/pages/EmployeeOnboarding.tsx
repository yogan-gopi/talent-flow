import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckCircle2,
  Clock,
  User,
  FileText,
  GraduationCap,
  Users,
  Calendar,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Download,
  Upload,
  Star,
  Heart,
  Coffee,
  MapPin,
  Phone,
  Mail,
  Briefcase,
} from "lucide-react";

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  tasks: {
    id: string;
    title: string;
    completed: boolean;
    required: boolean;
  }[];
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: "welcome",
    title: "Welcome & Setup",
    description: "Get started with your account and basic information",
    status: "completed",
    tasks: [
      {
        id: "profile",
        title: "Complete your profile",
        completed: true,
        required: true,
      },
      {
        id: "photo",
        title: "Upload profile photo",
        completed: true,
        required: false,
      },
      {
        id: "emergency",
        title: "Add emergency contacts",
        completed: true,
        required: true,
      },
      {
        id: "preferences",
        title: "Set communication preferences",
        completed: true,
        required: false,
      },
    ],
  },
  {
    id: "documentation",
    title: "Documentation & Compliance",
    description: "Complete required paperwork and legal documents",
    status: "current",
    tasks: [
      {
        id: "i9",
        title: "I-9 Employment Eligibility Verification",
        completed: true,
        required: true,
      },
      {
        id: "w4",
        title: "W-4 Tax Withholding Form",
        completed: true,
        required: true,
      },
      {
        id: "handbook",
        title: "Review Employee Handbook",
        completed: false,
        required: true,
      },
      {
        id: "policies",
        title: "Acknowledge Company Policies",
        completed: false,
        required: true,
      },
      {
        id: "benefits",
        title: "Complete Benefits Enrollment",
        completed: false,
        required: true,
      },
    ],
  },
  {
    id: "training",
    title: "Training & Learning",
    description: "Complete role-specific training and company orientation",
    status: "upcoming",
    tasks: [
      {
        id: "security",
        title: "Security Training",
        completed: false,
        required: true,
      },
      {
        id: "role-training",
        title: "Role-Specific Training",
        completed: false,
        required: true,
      },
      {
        id: "tools",
        title: "Software & Tools Training",
        completed: false,
        required: true,
      },
      {
        id: "culture",
        title: "Company Culture Overview",
        completed: false,
        required: false,
      },
    ],
  },
  {
    id: "integration",
    title: "Team Integration",
    description: "Meet your team and get familiar with your role",
    status: "upcoming",
    tasks: [
      {
        id: "manager",
        title: "Meet with Direct Manager",
        completed: false,
        required: true,
      },
      {
        id: "team",
        title: "Team Introduction Meeting",
        completed: false,
        required: true,
      },
      {
        id: "buddy",
        title: "Connect with Onboarding Buddy",
        completed: false,
        required: false,
      },
      {
        id: "workspace",
        title: "Workspace Setup",
        completed: false,
        required: true,
      },
    ],
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Welcome Orientation",
    time: "Today, 2:00 PM",
    location: "Conference Room A",
    type: "orientation",
  },
  {
    id: 2,
    title: "IT Setup & Equipment",
    time: "Tomorrow, 9:00 AM",
    location: "IT Department",
    type: "setup",
  },
  {
    id: 3,
    title: "Team Lunch",
    time: "Friday, 12:00 PM",
    location: "Main Cafeteria",
    type: "social",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Engineering Manager",
    avatar: "SJ",
    isManager: true,
    contact: "sarah.johnson@company.com",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Senior Developer",
    avatar: "MC",
    isManager: false,
    contact: "mike.chen@company.com",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    role: "Onboarding Buddy",
    avatar: "LR",
    isManager: false,
    contact: "lisa.rodriguez@company.com",
  },
];

export default function EmployeeOnboarding() {
  const [currentStep, setCurrentStep] = useState("documentation");
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const currentStepData = onboardingSteps.find(
    (step) => step.id === currentStep,
  );
  const currentStepIndex = onboardingSteps.findIndex(
    (step) => step.id === currentStep,
  );

  const totalTasks = onboardingSteps.reduce(
    (acc, step) => acc + step.tasks.length,
    0,
  );
  const completedTasks = onboardingSteps.reduce(
    (acc, step) => acc + step.tasks.filter((task) => task.completed).length,
    0,
  );
  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  const handleNextStep = () => {
    if (currentStepIndex < onboardingSteps.length - 1) {
      setCurrentStep(onboardingSteps[currentStepIndex + 1].id);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(onboardingSteps[currentStepIndex - 1].id);
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-6 p-4">
      {/* Welcome Header */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-brand-600 to-brand-700 p-6 text-white">
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-white/20">
              <AvatarImage src="/placeholder.svg" alt="Employee" />
              <AvatarFallback className="bg-white/20 text-white text-lg">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">
                Welcome to TalentFlow AI, John!
              </h1>
              <p className="text-brand-100">
                Frontend Developer • Engineering Team
              </p>
              <p className="text-brand-200 text-sm">Started: March 15, 2024</p>
            </div>
          </div>
        </div>
        <div className="absolute right-4 top-4">
          <div className="text-right">
            <div className="text-2xl font-bold">{progressPercentage}%</div>
            <div className="text-brand-200 text-sm">Complete</div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Onboarding Progress</CardTitle>
              <CardDescription>
                Complete all steps to finish your onboarding
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className="text-brand-600 border-brand-600"
            >
              {completedTasks} of {totalTasks} tasks completed
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="h-3 mb-4" />
          <div className="grid gap-3 md:grid-cols-4">
            {onboardingSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  step.id === currentStep
                    ? "border-brand-600 bg-brand-50"
                    : step.status === "completed"
                      ? "border-success-600 bg-success-50"
                      : "border-gray-200 bg-gray-50"
                }`}
                onClick={() => setCurrentStep(step.id)}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    step.status === "completed"
                      ? "bg-success-600 text-white"
                      : step.id === currentStep
                        ? "bg-brand-600 text-white"
                        : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step.status === "completed" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <span className="text-xs font-bold">{index + 1}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-sm">{step.title}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Current Step Tasks */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {currentStepData?.title}
                    {currentStepData?.status === "current" && (
                      <Badge className="bg-brand-600">Current</Badge>
                    )}
                  </CardTitle>
                  <CardDescription>
                    {currentStepData?.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentStepData?.tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-start gap-3 p-4 border rounded-lg ${
                    task.completed
                      ? "border-success-200 bg-success-50"
                      : "border-gray-200"
                  }`}
                >
                  <Checkbox
                    checked={task.completed}
                    className="mt-0.5"
                    disabled={task.completed}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}
                      >
                        {task.title}
                      </span>
                      {task.required && (
                        <Badge variant="outline" className="text-xs">
                          Required
                        </Badge>
                      )}
                    </div>
                    {task.completed && (
                      <div className="flex items-center gap-1 mt-1 text-xs text-success-600">
                        <CheckCircle2 className="h-3 w-3" />
                        Completed
                      </div>
                    )}
                  </div>
                  {!task.completed && (
                    <Button size="sm" variant="outline">
                      Start
                    </Button>
                  )}
                </div>
              ))}

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStepIndex === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={handleNextStep}
                  disabled={currentStepIndex === onboardingSteps.length - 1}
                  className="bg-brand-600 hover:bg-brand-700"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar with Team & Events */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-3 p-3 border rounded-lg"
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      event.type === "orientation"
                        ? "bg-brand-100 text-brand-600"
                        : event.type === "setup"
                          ? "bg-innovation-100 text-innovation-600"
                          : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {event.type === "orientation" ? (
                      <GraduationCap className="h-4 w-4" />
                    ) : event.type === "setup" ? (
                      <Briefcase className="h-4 w-4" />
                    ) : (
                      <Coffee className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{event.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Your Team */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Your Team
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-3 border rounded-lg"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-brand-100 text-brand-700 text-xs">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{member.name}</span>
                      {member.isManager && (
                        <Badge variant="outline" className="text-xs">
                          Manager
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {member.role}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-brand-600 mt-1">
                      <Mail className="h-3 w-3" />
                      {member.contact}
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Download Employee Handbook
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Upload className="mr-2 h-4 w-4" />
                Upload Documents
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Ask HR a Question
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
