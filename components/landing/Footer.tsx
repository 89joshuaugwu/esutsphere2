import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080810] pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
        {/* Brand Column (takes 2 columns space on lg) */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image src="/logo.png" alt="ESUTSphere Logo" width={28} height={28} className="rounded-full" />
            <span className="font-display text-xl text-white tracking-wide">
              ESUTSphere
            </span>
          </Link>
          <p className="text-[14px] text-text-muted leading-relaxed max-w-[320px]">
            The premier academic social platform for Enugu State University of Science
            and Technology students. Connect, share, and excel.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-[13px] font-bold text-white uppercase tracking-wider mb-5">Platform</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Home</Link></li>
            <li><Link href="/library" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Library</Link></li>
            <li><Link href="/explore" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Community</Link></li>
            <li><Link href="/blog" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-[13px] font-bold text-white uppercase tracking-wider mb-5">Resources</h4>
          <ul className="space-y-3">
            <li><Link href="/library" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Study Materials</Link></li>
            <li><Link href="/library" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Past Questions</Link></li>
            <li><Link href="/blog" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Tutorials</Link></li>
            <li><Link href="#" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Help Center</Link></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h4 className="text-[13px] font-bold text-white uppercase tracking-wider mb-5">Company</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">About Us</Link></li>
            <li><Link href="#" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Contact</Link></li>
            <li><Link href="#" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="text-[14px] text-text-muted hover:text-brand-light transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-text-muted">
          &copy; {new Date().getFullYear()} ESUTSphere. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <p className="text-[12px] text-text-disabled">Built for ESUT Agbani.</p>
        </div>
      </div>
    </footer>
  );
}
