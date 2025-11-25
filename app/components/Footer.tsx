import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-medium">
              V
            </div>
            <span className="text-lg font-bold">VARIANT</span>
          </div>
          <p className="text-neutral-500 max-w-xs">
            Empowering retail investors with the depth of institutional research
            and the clarity of independent thought.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-neutral-600">
            <li>
              <Link href={"/research"}>Research Archive</Link>
            </li>
            <li>
              <button
                onClick={() => navigateTo("track-record")}
                className="hover:text-black"
              >
                Performance
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("pricing")}
                className="hover:text-black"
              >
                Pricing
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-neutral-600">
            <li>
              <button
                onClick={() => navigateTo("about")}
                className="hover:text-black"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("contact")}
                className="hover:text-black"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-neutral-100 text-center md:text-left text-sm text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 Variant Research. All rights reserved.</p>
        <div className="flex gap-6">
          <button
            onClick={() => navigateTo("privacy")}
            className="hover:text-black"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => navigateTo("terms")}
            className="hover:text-black"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
}
