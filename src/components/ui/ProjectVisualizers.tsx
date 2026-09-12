import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2, Cpu, Scan, Sparkles, PieChart, RefreshCw } from "lucide-react";

// =========================================================
// 1. AI TEXT SUMMARIZER PIPELINE VISUALIZER
// =========================================================
export const TextSummarizerVisualizer: React.FC = () => {
  const [step, setStep] = useState<"idle" | "tokenizing" | "attention" | "done">("idle");
  const [sampleText, setSampleText] = useState(
    "Deep learning transformer models utilize multi-head self-attention mechanisms to evaluate contextual relationships between word tokens in long-form documents."
  );

  const runSimulation = () => {
    setStep("tokenizing");
    setTimeout(() => setStep("attention"), 1000);
    setTimeout(() => setStep("done"), 2200);
  };

  const tokens = sampleText.split(" ");
  const summaryResult = "Transformers use multi-head self-attention to process token relationships in documents.";

  return (
    <div className="bg-[#070914] border border-cyan-500/30 rounded-2xl p-5 font-mono text-xs shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 font-bold tracking-wider">T5 INFERENCE PIPELINE SIMULATOR</span>
        </div>
        <button
          onClick={runSimulation}
          disabled={step !== "idle" && step !== "done"}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/30 transition-colors disabled:opacity-50"
        >
          {step === "idle" || step === "done" ? (
            <>
              <Play className="w-3 h-3 fill-cyan-300" /> RUN INFERENCE
            </>
          ) : (
            <>
              <RefreshCw className="w-3 h-3 animate-spin" /> PROCESSING...
            </>
          )}
        </button>
      </div>

      {/* Pipeline Steps Indicator */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-[10px] text-center">
        <div className={`p-1.5 rounded border transition-colors ${
          step === "tokenizing" ? "bg-cyan-500/30 border-cyan-400 text-cyan-200" : "bg-white/5 border-white/10 text-slate-500"
        }`}>
          1. TOKENIZATION
        </div>
        <div className={`p-1.5 rounded border transition-colors ${
          step === "attention" ? "bg-violet-500/30 border-violet-400 text-violet-200" : "bg-white/5 border-white/10 text-slate-500"
        }`}>
          2. SELF-ATTENTION
        </div>
        <div className={`p-1.5 rounded border transition-colors ${
          step === "done" ? "bg-emerald-500/30 border-emerald-400 text-emerald-200" : "bg-white/5 border-white/10 text-slate-500"
        }`}>
          3. T5 SUMMARY
        </div>
      </div>

      {/* Input Text Box */}
      <div className="mb-4">
        <label className="text-[10px] text-slate-400 block mb-1">INPUT DOCUMENT (RAW TEXT):</label>
        <textarea
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
          rows={2}
          className="w-full bg-[#0a0d1d] border border-white/10 rounded-lg p-2.5 text-slate-200 focus:border-cyan-400 outline-none text-xs"
        />
      </div>

      {/* Processing Animation Canvas */}
      <div className="bg-[#050711] border border-white/10 rounded-xl p-3 min-h-[110px] flex flex-col justify-center">
        {step === "idle" && (
          <div className="text-slate-500 text-center text-[11px]">
            Click <span className="text-cyan-400 font-bold">RUN INFERENCE</span> to trigger the T5 transformer tokenization and self-attention model.
          </div>
        )}

        {step === "tokenizing" && (
          <div>
            <div className="text-[10px] text-cyan-400 mb-2">EXTRACTING BYTE-PAIR ENCODING TOKENS:</div>
            <div className="flex flex-wrap gap-1">
              {tokens.map((t, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[10px]"
                >
                  [{t}]
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {step === "attention" && (
          <div>
            <div className="text-[10px] text-violet-400 mb-2">SELF-ATTENTION MATRIX WEIGHT COMPUTATION:</div>
            <div className="grid grid-cols-6 gap-1 h-12">
              {Array.from({ length: 18 }).map((_, idx) => (
                <motion.div
                  key={idx}
                  animate={{ opacity: [0.3, 1, 0.4] }}
                  transition={{ duration: 0.4, repeat: Infinity, delay: idx * 0.03 }}
                  className="rounded bg-gradient-to-r from-violet-600 to-cyan-500 opacity-80"
                  style={{ height: `${Math.random() * 80 + 20}%` }}
                />
              ))}
            </div>
          </div>
        )}

        {step === "done" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-[10px] text-emerald-400 mb-1 flex items-center gap-1 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> ABSTRACTIVE SUMMARY GENERATED (T5 MODEL):
            </div>
            <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-lg p-2.5 text-emerald-200 leading-relaxed font-sans text-xs">
              "{summaryResult}"
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// =========================================================
// 2. AI ATTENDANCE SYSTEM VISUALIZER
// =========================================================
export const AttendanceVisualizer: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [verified, setVerified] = useState(false);

  const triggerScan = () => {
    setScanning(true);
    setVerified(false);
    setTimeout(() => {
      setScanning(false);
      setVerified(true);
    }, 1800);
  };

  return (
    <div className="bg-[#070914] border border-cyan-500/30 rounded-2xl p-5 font-mono text-xs shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <Scan className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 font-bold tracking-wider">BIOMETRIC AUTHENTICATION MATRIX</span>
        </div>
        <button
          onClick={triggerScan}
          disabled={scanning}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/30 transition-colors disabled:opacity-50"
        >
          {scanning ? "SCANNING..." : "TEST BIOMETRIC SCAN"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        {/* Simulated Camera Scanner Box */}
        <div className="relative w-full h-36 bg-[#04060e] border border-cyan-500/40 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src="/Hemant-cutout.png"
            alt="Facial Scan Subject"
            className="w-24 h-28 object-cover object-top filter contrast-125 opacity-90"
          />
          <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none" />

          {/* Scanner Reticle Brackets */}
          <div className="absolute w-20 h-20 border-2 border-dashed border-cyan-400/80 rounded-lg animate-pulse pointer-events-none" />

          {/* Laser Scan Bar */}
          {scanning && (
            <motion.div
              className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] z-20"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          )}

          {verified && (
            <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-xs flex flex-col items-center justify-center z-30">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-1" />
              <span className="text-emerald-300 font-bold text-xs">FACE & VOICE VERIFIED</span>
            </div>
          )}
        </div>

        {/* Biometric Verification Logs */}
        <div className="space-y-2 text-[10px]">
          <div className="bg-[#050712] p-2 rounded-lg border border-white/10 flex justify-between">
            <span className="text-slate-400">FACIAL VECTOR (128-D)</span>
            <span className={scanning ? "text-cyan-300 animate-pulse" : verified ? "text-emerald-400 font-bold" : "text-slate-500"}>
              {scanning ? "MATCHING..." : verified ? "EUCLIDEAN: 0.12 (MATCH)" : "IDLE"}
            </span>
          </div>

          <div className="bg-[#050712] p-2 rounded-lg border border-white/10 flex justify-between">
            <span className="text-slate-400">VOICE WAVEFORM AUTH</span>
            <span className={scanning ? "text-violet-300 animate-pulse" : verified ? "text-emerald-400 font-bold" : "text-slate-500"}>
              {scanning ? "ANALYZING..." : verified ? "FREQUENCY: PASSED" : "IDLE"}
            </span>
          </div>

          <div className="bg-[#050712] p-2 rounded-lg border border-white/10 flex justify-between">
            <span className="text-slate-400">DATABASE LOG</span>
            <span className={verified ? "text-emerald-300 font-bold" : "text-slate-500"}>
              {verified ? "RECORD INSERTED (SQL)" : "WAITING"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================
// 3. NEURAL STYLE TRANSFER VISUALIZER
// =========================================================
export const StyleTransferVisualizer: React.FC = () => {
  const [styleWeight, setStyleWeight] = useState(65);
  const [selectedPreset, setSelectedPreset] = useState<"starry" | "cyber" | "renaissance">("starry");

  const presets = {
    starry: { name: "Starry Night (Van Gogh)", color: "from-blue-600 via-amber-400 to-indigo-900" },
    cyber: { name: "Cyberpunk Neon", color: "from-cyan-400 via-purple-600 to-pink-500" },
    renaissance: { name: "Renaissance Oil", color: "from-amber-700 via-yellow-600 to-orange-950" },
  };

  return (
    <div className="bg-[#070914] border border-cyan-500/30 rounded-2xl p-5 font-mono text-xs shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-violet-300 font-bold tracking-wider">AdaIN STYLE SYNTHESIS SIMULATOR</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {(Object.keys(presets) as Array<keyof typeof presets>).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedPreset(key)}
            className={`p-2 rounded-xl text-[10px] text-left border font-semibold transition-all ${
              selectedPreset === key
                ? "bg-violet-950/70 border-violet-400 text-violet-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-slate-200"
            }`}
          >
            {presets[key].name}
          </button>
        ))}
      </div>

      {/* Style Slider */}
      <div className="mb-4">
        <div className="flex justify-between text-[10px] text-slate-400 mb-1">
          <span>CONTENT WEIGHT ({100 - styleWeight}%)</span>
          <span>AdaIN STYLE WEIGHT ({styleWeight}%)</span>
        </div>
        <input
          type="range"
          min="10"
          max="90"
          value={styleWeight}
          onChange={(e) => setStyleWeight(Number(e.target.value))}
          className="w-full accent-violet-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
        />
      </div>

      {/* Visual Result Simulation Render */}
      <div className="relative h-28 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
        <div className={`absolute inset-0 bg-gradient-to-r ${presets[selectedPreset].color} opacity-${Math.min(90, styleWeight)} transition-opacity duration-300`} />
        <img
          src="/Hemant-cutout.png"
          alt="Style Transfer Base Content"
          className="relative z-10 h-full object-contain filter contrast-125"
          style={{ opacity: 1 - styleWeight * 0.005 }}
        />
        <div className="absolute bottom-2 right-2 z-20 bg-black/80 px-2 py-0.5 rounded text-[9px] text-violet-300 border border-violet-400/40">
          VGG19 AdaIN FEATURE BLEND
        </div>
      </div>
    </div>
  );
};

// =========================================================
// 4. CUSTOMER SEGMENTATION VISUALIZER
// =========================================================
export const CustomerSegmentationVisualizer: React.FC = () => {
  const [activeCluster, setActiveCluster] = useState<number | null>(null);

  const clusters = [
    { id: 1, name: "High-Value Loyalists", size: "28%", color: "bg-cyan-400", desc: "Frequent purchases & high basket size" },
    { id: 2, name: "Price-Sensitive Bargain Buyers", size: "42%", color: "bg-violet-400", desc: "Discount-driven, seasonal activity" },
    { id: 3, name: "At-Risk / Inactive Customers", size: "30%", color: "bg-pink-400", desc: "Decreasing engagement, churn risk" },
  ];

  return (
    <div className="bg-[#070914] border border-cyan-500/30 rounded-2xl p-5 font-mono text-xs shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <PieChart className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 font-bold tracking-wider">PCA + K-MEANS CLUSTER VISUALIZER</span>
        </div>
      </div>

      {/* Interactive Cluster Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
        {clusters.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCluster(activeCluster === c.id ? null : c.id)}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              activeCluster === c.id
                ? "bg-cyan-950/80 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                : "bg-white/5 border-white/10 text-slate-300 hover:border-cyan-500/30"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[11px] text-white">{c.name}</span>
              <span className={`w-2 h-2 rounded-full ${c.color}`} />
            </div>
            <div className="text-[10px] text-cyan-300 font-mono">PORTION: {c.size}</div>
          </button>
        ))}
      </div>

      {/* Cluster Description Info */}
      <div className="bg-[#050711] p-3 rounded-xl border border-white/10 text-[11px]">
        {activeCluster ? (
          <div>
            <span className="text-cyan-400 font-bold block mb-1">
              CLUSTER {activeCluster} INSIGHT: {clusters.find((c) => c.id === activeCluster)?.name}
            </span>
            <p className="text-slate-300 font-sans text-xs">
              {clusters.find((c) => c.id === activeCluster)?.desc}
            </p>
          </div>
        ) : (
          <span className="text-slate-500 text-center block">
            Click any customer cluster above to inspect PCA component weights and marketing recommendations.
          </span>
        )}
      </div>
    </div>
  );
};
