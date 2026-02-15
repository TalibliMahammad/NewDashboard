module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs [app-ssr] (ecmascript) <export MotionDiv as div>");
"use client";
;
;
function Dashboard() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // return(
    //   <div className="relative flex justify-center items-center min-h-screen bg-background overflow-hidden">
    //   <div className="relative z-10">
    //   <div 
    //     className="aurora-bg absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/30 blur-[100px] pointer-events-none z-0" 
    //   />
    //      <AuthCard />
    //   </div>
    // </div>
    // )
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__MotionDiv__as__div$3e$__["div"];
//   return (
// <div className="flex min-h-screen bg-background flex-col lg:flex-row">
//     <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
//     <main className="flex-1 lg:ml-64 flex flex-col overflow-hidden">
//       <header className="bg-card border-b border-border sticky top-0 z-10 flex-shrink-0">
//         <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-between gap-3 sm:gap-4">
//           <div>
//             <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
//               Dashboard
//             </h1>
//             <p className="hidden lg:flex text-xs sm:text-sm text-muted-foreground mt-1">
//               Xoş gəldiniz! Sistem hazır vəziyyətdədir.
//             </p>
//           </div>
//           <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
//             <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-sm transition-colors">
//               <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span className="hidden sm:inline">Bu Ay</span>
//             </button>
//             <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-sm transition-colors">
//               <Download className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span className="hidden sm:inline">Eksport</span>
//             </button>
//           </div>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="fixed top-8 sm:top-4 right-4 z-50 lg:hidden w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center shadow-lg"
//           >
//             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>
//       </header>
//       <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-4 sm:mb-6 mt-10">
//           <MetricCard
//             title="Total Users"
//             value="12,484"
//             change={12.5}
//             changeLabel="vs last month"
//             icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
//             trend="up"
//           />
//           <MetricCard
//             title="Revenue"
//             value="$48,596"
//             change={8.2}
//             changeLabel="vs last month"
//             icon={<TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />}
//             trend="up"
//           />
//           <MetricCard
//             title="Data Points"
//             value="2.4M"
//             change={3.1}
//             changeLabel="vs last month"
//             icon={<BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />}
//             trend="down"
//           />
//           <MetricCard
//             title="API Performance"
//             value="98.6%"
//             change={2.3}
//             changeLabel="vs last month"
//             icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6" />}
//             trend="up"
//           />
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
//           <div className="lg:col-span-2">
//             <TrafficChart />
//           </div>
//           <div>
//             <ActivityTable />
//           </div>
//         </div>
//       </div>
//     </main>
//   </div>
// );
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ce6aa389._.js.map