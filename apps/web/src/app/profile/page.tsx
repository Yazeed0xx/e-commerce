"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Package,
  Heart,
  Settings,
  Bell,
  Shield,
  Camera,
  Edit,
  Save,
  Calendar,
  Star,
  Truck,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data
  const [userProfile, setUserProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Music enthusiast and audiophile with a passion for high-quality sound.",
    dateJoined: "2022-03-15",
    membershipTier: "Gold",
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      isDefault: true,
    },
    {
      id: 2,
      type: "Work",
      street: "456 Business Ave",
      city: "New York",
      state: "NY",
      zipCode: "10002",
      country: "United States",
      isDefault: false,
    },
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiryMonth: "12",
      expiryYear: "2026",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiryMonth: "08",
      expiryYear: "2025",
      isDefault: false,
    },
  ]);

  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 299.99,
      items: 2,
      trackingNumber: "TN123456789",
    },
    {
      id: "ORD-002",
      date: "2024-01-08",
      status: "Processing",
      total: 159.99,
      items: 1,
      trackingNumber: "TN987654321",
    },
    {
      id: "ORD-003",
      date: "2023-12-20",
      status: "Delivered",
      total: 89.99,
      items: 1,
      trackingNumber: "TN555666777",
    },
  ]);

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    newsletter: true,
    productRecommendations: true,
    orderUpdates: true,
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log("Profile saved:", userProfile);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Processing":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Shipped":
        return <Truck className="h-4 w-4 text-blue-500" />;
      default:
        return <Package className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-500/20 text-green-700 border-green-200";
      case "Processing":
        return "bg-yellow-500/20 text-yellow-700 border-yellow-200";
      case "Shipped":
        return "bg-blue-500/20 text-blue-700 border-blue-200";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            My Account
          </h1>
          <p className="text-muted-foreground">
            Manage your profile, orders, and preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage
                        src={userProfile.avatar}
                        alt={userProfile.firstName}
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                        {userProfile.firstName[0]}
                        {userProfile.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {userProfile.firstName} {userProfile.lastName}
                  </h3>
                  <Badge className="mt-2 bg-gradient-to-r from-primary to-accent">
                    {userProfile.membershipTier} Member
                  </Badge>
                </div>

                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button
                    variant={activeTab === "orders" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </Button>
                  <Button
                    variant={activeTab === "addresses" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("addresses")}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Addresses
                  </Button>
                  <Button
                    variant={activeTab === "payments" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("payments")}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Button>
                  <Button
                    variant={activeTab === "preferences" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("preferences")}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Preferences
                  </Button>
                  <Button
                    variant={activeTab === "security" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("security")}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Personal Information</CardTitle>
                  <Button
                    variant="outline"
                    onClick={() =>
                      isEditing ? handleSaveProfile() : setIsEditing(true)
                    }
                  >
                    {isEditing ? (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={userProfile.firstName}
                        onChange={(e) =>
                          setUserProfile({
                            ...userProfile,
                            firstName: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={userProfile.lastName}
                        onChange={(e) =>
                          setUserProfile({
                            ...userProfile,
                            lastName: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userProfile.email}
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          email: e.target.value,
                        })
                      }
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={userProfile.phone}
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          phone: e.target.value,
                        })
                      }
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={userProfile.bio}
                      onChange={(e) =>
                        setUserProfile({ ...userProfile, bio: e.target.value })
                      }
                      disabled={!isEditing}
                      rows={3}
                    />
                  </div>

                  <Separator />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Member since{" "}
                        {new Date(userProfile.dateJoined).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {userProfile.membershipTier} Member Status
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <Card key={order.id} className="border">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-4">
                                <h3 className="font-semibold text-foreground">
                                  Order {order.id}
                                </h3>
                                <Badge
                                  className={`${getStatusColor(
                                    order.status
                                  )} border`}
                                >
                                  {getStatusIcon(order.status)}
                                  <span className="ml-1">{order.status}</span>
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>
                                  Placed on{" "}
                                  {new Date(order.date).toLocaleDateString()}
                                </span>
                                <span>•</span>
                                <span>
                                  {order.items} item{order.items > 1 ? "s" : ""}
                                </span>
                                <span>•</span>
                                <span>${order.total}</span>
                              </div>
                              {order.trackingNumber && (
                                <p className="text-sm text-muted-foreground">
                                  Tracking: {order.trackingNumber}
                                </p>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              {order.status === "Delivered" && (
                                <Button variant="outline" size="sm">
                                  Reorder
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Shipping Addresses</CardTitle>
                  <Button>
                    <MapPin className="mr-2 h-4 w-4" />
                    Add Address
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {addresses.map((address) => (
                      <Card key={address.id} className="border">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-foreground">
                              {address.type}
                            </h3>
                            {address.isDefault && (
                              <Badge variant="secondary">Default</Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>{address.street}</p>
                            <p>
                              {address.city}, {address.state} {address.zipCode}
                            </p>
                            <p>{address.country}</p>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              Delete
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Payment Methods Tab */}
            {activeTab === "payments" && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Payment Methods</CardTitle>
                  <Button>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Card
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <Card key={method.id} className="border">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-8 bg-gradient-to-r from-primary to-accent rounded flex items-center justify-center text-primary-foreground font-bold text-sm">
                                {method.type === "Visa" ? "V" : "M"}
                              </div>
                              <div>
                                <p className="font-medium text-foreground">
                                  {method.type} ending in {method.last4}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Expires {method.expiryMonth}/
                                  {method.expiryYear}
                                </p>
                              </div>
                              {method.isDefault && (
                                <Badge variant="secondary">Default</Badge>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                Remove
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Preferences Tab */}
            {activeTab === "preferences" && (
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive order updates and promotions via email
                        </p>
                      </div>
                      <Switch
                        checked={preferences.emailNotifications}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            emailNotifications: checked,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Get instant notifications on your device
                        </p>
                      </div>
                      <Switch
                        checked={preferences.pushNotifications}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            pushNotifications: checked,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>SMS Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive important updates via text message
                        </p>
                      </div>
                      <Switch
                        checked={preferences.smsNotifications}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            smsNotifications: checked,
                          })
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Newsletter</Label>
                        <p className="text-sm text-muted-foreground">
                          Weekly newsletter with new products and tips
                        </p>
                      </div>
                      <Switch
                        checked={preferences.newsletter}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            newsletter: checked,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Product Recommendations</Label>
                        <p className="text-sm text-muted-foreground">
                          Personalized product suggestions based on your
                          preferences
                        </p>
                      </div>
                      <Switch
                        checked={preferences.productRecommendations}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            productRecommendations: checked,
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Order Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Notifications about your order status and shipping
                        </p>
                      </div>
                      <Switch
                        checked={preferences.orderUpdates}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            orderUpdates: checked,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button className="bg-primary hover:bg-primary/90">
                      Save Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">
                        Confirm New Password
                      </Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Two-Factor Authentication
                    </h3>
                    <p className="text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Account Actions
                    </h3>
                    <div className="flex gap-4">
                      <Button className="bg-primary hover:bg-primary/90">
                        Update Password
                      </Button>
                      <Button variant="outline">Download My Data</Button>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
