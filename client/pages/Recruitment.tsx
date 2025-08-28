import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  Plus,
  Search,
  Filter,
  FileText,
  Clock,
  Users,
  Star,
  Calendar,
  Upload,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const jobPostings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    status: "Active",
    applicants: 24,
    posted: "2 days ago",
    requirements: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco",
    type: "Full-time",
    status: "Active",
    applicants: 18,
    posted: "1 week ago",
    requirements: ["Product Strategy", "Analytics", "Leadership"],
  },
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "New York",
    type: "Contract",
    status: "Draft",
    applicants: 0,
    posted: "Draft",
    requirements: ["Figma", "User Research", "Prototyping"],
  },
];

const candidates = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Frontend Developer",
    experience: "5 years",
    location: "San Francisco, CA",
    match: 95,
    status: "Review",
    skills: ["React", "TypeScript", "GraphQL", "AWS"],
    applied: "3 days ago",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    experience: "7 years",
    location: "Remote",
    match: 88,
    status: "Interview",
    skills: ["React", "Node.js", "Python", "Docker"],
    applied: "1 week ago",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Senior Frontend Developer",
    experience: "4 years",
    location: "Austin, TX",
    match: 82,
    status: "Pending",
    skills: ["Vue.js", "TypeScript", "Firebase"],
    applied: "2 weeks ago",
  },
];

export default function Recruitment() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Recruitment</h1>
        <Button className="bg-brand-600 hover:bg-brand-700">
          <Plus className="mr-2 h-4 w-4" />
          Create Job Posting
        </Button>
      </div>

      <Tabs defaultValue="jobs" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="jobs">Job Postings</TabsTrigger>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
          <TabsTrigger value="create">Create Job</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search job postings..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="grid gap-4">
            {jobPostings.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <CardDescription>
                        {job.department} • {job.location} • {job.type}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={
                        job.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {job.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {job.applicants} applicants
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.posted}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        className="bg-brand-600 hover:bg-brand-700"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.requirements.map((req) => (
                      <Badge key={req} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="candidates" className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search candidates..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload Resume
            </Button>
          </div>

          <div className="grid gap-4">
            {candidates.map((candidate) => (
              <Card key={candidate.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">
                        {candidate.name}
                      </CardTitle>
                      <CardDescription>
                        {candidate.role} • {candidate.experience} •{" "}
                        {candidate.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          {candidate.match}% match
                        </div>
                        <Progress value={candidate.match} className="w-20" />
                      </div>
                      <Badge
                        variant={
                          candidate.status === "Interview"
                            ? "default"
                            : candidate.status === "Review"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {candidate.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Applied {candidate.applied}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <XCircle className="mr-2 h-4 w-4" />
                        Reject
                      </Button>
                      <Button
                        size="sm"
                        className="bg-brand-600 hover:bg-brand-700"
                      >
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Advance
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {candidate.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="interviews" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interview Schedule</CardTitle>
              <CardDescription>
                Manage upcoming interviews and feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  No interviews scheduled yet
                </p>
                <Button className="mt-4 bg-brand-600 hover:bg-brand-700">
                  Schedule Interview
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Job Posting</CardTitle>
              <CardDescription>
                Post a new job opening to attract top talent
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input
                    id="job-title"
                    placeholder="e.g. Senior Frontend Developer"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g. San Francisco, Remote"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-type">Job Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="List the required skills, experience, and qualifications..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex gap-2">
                <Button variant="outline">Save as Draft</Button>
                <Button className="bg-brand-600 hover:bg-brand-700">
                  Publish Job
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
