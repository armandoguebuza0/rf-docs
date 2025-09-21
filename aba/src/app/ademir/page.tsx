import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  CalendarDays,
  CalendarPlus,
  CreditCard,
  Download,
  ExternalLink,
  FileText,
  HelpCircle,
  LayoutDashboard,
  MessageSquare,
  Receipt,
  Send,
  Target,
  User,
  Video,
} from "lucide-react";
import React from "react";

const Dashboard = (): JSX.Element => {
  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Calendar, label: "Sessions" },
    { icon: Target, label: "Goals" },
    { icon: FileText, label: "Reports" },
    { icon: CalendarDays, label: "Appointments" },
    { icon: CreditCard, label: "Billing" },
    { icon: MessageSquare, label: "Messages", badge: "2" },
  ];

  const therapyGoals = [
    {
      title: "Peer Interactions",
      description:
        "Initiating conversations with peers during structured activities",
      progress: 85,
      target: "Target: Dec 30, 2024",
      color: "bg-green-500",
    },
    {
      title: "Emotional Regulation",
      description: "Using coping strategies when experiencing frustration",
      progress: 62,
      target: "Target: Jan 15, 2025",
      color: "bg-blue-500",
    },
    {
      title: "Daily Routines",
      description: "Completing morning routine independently",
      progress: 78,
      target: "Target: Dec 20, 2024",
      color: "bg-purple-500",
    },
    {
      title: "Communication Skills",
      description: "Using appropriate volume and tone in conversations",
      progress: 45,
      target: "Target: Feb 1, 2025",
      color: "bg-orange-500",
    },
  ];

  const recentSessions = [
    {
      title: "Social Skills Practice",
      date: "Dec 12, 2024",
      description:
        "Worked on initiating conversations and maintaining eye contact. Emma showed great improvement in peer interactions.",
      therapist: "Dr. Michael Chen",
      duration: "60 minutes",
      color: "border-l-blue-500",
    },
    {
      title: "Emotional Regulation",
      date: "Dec 10, 2024",
      description:
        "Practiced deep breathing techniques and identified triggers. Emma successfully used coping strategies twice during session.",
      therapist: "Dr. Sarah Williams",
      duration: "45 minutes",
      color: "border-l-green-500",
    },
    {
      title: "Daily Living Skills",
      date: "Dec 8, 2024",
      description:
        "Focused on morning routine completion. Emma completed 4 out of 5 steps independently.",
      therapist: "Dr. Michael Chen",
      duration: "60 minutes",
      color: "border-l-purple-500",
    },
  ];

  const quickActions = [
    {
      icon: Download,
      title: "Download Latest Report",
      description: "November 2024 Progress Summary",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: CalendarPlus,
      title: "Schedule Appointment",
      description: "Book your next therapy session",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Send,
      title: "Message Therapist",
      description: "Send a secure message to your care team",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Receipt,
      title: "View Billing",
      description: "Check payment history and invoices",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get assistance or view FAQs",
      color: "bg-gray-50 text-gray-600",
    },
  ];

  const recentActivity = [
    {
      text: "Session completed",
      time: "2 hours ago",
      color: "text-blue-600",
    },
    {
      text: "Goal milestone reached",
      time: "Yesterday",
      color: "text-green-600",
    },
    {
      text: "New report available",
      time: "3 days ago",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-gray-900">
              ABA Clinic Portal
            </span>
          </div>
        </div>

        <nav className="flex-1 px-4">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 cursor-pointer ${
                item.active
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <Badge className="ml-auto bg-red-500 text-white text-xs">
                  {item.badge}
                </Badge>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">ABA Clinic Portal</h1>
            <p className="text-blue-100 text-sm">Welcome back, Sarah Johnson</p>
          </div>
          <Button className="bg-blue-700 hover:bg-blue-800 h-auto">
            Switch to Staff Mode
          </Button>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {/* Patient Profile Section */}
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-16 h-16">
              <AvatarImage src="" alt="Emma Johnson" />
              <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                EJ
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Emma Johnson</h2>
              <p className="text-gray-600">
                Age 6 • Started therapy: March 2024
              </p>
              <div className="flex items-center gap-4 mt-1">
                <Badge className="bg-green-100 text-green-800">
                  Active Program
                </Badge>
                <span className="text-sm text-gray-600">
                  Primary Therapist: Dr. Michael Chen
                </span>
              </div>
            </div>
          </div>

          {/* Main Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Overall Progress */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Overall Progress
                </CardTitle>
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-24 h-24">
                    <svg
                      className="w-24 h-24 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="70, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">
                        70%
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Program Completion
                </p>
              </CardContent>
            </Card>

            {/* Next Session */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Next Session
                </CardTitle>
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Tomorrow</h3>
                  <p className="text-sm text-gray-600">
                    Dec 15, 2024 at 2:00 PM
                  </p>
                  <p className="text-sm text-gray-600">with Dr. Michael Chen</p>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 h-auto">
                    <Video className="w-4 h-4 mr-2" />
                    Join Virtual Session
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Recent Activity
                </CardTitle>
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${activity.color.replace("text-", "bg-")}`}
                      ></div>
                      <div>
                        <p className="text-sm font-medium">{activity.text}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Therapy Goals */}
          <Card className="mb-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Current Therapy Goals</CardTitle>
              <Button variant="ghost" className="text-blue-600 h-auto">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Goals
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {therapyGoals.map((goal, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{goal.title}</h4>
                      <span className="text-sm font-semibold">
                        {goal.progress}%
                      </span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                    <p className="text-sm text-gray-600">{goal.description}</p>
                    <p className="text-xs text-gray-500">{goal.target}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Sessions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Sessions</CardTitle>
                <Button variant="ghost" className="text-blue-600 h-auto">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session, index) => (
                    <div
                      key={index}
                      className={`border-l-4 ${session.color} pl-4 py-2`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{session.title}</h4>
                        <span className="text-sm text-gray-500">
                          {session.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {session.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {session.therapist}
                        </div>
                        <span>• {session.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer"
                    >
                      <div className={`p-2 rounded-lg ${action.color}`}>
                        <action.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{action.title}</h4>
                        <p className="text-xs text-gray-600">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
