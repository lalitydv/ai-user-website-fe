"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/contexts/AuthContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const { user, signOut } = useAuth()
  const pathname = usePathname()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleSignOut = async () => {
    await signOut()
  }

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const isActiveLink = (path: string) => {
    return pathname === path
  }

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-[100]">
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 mx-auto border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              {!logoError ? (
                <Image
                  src="/images/Logo/buildro-logo.png"
                  alt="buildro.ai Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                  onError={() => setLogoError(true)}
                  priority
                />
              ) : (
                <div className="h-10 px-4 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  buildro.ai
                </div>
              )}
            </Link>

            {/* Right side content */}

            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/community"
                className={`relative text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--brand-pink))] dark:hover:text-[hsl(var(--brand-pink))] transition-colors ${isActiveLink('/community')
                    ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent'
                    : ''
                  }`}
              >
                Community
                {isActiveLink('/community') && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))]"></div>
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/pricing"
                className={`relative text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--brand-pink))] dark:hover:text-[hsl(var(--brand-pink))] transition-colors ${isActiveLink('/pricing')
                    ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent'
                    : ''
                  }`}
              >
                Pricing
                {isActiveLink('/pricing') && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))]"></div>
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/tutorial"
                className={`relative text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--brand-pink))] dark:hover:text-[hsl(var(--brand-pink))] transition-colors ${isActiveLink('/tutorial')
                    ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent'
                    : ''
                  }`}
              >
                Tutorial
                {isActiveLink('/tutorial') && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))]"></div>
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/our-story"
                className={`relative text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--brand-pink))] dark:hover:text-[hsl(var(--brand-pink))] transition-colors ${isActiveLink('/our-story')
                    ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent'
                    : ''
                  }`}
              >
                Our Story
                {isActiveLink('/our-story') && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))]"></div>
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Theme Toggle - Desktop Only */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              {user ? (
                /* User is logged in */
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name || user.email} />
                        <AvatarFallback className="bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] text-white text-sm">
                          {user.user_metadata?.full_name
                            ? getUserInitials(user.user_metadata.full_name)
                            : user.email?.charAt(0).toUpperCase() || 'U'
                          }
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        {user.user_metadata?.full_name && (
                          <p className="font-medium">{user.user_metadata.full_name}</p>
                        )}
                        {user.email && (
                          <p className="w-[200px] truncate text-sm text-muted-foreground">
                            {user.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                /* User is not logged in */
                <>
                  <Button
                    variant="outline"
                    className="md:visible invisible border-[hsl(var(--brand-pink))] text-[hsl(var(--brand-pink))] hover:bg-[hsl(var(--brand-pink))] hover:text-white bg-transparent dark:bg-transparent dark:border-[hsl(var(--brand-pink))] dark:text-[hsl(var(--brand-pink))] dark:hover:bg-[hsl(var(--brand-pink))] dark:hover:text-white rounded-full px-4 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button
                    className="md:visible invisible bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] hover:from-[hsl(var(--brand-pink))/90] hover:to-[hsl(var(--brand-blue))/90] text-white rounded-full px-4 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/signup">Try Free</Link>
                  </Button>
                </>
              )}
            </div>



            {/* Mobile menu button */}
            <button
              className="md:hidden ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div className={`fixed inset-0 z-[300] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                {!logoError ? (
                  <Image
                    src="/images/Logo/buildro-logo.png"
                    alt="buildro.ai Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                    onError={() => setLogoError(true)}
                    priority
                  />
                ) : (
                  <div className="h-8 px-3 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    buildro.ai
                  </div>
                )}
                {/* <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Menu</span> */}
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-6">
              <div className="space-y-2">
                <Link
                  href="/community"
                  className={`flex items-center py-4 px-4 text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--brand-pink))] dark:hover:text-[hsl(var(--brand-pink))] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group ${isActiveLink('/community')
                      ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent'
                      : ''
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg font-medium">Community</span>
                  <div className="ml-auto w-2 h-2 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  href="/pricing"
                  className={`flex items-center py-4 px-4 text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--brand-pink))] dark:hover:text-[hsl(var(--brand-pink))] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group ${isActiveLink('/pricing')
                      ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent'
                      : ''
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg font-medium">Pricing</span>
                  <div className="ml-auto w-2 h-2 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  href="/tutorial"
                  className={`flex items-center py-4 px-4 text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--brand-pink))] dark:hover:text-[hsl(var(--brand-pink))] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group ${isActiveLink('/tutorial')
                      ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent'
                      : ''
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg font-medium">Tutorial</span>
                  <div className="ml-auto w-2 h-2 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  href="/our-story"
                  className={`flex items-center py-4 px-4 text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--brand-pink))] dark:hover:text-[hsl(var(--brand-pink))] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group ${isActiveLink('/our-story')
                      ? 'bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-pink))] bg-clip-text text-transparent'
                      : ''
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-lg font-medium">Our Story</span>
                  <div className="ml-auto w-2 h-2 bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>

                {/* Theme Toggle - Mobile Only */}
                <div className="flex items-center py-4 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 group">
                  <span className="text-lg font-medium">Theme</span>
                  <div className="ml-auto">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </nav>

            {/* Action Buttons */}
            <div className="p-6 space-y-3 border-t border-gray-200 dark:border-gray-700">
              {user ? (
                <>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name || user.email} />
                      <AvatarFallback className="bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] text-white">
                        {user.user_metadata?.full_name
                          ? getUserInitials(user.user_metadata.full_name)
                          : user.email?.charAt(0).toUpperCase() || 'U'
                        }
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      {user.user_metadata?.full_name && (
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {user.user_metadata.full_name}
                        </p>
                      )}
                      {user.email && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[hsl(var(--brand-pink))] text-[hsl(var(--brand-pink))] hover:bg-[hsl(var(--brand-pink))] hover:text-white bg-transparent dark:bg-transparent dark:border-[hsl(var(--brand-pink))] dark:text-[hsl(var(--brand-pink))] dark:hover:bg-[hsl(var(--brand-pink))] dark:hover:text-white rounded-xl py-3 text-base font-medium transition-all duration-300"
                    onClick={handleSignOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="w-full border-[hsl(var(--brand-pink))] text-[hsl(var(--brand-pink))] hover:bg-[hsl(var(--brand-pink))] hover:text-white bg-transparent dark:bg-transparent dark:border-[hsl(var(--brand-pink))] dark:text-[hsl(var(--brand-pink))] dark:hover:bg-[hsl(var(--brand-pink))] dark:hover:text-white rounded-xl py-3 text-base font-medium transition-all duration-300"
                    asChild
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-[hsl(var(--brand-pink))] to-[hsl(var(--brand-blue))] hover:from-[hsl(var(--brand-pink))/90] hover:to-[hsl(var(--brand-blue))/90] text-white rounded-xl py-3 text-base font-medium transition-all duration-300"
                    asChild
                  >
                    <Link href="/signup">Try Free</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
