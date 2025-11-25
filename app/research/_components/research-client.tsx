'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Lock,
  Download,
  FileText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { ResearchReport } from '@/lib/data';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type FilterType = 'All' | 'Deep Dive' | 'Update' | 'Model Update' | 'Note';

export default function ResearchClient({ reports }: { reports: ResearchReport[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<FilterType>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return reports
      .filter(
        (item) =>
          item.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((item) => typeFilter === 'All' || item.type === typeFilter);
  }, [reports, searchTerm, typeFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, typeFilter]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const listTop = document.getElementById('research-list');
    if (listTop) {
      listTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getBadgeVariant = (type: ResearchReport['type']) => {
    switch (type) {
        case 'Deep Dive': return 'default';
        case 'Update': return 'secondary';
        default: return 'outline';
    }
  }

  return (
    <div className="pt-32 min-h-screen bg-secondary">
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-foreground font-headline">
            Research Archive
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            Search our library of deep dives, earnings notes, and financial
            models.
          </p>
        </div>

        <div
          className="bg-background p-4 rounded-lg border shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between"
          id="research-list"
        >
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search ticker, company, or keyword..."
              className="pl-10 pr-4 py-2 border rounded focus:border-primary transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {(['All', 'Deep Dive', 'Update', 'Model Update', 'Note'] as FilterType[]).map(filter => (
                <Button key={filter} variant={typeFilter === filter ? 'default' : 'outline'} size="sm" onClick={() => setTypeFilter(filter)}>
                    {filter}
                </Button>
            ))}
          </div>
        </div>

        <div className="bg-background border rounded-lg shadow-sm overflow-hidden min-h-[400px]">
          <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b bg-secondary text-xs font-bold text-muted-foreground uppercase tracking-wider">
            <div className="col-span-1">Ticker</div>
            <div className="col-span-2">Company</div>
            <div className="col-span-4">Report Title</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-1 text-right">Access</div>
          </div>

          <div className="divide-y">
            {currentItems.map((item) => (
              <Link href={`/report/${item.id}`} key={item.id} className="group md:grid md:grid-cols-12 gap-4 p-5 items-center hover:bg-secondary/50 transition-colors cursor-pointer block">
                <div className="flex justify-between items-center md:hidden mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="default">{item.ticker}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  {item.access === 'Pro' ? (
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <Badge variant="secondary" className="text-green-600">FREE</Badge>
                  )}
                </div>

                <div className="hidden md:block col-span-1 font-bold text-foreground">
                  {item.ticker}
                </div>
                <div className="hidden md:block col-span-2 text-muted-foreground text-sm">
                  {item.company}
                </div>
                <div className="col-span-12 md:col-span-4 font-medium text-lg md:text-base text-foreground group-hover:text-primary transition-colors mb-2 md:mb-0">
                  {item.title}
                </div>
                <div className="hidden md:block col-span-2 text-sm text-muted-foreground">
                  {item.date}
                </div>
                <div className="col-span-12 md:col-span-2 flex items-center gap-2">
                    <Badge variant={getBadgeVariant(item.type)}>{item.type}</Badge>
                </div>

                <div className="hidden md:flex col-span-1 justify-end">
                  {item.access === 'Pro' ? (
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Lock className="w-4 h-4" />
                      <span>Pro</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-green-600 text-sm font-bold">
                      <Download className="w-4 h-4" />
                      <span>Free</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="p-12 text-center text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-4 text-border" />
              <p>No reports found matching your criteria.</p>
              <Button variant="link" onClick={() => { setSearchTerm(''); setTypeFilter('All'); }}>Clear Filters</Button>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                size="icon"
                variant={currentPage === page ? 'default' : 'outline'}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              size="icon"
              variant="outline"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
