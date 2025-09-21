import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  Download,
  Eye,
  FileText,
  MapPin,
  MessageSquare,
  Plus,
  User,
} from "lucide-react";
import React from "react";

const Sessions = (): JSX.Element => {
  const sidebarItems = [
    { name: "Dashboard", icon: "📊", active: false },
    { name: "Sessions", icon: "📅", active: true },
    { name: "Goals", icon: "🎯", active: false },
    { name: "Reports", icon: "📋", active: false },
    { name: "Appointments", icon: "📅", active: false },
    { name: "Billing", icon: "💳", active: false },
    { name: "Messages", icon: "💬", active: false, hasNotification: true },
  ];

  const upcomingSessions = [
    {
      type: "Social Skills Practice",
      date: "Dec 15, 2024 at 2:00 PM",
      duration: "60 minutes",
      therapist: "Dr. Michael Chen",
      location: "In Person",
      status: "Tomorrow",
      statusColor: "bg-green-100 text-green-800",
      buttonColor: "bg-green-600 hover:bg-green-700",
      actionColor: "bg-green-600 hover:bg-green-700",
    },
    {
      type: "Emotional Regulation",
      date: "Dec 17, 2024 at 10:00 AM",
      duration: "45 minutes",
      therapist: "Dr. Sarah Williams",
      location: "In Person",
      status: "Dec 17",
      statusColor: "bg-blue-100 text-blue-800",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      actionColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      type: "Daily Living Skills",
      date: "Dec 18, 2024 at 3:30 PM",
      duration: "60 minutes",
      therapist: "Dr. Michael Chen",
      location: "In Person",
      status: "Dec 18",
      statusColor: "bg-purple-100 text-purple-800",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      actionColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  const sessionHistory = [
    {
      type: "Social Skills Practice",
      date: "Dec 12, 2024 at 2:00 PM",
      therapist: "Dr. Michael Chen",
      duration: "60 minutes",
      status: "In-Person",
      statusColor: "bg-green-100 text-green-800",
      tags: ["Peer Interactions", "Communication Skills"],
      description:
        "Worked on initiating conversations and interpreting non-verbal cues. Emma showed great improvement in peer interactions using structured play activities. Successfully initiated 3 conversations independently.",
    },
    {
      type: "Emotional Regulation",
      date: "Dec 10, 2024 at 10:00 AM",
      therapist: "Dr. Sarah Williams",
      duration: "45 minutes",
      status: "Virtual",
      statusColor: "bg-blue-100 text-blue-800",
      tags: ["Emotional Regulation", "Coping Strategies"],
      description:
        "Practiced deep breathing techniques and identified personal triggers. Emma successfully used coping strategies twice during session when experiencing frustration with challenging tasks.",
    },
    {
      type: "Daily Living Skills",
      date: "Dec 8, 2024 at 3:30 PM",
      therapist: "Dr. Michael Chen",
      duration: "60 minutes",
      status: "In-Person",
      statusColor: "bg-green-100 text-green-800",
      tags: ["Daily Routines", "Independence"],
      description:
        "Focused on morning routine completion and organization skills. Emma completed 4 out of 5 morning routine steps independently, showing significant improvement in task sequencing.",
    },
    {
      type: "Communication Skills",
      date: "Dec 5, 2024 at 1:00 PM",
      therapist: "Dr. Lisa Rodriguez",
      duration: "45 minutes",
      status: "Virtual",
      statusColor: "bg-blue-100 text-blue-800",
      tags: ["Communication Skills", "Voice Modulation"],
      description:
        "Worked on appropriate volume control and tone modulation in different social contexts. Emma practiced using indoor voice during virtual activities and showed good awareness of volume levels.",
    },
  ];

  const quickActions = [
    {
      icon: Plus,
      title: "Add New Session",
      subtitle: "Staff Only",
      color: "text-blue-600",
    },
    {
      icon: Download,
      title: "Download Report",
      subtitle: "All Sessions",
      color: "text-green-600",
    },
    {
      icon: MessageSquare,
      title: "Message Therapist",
      subtitle: "About Session",
      color: "text-purple-600",
    },
    {
      icon: Calendar,
      title: "Schedule Session",
      subtitle: "Book Next",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">ABA Clinic Portal</h1>
              <p className="text-xs text-gray-500">
                Welcome back, Sarah Johnson
              </p>
            </div>
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  item.active
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span>{item.icon}</span>
                <span className="flex-1">{item.name}</span>
                {item.hasNotification && (
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="" alt="Emma Johnson" />
                <AvatarFallback>EJ</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Emma Johnson
                </h2>
                <p className="text-sm text-gray-500">
                  Age 8 • Started therapy: March 2024
                </p>
                <div className="flex items-center gap-4 mt-1">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    Active Program
                  </Badge>
                  <span className="text-sm text-gray-500">
                    Primary Therapist: Dr. Michael Chen
                  </span>
                </div>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 h-auto">
              Switch to Staff Mode
            </Button>
          </div>
        </header>

        <div className="p-6">
          {/* Therapy Sessions Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Therapy Sessions
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>12/01/2024</span>
                  <span>to</span>
                  <span>12/31/2024</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="all" className="mb-6">
              <TabsList className="grid w-full grid-cols-5 lg:w-auto">
                <TabsTrigger
                  value="all"
                  className="bg-blue-600 text-white data-[state=active]:bg-blue-700"
                >
                  All Sessions
                </TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
                <TabsTrigger value="by-goal">By Goal</TabsTrigger>
                <TabsTrigger value="by-therapist">By Therapist</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Upcoming Sessions */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Upcoming Sessions</h4>
                <span className="text-sm text-green-600">3 Scheduled</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingSessions.map((session, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-medium text-green-600">
                            Virtual Session
                          </span>
                        </div>
                        <Badge className={session.statusColor}>
                          {session.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-base font-medium text-gray-900">
                        {session.type}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{session.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{session.therapist}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{session.location}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className={`${session.buttonColor} text-white h-auto flex-1`}
                        >
                          Join Virtual Session
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className={`${session.actionColor} text-white h-auto flex-1`}
                        >
                          Edit Session Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Session History */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Session History</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Showing 15 of 47 sessions</span>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View All
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {sessionHistory.map((session, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs">
                              {session.therapist
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h5 className="font-medium text-gray-900">
                              {session.type}
                            </h5>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>{session.date}</span>
                              <span>{session.therapist}</span>
                              <span>{session.duration}</span>
                              <Badge className={session.statusColor}>
                                {session.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-auto"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-auto"
                          >
                            <FileText className="w-4 h-4 mr-1" />
                            Report
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-auto"
                          >
                            <MessageSquare className="w-4 h-4 mr-1" />
                            Message
                          </Button>
                        </div>
                      </div>

                      <div className="flex gap-2 mb-3">
                        {session.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {session.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h4 className="font-medium text-gray-900 mb-4">Quick Actions</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardContent className="p-4 text-center">
                    <action.icon
                      className={`w-8 h-8 mx-auto mb-2 ${action.color}`}
                    />
                    <h5 className="font-medium text-gray-900 text-sm mb-1">
                      {action.title}
                    </h5>
                    <p className="text-xs text-gray-500">{action.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sessions;
