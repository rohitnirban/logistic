'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/index';
import { Dispatch, SetStateAction } from 'react';
import { useSidebar } from '@/hooks/useSidebar';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false
}: DashboardNavProps) {
  const path = usePathname();

  const { isMinimized } = useSidebar();

  if (!items?.length) {
    return null;
  }

  console.log('isActive', isMobileNav, isMinimized);

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || 'arrowRight'];
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? '/' : item.href}
              className={cn(
                'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                path.startsWith(item.href) ? 'bg-accent' : 'transparent',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <Icon className={`ml-3 size-5`} />

              {isMobileNav || (!isMinimized && !isMobileNav) ? (
                <span className="mr-2 truncate">{item.title}</span>
              ) : (
                ''
              )}
            </Link>
          )
        );
      })}
    </nav>
  );
}
