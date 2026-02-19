export default function Footer() {
  return (
    <footer className="bg-[#111C44] border-t border-[#0A1128] mt-20">
      <div className="container mx-auto px-6 py-10 text-center text-gray-400 space-y-4">
        
        <p className="text-lg font-semibold text-white">
          DailyOps<span className="text-[#2BD9C5]">.Tech</span>
        </p>

        <p className="text-sm">
          Articles pratiques & analyses terrain pour ingénieurs réseau et infrastructure.
        </p>

        <p className="text-sm">
          Contact : <span className="text-[#2BD9C5]">contact@dailyops.tech</span>
        </p>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} DailyOps.Tech — Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}
