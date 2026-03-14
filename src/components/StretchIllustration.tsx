interface Props {
  stretchId: string;
  className?: string;
}

// Highlight color for the targeted muscle area
const HIGHLIGHT = '#0ea5e9';
const SKIN = '#d4a574';
const SKIN_DARK = '#c49464';
const OUTLINE = '#475569';
const GROUND = '#94a3b8';

// Reusable SVG helpers
function Head({ cx, cy, r = 12 }: { cx: number; cy: number; r?: number }) {
  return <circle cx={cx} cy={cy} r={r} fill={SKIN} stroke={OUTLINE} strokeWidth="2" />;
}

function Ground({ y = 185 }: { y?: number }) {
  return <line x1="10" y1={y} x2="190" y2={y} stroke={GROUND} strokeWidth="2" strokeDasharray="6,4" />;
}

// Each function returns an SVG illustration of the stretch pose
const illustrations: Record<string, () => React.ReactNode> = {

  // ── HIPS ─────────────────────────────────────────

  'hip-1': () => ( // Pigeon Pose
    <g>
      <Ground />
      <Head cx={70} cy={80} />
      {/* torso leaning forward */}
      <line x1={70} y1={92} x2={85} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg bent 90 at knee on ground */}
      <line x1={85} y1={140} x2={60} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={60} y1={165} x2={40} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg extended */}
      <line x1={85} y1={140} x2={140} y2={160} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={140} y1={160} x2={170} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms down */}
      <line x1={80} y1={100} x2={55} y2={140} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={80} y1={100} x2={95} y2={140} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* hip highlight */}
      <circle cx={85} cy={140} r={14} fill={HIGHLIGHT} opacity={0.3} />
      <circle cx={85} cy={140} r={6} fill={HIGHLIGHT} opacity={0.6} />
    </g>
  ),

  'hip-2': () => ( // 90/90 Hip Stretch
    <g>
      <Ground />
      <Head cx={100} cy={65} />
      {/* torso upright sitting */}
      <line x1={100} y1={77} x2={100} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg: thigh forward, shin to side */}
      <line x1={100} y1={130} x2={65} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={65} y1={150} x2={40} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg: thigh to side, shin back */}
      <line x1={100} y1={130} x2={135} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={135} y1={150} x2={160} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms on knee */}
      <line x1={95} y1={95} x2={75} y2={120} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={105} y1={95} x2={125} y2={120} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* hip highlights */}
      <circle cx={85} cy={140} r={12} fill={HIGHLIGHT} opacity={0.3} />
      <circle cx={115} cy={140} r={12} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'hip-3': () => ( // Butterfly Stretch
    <g>
      <Ground />
      <Head cx={100} cy={65} />
      <line x1={100} y1={77} x2={100} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs in butterfly - knees out, feet together */}
      <line x1={100} y1={130} x2={60} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={60} y1={145} x2={95} y2={175} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={130} x2={140} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={140} y1={145} x2={105} y2={175} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* feet together */}
      <ellipse cx={100} cy={178} rx={10} ry={5} fill={SKIN_DARK} />
      {/* hands on feet */}
      <line x1={92} y1={100} x2={85} y2={170} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={108} y1={100} x2={115} y2={170} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* hip/groin highlight */}
      <ellipse cx={100} cy={140} rx={20} ry={10} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'hip-4': () => ( // Lizard Pose
    <g>
      <Ground />
      <Head cx={55} cy={100} />
      {/* torso angled down */}
      <line x1={55} y1={112} x2={90} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg in deep lunge */}
      <line x1={90} y1={145} x2={65} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={65} y1={145} x2={55} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg extended */}
      <line x1={90} y1={145} x2={150} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={150} y1={165} x2={170} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms/hands on floor inside front foot */}
      <line x1={60} y1={115} x2={40} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={65} y1={115} x2={55} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={90} cy={145} r={14} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'hip-5': () => ( // Hip Flexor Lunge
    <g>
      <Ground />
      <Head cx={90} cy={50} />
      {/* torso upright */}
      <line x1={90} y1={62} x2={90} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg: lunge */}
      <line x1={90} y1={120} x2={65} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={65} y1={150} x2={55} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg: kneeling */}
      <line x1={90} y1={120} x2={130} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={130} y1={155} x2={140} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms on hips */}
      <line x1={85} y1={85} x2={75} y2={115} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={95} y1={85} x2={105} y2={115} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* hip flexor highlight on back leg */}
      <ellipse cx={110} cy={125} rx={15} ry={10} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'hip-6': () => ( // Supine Figure-4
    <g>
      <Ground y={140} />
      {/* lying on back */}
      <Head cx={40} cy={130} />
      <line x1={52} y1={130} x2={110} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* bottom leg: raised thigh pulled toward chest */}
      <line x1={110} y1={130} x2={120} y2={100} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={100} x2={140} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* crossed leg: ankle over knee, figure-4 */}
      <line x1={120} y1={100} x2={150} y2={85} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={150} y1={85} x2={145} y2={105} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hands pulling thigh */}
      <line x1={70} y1={120} x2={115} y2={105} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={85} y1={120} x2={125} y2={105} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={120} cy={100} r={14} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'hip-7': () => ( // Happy Baby Pose
    <g>
      <Ground y={140} />
      <Head cx={100} cy={130} />
      <line x1={100} y1={130} x2={100} y2={118} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* torso lying flat */}
      <line x1={100} y1={118} x2={100} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs up and out, grabbing feet */}
      <line x1={95} y1={115} x2={70} y2={85} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={70} y1={85} x2={60} y2={60} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={105} y1={115} x2={130} y2={85} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={130} y1={85} x2={140} y2={60} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hands grabbing feet */}
      <line x1={85} y1={118} x2={60} y2={60} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={115} y1={118} x2={140} y2={60} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={60} cy={60} r={5} fill={SKIN} stroke={OUTLINE} strokeWidth="1.5" />
      <circle cx={140} cy={60} r={5} fill={SKIN} stroke={OUTLINE} strokeWidth="1.5" />
      <ellipse cx={100} cy={110} rx={18} ry={10} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'hip-8': () => ( // Frog Stretch
    <g>
      <Ground />
      <Head cx={100} cy={100} />
      {/* torso on forearms */}
      <line x1={100} y1={112} x2={100} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms/forearms on ground */}
      <line x1={95} y1={120} x2={70} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={105} y1={120} x2={130} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* legs wide, knees bent - frog position */}
      <line x1={95} y1={150} x2={50} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={50} y1={155} x2={35} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={105} y1={150} x2={150} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={150} y1={155} x2={165} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx={100} cy={155} rx={25} ry={12} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'hip-9': () => ( // Standing Hip Circle
    <g>
      <Ground />
      <Head cx={90} cy={40} />
      <line x1={90} y1={52} x2={90} y2={110} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* standing leg */}
      <line x1={90} y1={110} x2={90} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={90} y1={150} x2={90} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* raised leg making circle */}
      <line x1={90} y1={110} x2={130} y2={100} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={130} y1={100} x2={140} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* circular arrow showing rotation */}
      <path d="M 120 80 A 25 25 0 1 1 145 110" fill="none" stroke={HIGHLIGHT} strokeWidth="2.5" strokeDasharray="4,3" />
      <polygon points="145,110 150,100 140,102" fill={HIGHLIGHT} />
      {/* arms out for balance */}
      <line x1={82} y1={75} x2={55} y2={85} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={98} y1={75} x2={125} y2={65} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={95} cy={110} r={14} fill={HIGHLIGHT} opacity={0.25} />
    </g>
  ),

  'hip-10': () => ( // Low Lunge Twist
    <g>
      <Ground />
      <Head cx={80} cy={50} />
      {/* torso twisted */}
      <line x1={80} y1={62} x2={90} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg lunge */}
      <line x1={90} y1={120} x2={70} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={70} y1={155} x2={60} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg extended */}
      <line x1={90} y1={120} x2={140} y2={160} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={140} y1={160} x2={155} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* one arm down, one arm up (twist) */}
      <line x1={85} y1={80} x2={70} y2={155} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={85} y1={80} x2={65} y2={35} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* twist arrow */}
      <path d="M 75 70 A 15 15 0 0 1 95 70" fill="none" stroke={HIGHLIGHT} strokeWidth="2" />
      <circle cx={90} cy={120} r={14} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  // ── HAMSTRINGS ───────────────────────────────────

  'ham-1': () => ( // Standing Toe Touch
    <g>
      <Ground />
      <Head cx={95} cy={100} />
      {/* torso folded forward */}
      <line x1={95} y1={112} x2={100} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={120} x2={100} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* torso bent over */}
      <path d="M 100 115 Q 105 140 100 110" fill="none" stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={110} x2={100} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* straight legs */}
      <line x1={100} y1={140} x2={95} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={140} x2={105} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms reaching down */}
      <line x1={92} y1={108} x2={95} y2={178} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={98} y1={108} x2={105} y2={178} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* hamstring highlight */}
      <rect x={88} y={150} width={8} height={28} rx={4} fill={HIGHLIGHT} opacity={0.35} />
      <rect x={100} y={150} width={8} height={28} rx={4} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'ham-2': () => ( // Seated Forward Fold
    <g>
      <Ground />
      <Head cx={65} cy={95} />
      {/* torso folded over legs */}
      <line x1={65} y1={107} x2={90} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs straight on ground */}
      <line x1={90} y1={145} x2={50} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={50} y1={170} x2={35} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms reaching to toes */}
      <line x1={70} y1={105} x2={40} y2={175} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={72} y1={105} x2={42} y2={178} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* hamstring highlight */}
      <rect x={42} y={158} width={30} height={10} rx={5} fill={HIGHLIGHT} opacity={0.35} transform="rotate(-25 57 163)" />
    </g>
  ),

  'ham-3': () => ( // Single Leg Deadlift Stretch
    <g>
      <Ground />
      <Head cx={65} cy={85} />
      {/* torso horizontal */}
      <line x1={65} y1={97} x2={100} y2={105} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* standing leg */}
      <line x1={100} y1={105} x2={100} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={150} x2={100} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg extended up/back */}
      <line x1={100} y1={105} x2={145} y2={90} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={145} y1={90} x2={165} y2={85} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms reaching down */}
      <line x1={70} y1={95} x2={80} y2={150} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={75} y1={95} x2={85} y2={150} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* hamstring highlight on standing leg */}
      <rect x={94} y={115} width={10} height={30} rx={5} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'ham-4': () => ( // Supine Hamstring Stretch
    <g>
      <Ground y={145} />
      <Head cx={40} cy={135} />
      {/* torso lying flat */}
      <line x1={52} y1={135} x2={110} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* flat leg */}
      <line x1={110} y1={135} x2={155} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={155} y1={140} x2={175} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* raised leg straight up */}
      <line x1={110} y1={135} x2={115} y2={70} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={115} y1={70} x2={118} y2={50} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hands holding behind thigh */}
      <line x1={75} y1={125} x2={110} y2={90} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={80} y1={125} x2={115} y2={93} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* hamstring highlight on raised leg */}
      <rect x={108} y={80} width={10} height={40} rx={5} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'ham-5': () => ( // Standing Hamstring on Step
    <g>
      <Ground />
      {/* step/bench */}
      <rect x={40} y={155} width={45} height={28} rx={4} fill="#cbd5e1" stroke={OUTLINE} strokeWidth="1.5" />
      <Head cx={100} cy={55} />
      <line x1={100} y1={67} x2={100} y2={125} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg standing */}
      <line x1={100} y1={125} x2={110} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={110} y1={155} x2={115} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg on step */}
      <line x1={100} y1={125} x2={75} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={75} y1={140} x2={60} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms */}
      <line x1={95} y1={85} x2={80} y2={110} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={105} y1={85} x2={120} y2={110} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={68} y={130} width={10} height={20} rx={5} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'ham-6': () => ( // Downward Dog
    <g>
      <Ground />
      <Head cx={55} cy={115} />
      {/* inverted V - torso angled */}
      <line x1={55} y1={127} x2={100} y2={80} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs down */}
      <line x1={100} y1={80} x2={120} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={130} x2={125} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms to ground */}
      <line x1={58} y1={125} x2={45} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={62} y1={125} x2={55} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* hamstring highlight */}
      <rect x={115} y={135} width={10} height={35} rx={5} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'ham-7': () => ( // Wide Leg Forward Fold
    <g>
      <Ground />
      <Head cx={100} cy={110} />
      {/* torso folded down */}
      <line x1={100} y1={122} x2={100} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs wide apart */}
      <line x1={100} y1={135} x2={55} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={135} x2={145} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms reaching to ground */}
      <line x1={95} y1={120} x2={90} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={105} y1={120} x2={110} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* hamstring highlight on both legs */}
      <rect x={70} y={150} width={10} height={25} rx={5} fill={HIGHLIGHT} opacity={0.35} transform="rotate(20 75 162)" />
      <rect x={120} y={150} width={10} height={25} rx={5} fill={HIGHLIGHT} opacity={0.35} transform="rotate(-20 125 162)" />
    </g>
  ),

  'ham-8': () => ( // Towel Hamstring Stretch
    <g>
      <Ground y={145} />
      <Head cx={40} cy={135} />
      <line x1={52} y1={135} x2={110} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* flat leg */}
      <line x1={110} y1={135} x2={160} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* raised leg */}
      <line x1={110} y1={135} x2={120} y2={75} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={75} x2={125} y2={55} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* towel around foot */}
      <path d="M 125 55 Q 135 50 128 58" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      {/* hands pulling towel */}
      <line x1={70} y1={125} x2={128} y2={58} stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5,3" />
      <line x1={80} y1={125} x2={130} y2={55} stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5,3" />
      <rect x={114} y={75} width={10} height={40} rx={5} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'ham-9': () => ( // Pyramid Pose
    <g>
      <Ground />
      <Head cx={70} cy={80} />
      {/* torso folded over front leg */}
      <line x1={70} y1={92} x2={90} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg */}
      <line x1={90} y1={130} x2={80} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg */}
      <line x1={90} y1={130} x2={130} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms alongside front leg */}
      <line x1={72} y1={90} x2={75} y2={170} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={76} y1={90} x2={82} y2={170} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={74} y={140} width={10} height={30} rx={5} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'ham-10': () => ( // Wall Hamstring Stretch
    <g>
      {/* Wall */}
      <rect x={155} y={20} width={12} height={170} rx={2} fill="#cbd5e1" stroke={OUTLINE} strokeWidth="1" />
      <Ground />
      <Head cx={90} cy={130} />
      <line x1={102} y1={130} x2={130} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* flat leg */}
      <line x1={130} y1={130} x2={80} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={80} y1={150} x2={50} y2={160} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* leg up wall */}
      <line x1={130} y1={130} x2={150} y2={80} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={150} y1={80} x2={155} y2={40} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <rect x={144} y={60} width={10} height={45} rx={5} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  // ── QUADS ────────────────────────────────────────

  'quad-1': () => ( // Standing Quad Stretch
    <g>
      <Ground />
      <Head cx={90} cy={35} />
      <line x1={90} y1={47} x2={90} y2={110} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* standing leg */}
      <line x1={90} y1={110} x2={90} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={90} y1={150} x2={90} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* bent leg pulled behind - heel to glute */}
      <line x1={90} y1={110} x2={110} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={110} y1={140} x2={105} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hand grabbing ankle */}
      <line x1={97} y1={80} x2={108} y2={115} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* other arm out for balance */}
      <line x1={83} y1={80} x2={60} y2={75} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* quad highlight */}
      <rect x={96} y={115} width={12} height={25} rx={6} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'quad-2': () => ( // Kneeling Quad Stretch
    <g>
      <Ground />
      <Head cx={85} cy={45} />
      <line x1={85} y1={57} x2={85} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* kneeling leg */}
      <line x1={85} y1={115} x2={105} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={105} y1={155} x2={115} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg up in lunge */}
      <line x1={85} y1={115} x2={60} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={60} y1={150} x2={55} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hand reaching back to grab foot */}
      <line x1={92} y1={75} x2={118} y2={155} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={78} y1={75} x2={65} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* quad highlight on back leg */}
      <rect x={90} y={120} width={12} height={30} rx={6} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'quad-3': () => ( // Prone Quad Stretch
    <g>
      <Ground y={155} />
      {/* lying face down */}
      <Head cx={40} cy={145} />
      <line x1={52} y1={147} x2={120} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* flat leg */}
      <line x1={120} y1={150} x2={170} y2={152} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* bent leg, heel toward glute */}
      <line x1={120} y1={150} x2={140} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={140} y1={145} x2={130} y2={110} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hand reaching to grab ankle */}
      <line x1={80} y1={140} x2={130} y2={110} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={128} y={118} width={12} height={28} rx={6} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'quad-4': () => ( // Side-Lying Quad Stretch
    <g>
      <Ground y={160} />
      <Head cx={40} cy={120} />
      <line x1={52} y1={122} x2={100} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* bottom leg straight */}
      <line x1={100} y1={130} x2={140} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* top leg bent back, heel to glute */}
      <line x1={100} y1={125} x2={120} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={120} x2={110} y2={100} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hand grabbing top ankle */}
      <line x1={80} y1={115} x2={110} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={108} y={102} width={12} height={22} rx={6} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'quad-5': () => ( // Couch Stretch
    <g>
      <Ground />
      {/* Wall/couch */}
      <rect x={148} y={100} width={15} height={85} rx={3} fill="#cbd5e1" stroke={OUTLINE} strokeWidth="1.5" />
      <Head cx={90} cy={40} />
      <line x1={90} y1={52} x2={95} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg in lunge */}
      <line x1={95} y1={115} x2={70} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={70} y1={150} x2={60} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg up against couch/wall */}
      <line x1={95} y1={115} x2={125} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={125} y1={150} x2={148} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={85} y1={70} x2={75} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={98} y1={70} x2={110} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={105} y={118} width={14} height={30} rx={7} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'quad-6': () => ( // Reclined Hero Pose
    <g>
      <Ground />
      <Head cx={65} cy={120} />
      {/* torso leaning back */}
      <line x1={70} y1={130} x2={100} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs folded under - kneeling/hero */}
      <line x1={100} y1={155} x2={120} y2={175} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={175} x2={105} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={155} x2={130} y2={175} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={130} y1={175} x2={115} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms behind for support */}
      <line x1={68} y1={128} x2={55} y2={175} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={72} y1={128} x2={65} y2={175} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={105} y={155} width={12} height={22} rx={6} fill={HIGHLIGHT} opacity={0.35} />
      <rect x={118} y={155} width={12} height={22} rx={6} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'quad-7': () => ( // Walking Quad Pull
    <g>
      <Ground />
      <Head cx={90} cy={35} />
      <line x1={90} y1={47} x2={90} y2={110} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* walking: one leg forward */}
      <line x1={90} y1={110} x2={70} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={70} y1={150} x2={65} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* other leg: heel pulled to glute */}
      <line x1={90} y1={110} x2={110} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={110} y1={135} x2={105} y2={110} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hand pulling */}
      <line x1={97} y1={75} x2={108} y2={112} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={83} y1={75} x2={70} y2={90} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* motion arrows */}
      <path d="M 55 178 L 45 178" fill="none" stroke={GROUND} strokeWidth="2" />
      <polygon points="45,178 50,174 50,182" fill={GROUND} />
      <rect x={98} y={112} width={12} height={24} rx={6} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'quad-8': () => ( // Low Lunge Quad Focus
    <g>
      <Ground />
      <Head cx={85} cy={45} />
      <line x1={85} y1={57} x2={90} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg deep lunge */}
      <line x1={90} y1={120} x2={65} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={65} y1={155} x2={55} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg: knee down, foot pulled to glute */}
      <line x1={90} y1={120} x2={125} y2={160} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={125} y1={160} x2={115} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hand reaching back */}
      <line x1={92} y1={75} x2={118} y2={130} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={78} y1={75} x2={65} y2={95} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={108} y={130} width={14} height={28} rx={7} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'quad-9': () => ( // Wall Quad Stretch
    <g>
      <Ground />
      {/* wall behind */}
      <rect x={145} y={40} width={12} height={145} rx={2} fill="#cbd5e1" stroke={OUTLINE} strokeWidth="1" />
      <Head cx={85} cy={40} />
      <line x1={85} y1={52} x2={90} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg bent */}
      <line x1={90} y1={115} x2={70} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={70} y1={150} x2={65} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back foot on wall */}
      <line x1={90} y1={115} x2={120} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={140} x2={145} y2={100} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={80} y1={70} x2={70} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={95} y1={70} x2={105} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={100} y={115} width={14} height={28} rx={7} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'quad-10': () => ( // TFL / Quad Foam Roll
    <g>
      <Ground />
      {/* foam roller */}
      <ellipse cx={100} cy={165} rx={20} ry={10} fill="#a78bfa" stroke={OUTLINE} strokeWidth="1.5" />
      <Head cx={55} cy={115} />
      {/* body face down, propped on elbows */}
      <line x1={55} y1={127} x2={100} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs over roller */}
      <line x1={100} y1={155} x2={140} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={140} y1={165} x2={170} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* forearms on ground */}
      <line x1={58} y1={125} x2={40} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={62} y1={125} x2={52} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={100} y={148} width={35} height={10} rx={5} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  // ── GLUTES ───────────────────────────────────────

  'glute-1': () => ( // Seated Glute Stretch
    <g>
      {/* chair */}
      <rect x={75} y={120} width={55} height={5} rx={2} fill="#cbd5e1" stroke={OUTLINE} strokeWidth="1" />
      <line x1={80} y1={125} x2={80} y2={183} stroke={OUTLINE} strokeWidth="2" />
      <line x1={125} y1={125} x2={125} y2={183} stroke={OUTLINE} strokeWidth="2" />
      <Ground />
      <Head cx={100} cy={60} />
      <line x1={100} y1={72} x2={100} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* one leg normal */}
      <line x1={95} y1={120} x2={85} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={85} y1={155} x2={85} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* crossed leg (ankle over knee) */}
      <line x1={105} y1={120} x2={115} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={115} y1={135} x2={90} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* leaning forward slightly */}
      <circle cx={110} cy={125} r={12} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'glute-2': () => ( // Supine Glute Stretch
    <g>
      <Ground y={145} />
      <Head cx={40} cy={135} />
      <line x1={52} y1={135} x2={110} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* bottom leg angled up */}
      <line x1={110} y1={135} x2={120} y2={100} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={100} x2={135} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* crossed ankle */}
      <line x1={120} y1={100} x2={145} y2={90} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hands pulling */}
      <line x1={70} y1={125} x2={115} y2={105} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={118} cy={105} r={14} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'glute-3': () => ( // Pigeon Pose (Glute Focus)
    <g>
      <Ground />
      <Head cx={65} cy={90} />
      <line x1={65} y1={102} x2={85} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg bent on ground */}
      <line x1={85} y1={150} x2={55} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={55} y1={170} x2={40} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg straight */}
      <line x1={85} y1={150} x2={145} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={145} y1={170} x2={170} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms forward */}
      <line x1={68} y1={100} x2={35} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={72} y1={100} x2={48} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* glute highlight on front leg side */}
      <circle cx={75} cy={155} r={14} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'glute-4': () => ( // Knee to Chest
    <g>
      <Ground y={145} />
      <Head cx={40} cy={135} />
      <line x1={52} y1={135} x2={110} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* one leg flat */}
      <line x1={110} y1={135} x2={160} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* knee pulled to chest */}
      <line x1={110} y1={135} x2={95} y2={105} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={95} y1={105} x2={85} y2={125} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms hugging knee */}
      <line x1={70} y1={125} x2={90} y2={108} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={80} y1={130} x2={95} y2={112} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={105} cy={120} r={12} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'glute-5': () => ( // Cross-Body Glute Stretch
    <g>
      <Ground y={145} />
      <Head cx={40} cy={135} />
      <line x1={52} y1={135} x2={110} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* crossed legs pulled to opposite shoulder */}
      <line x1={110} y1={135} x2={100} y2={105} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={105} x2={75} y2={100} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={110} y1={135} x2={130} y2={110} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hands pulling */}
      <line x1={65} y1={125} x2={90} y2={105} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={110} cy={125} r={14} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'glute-6': () => ( // Standing Figure-4
    <g>
      <Ground />
      <Head cx={95} cy={40} />
      <line x1={95} y1={52} x2={95} y2={110} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* standing leg bent (sitting back) */}
      <line x1={95} y1={110} x2={90} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={90} y1={150} x2={90} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* crossed leg: figure-4 */}
      <line x1={95} y1={110} x2={120} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={120} x2={110} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms forward for balance */}
      <line x1={88} y1={78} x2={65} y2={85} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={102} y1={78} x2={120} y2={85} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={105} cy={115} r={14} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'glute-7': () => ( // Spinal Twist
    <g>
      <Ground y={150} />
      <Head cx={55} cy={140} />
      <line x1={67} y1={140} x2={110} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs crossed and dropped to one side */}
      <line x1={110} y1={140} x2={100} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={115} x2={85} y2={105} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={110} y1={140} x2={95} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms out T position */}
      <line x1={80} y1={135} x2={40} y2={130} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={80} y1={135} x2={140} y2={130} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* twist arrow */}
      <path d="M 105 130 A 10 10 0 0 0 105 150" fill="none" stroke={HIGHLIGHT} strokeWidth="2.5" />
      <circle cx={110} cy={135} r={12} fill={HIGHLIGHT} opacity={0.25} />
    </g>
  ),

  'glute-8': () => ( // Glute Foam Roll
    <g>
      <Ground />
      {/* foam roller */}
      <ellipse cx={100} cy={150} rx={22} ry={10} fill="#a78bfa" stroke={OUTLINE} strokeWidth="1.5" />
      <Head cx={60} cy={100} />
      <line x1={65} y1={112} x2={95} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* crossed leg */}
      <line x1={95} y1={145} x2={80} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={80} y1={130} x2={70} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* leg on roller */}
      <line x1={95} y1={145} x2={125} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={125} y1={155} x2={150} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms behind for support */}
      <line x1={63} y1={108} x2={48} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={95} cy={145} r={14} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'glute-9': () => ( // Half Lord of the Fishes
    <g>
      <Ground />
      <Head cx={100} cy={55} />
      <line x1={100} y1={67} x2={100} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* extended leg */}
      <line x1={100} y1={130} x2={60} y2={160} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={60} y1={160} x2={40} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* crossed bent leg */}
      <line x1={100} y1={130} x2={85} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={85} y1={150} x2={80} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* twisted torso, elbow on knee */}
      <line x1={93} y1={85} x2={80} y2={130} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={107} y1={85} x2={130} y2={75} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={100} cy={130} r={13} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'glute-10': () => ( // Child's Pose with Wide Knees
    <g>
      <Ground />
      <Head cx={55} cy={145} />
      {/* torso down */}
      <line x1={60} y1={152} x2={100} y2={160} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs folded under, knees wide */}
      <line x1={100} y1={160} x2={70} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={70} y1={170} x2={75} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={160} x2={130} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={130} y1={170} x2={125} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms extended forward */}
      <line x1={58} y1={148} x2={30} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={60} y1={148} x2={40} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx={100} cy={160} r={14} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  // ── CALVES ───────────────────────────────────────

  'calf-1': () => ( // Wall Calf Stretch
    <g>
      <Ground />
      {/* wall */}
      <rect x={30} y={40} width={12} height={145} rx={2} fill="#cbd5e1" stroke={OUTLINE} strokeWidth="1" />
      <Head cx={65} cy={45} />
      <line x1={65} y1={57} x2={80} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg bent */}
      <line x1={80} y1={120} x2={65} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={65} y1={155} x2={55} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg straight, heel down */}
      <line x1={80} y1={120} x2={120} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={145} x2={135} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hands on wall */}
      <line x1={60} y1={75} x2={42} y2={80} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={62} y1={75} x2={42} y2={95} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* calf highlight */}
      <rect x={122} y={155} width={10} height={25} rx={5} fill={HIGHLIGHT} opacity={0.4} />
    </g>
  ),

  'calf-2': () => ( // Step Drop Stretch
    <g>
      {/* step */}
      <rect x={60} y={140} width={80} height={15} rx={3} fill="#cbd5e1" stroke={OUTLINE} strokeWidth="1.5" />
      <rect x={65} y={155} width={70} height={30} rx={3} fill="#e2e8f0" stroke={OUTLINE} strokeWidth="1" />
      <Head cx={100} cy={45} />
      <line x1={100} y1={57} x2={100} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs on step, heels dropping */}
      <line x1={95} y1={115} x2={90} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={90} y1={140} x2={85} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={105} y1={115} x2={110} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={110} y1={140} x2={115} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* downward arrows showing heel drop */}
      <line x1={85} y1={168} x2={85} y2={183} stroke={HIGHLIGHT} strokeWidth="2.5" />
      <polygon points="85,183 80,177 90,177" fill={HIGHLIGHT} />
      <line x1={115} y1={168} x2={115} y2={183} stroke={HIGHLIGHT} strokeWidth="2.5" />
      <polygon points="115,183 110,177 120,177" fill={HIGHLIGHT} />
      <rect x={80} y={145} width={10} height={20} rx={5} fill={HIGHLIGHT} opacity={0.35} />
      <rect x={108} y={145} width={10} height={20} rx={5} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'calf-3': () => ( // Seated Calf Stretch
    <g>
      <Ground />
      <Head cx={95} cy={65} />
      <line x1={95} y1={77} x2={100} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* leg extended */}
      <line x1={100} y1={130} x2={65} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={65} y1={155} x2={40} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* towel around foot */}
      <path d="M 40 170 Q 35 165 40 160" fill="none" stroke="#f59e0b" strokeWidth="3" />
      <line x1={80} y1={100} x2={40} y2={162} stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5,3" />
      <line x1={85} y1={100} x2={42} y2={165} stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5,3" />
      <rect x={45} y={155} width={18} height={10} rx={5} fill={HIGHLIGHT} opacity={0.4} />
    </g>
  ),

  'calf-4': () => ( // Downward Dog Pedal
    <g>
      <Ground />
      <Head cx={50} cy={115} />
      {/* inverted V */}
      <line x1={50} y1={127} x2={100} y2={80} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs - one heel down, one up */}
      <line x1={100} y1={80} x2={115} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={115} y1={130} x2={120} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={80} x2={125} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={125} y1={130} x2={135} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms to ground */}
      <line x1={53} y1={125} x2={40} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={56} y1={125} x2={50} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* pedal arrows */}
      <path d="M 128 165 L 128 175" fill="none" stroke={HIGHLIGHT} strokeWidth="2.5" />
      <polygon points="128,175 123,169 133,169" fill={HIGHLIGHT} />
      <rect x={113} y={155} width={10} height={22} rx={5} fill={HIGHLIGHT} opacity={0.35} />
      <rect x={128} y={148} width={10} height={22} rx={5} fill={HIGHLIGHT} opacity={0.35} />
    </g>
  ),

  'calf-5': () => ( // Standing Soleus Stretch
    <g>
      <Ground />
      {/* wall */}
      <rect x={30} y={40} width={12} height={145} rx={2} fill="#cbd5e1" stroke={OUTLINE} strokeWidth="1" />
      <Head cx={65} cy={50} />
      <line x1={65} y1={62} x2={75} y2={125} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg bent */}
      <line x1={75} y1={125} x2={60} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={60} y1={155} x2={55} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg ALSO bent slightly (soleus) */}
      <line x1={75} y1={125} x2={110} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={110} y1={150} x2={120} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hands on wall */}
      <line x1={58} y1={80} x2={42} y2={85} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={60} y1={80} x2={42} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* lower calf (soleus) highlight */}
      <rect x={112} y={158} width={10} height={22} rx={5} fill={HIGHLIGHT} opacity={0.4} />
      <text x={135} y={170} fontSize="10" fill={HIGHLIGHT} fontWeight="bold">soleus</text>
    </g>
  ),

  'calf-6': () => ( // Ankle Circles
    <g>
      <Ground />
      <Head cx={90} cy={40} />
      <line x1={90} y1={52} x2={90} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* standing leg */}
      <line x1={90} y1={115} x2={90} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* raised foot */}
      <line x1={90} y1={115} x2={120} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={135} x2={130} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* circular motion at ankle */}
      <circle cx={130} cy={155} r={18} fill="none" stroke={HIGHLIGHT} strokeWidth="2.5" strokeDasharray="5,3" />
      <polygon points="148,155 142,150 142,160" fill={HIGHLIGHT} />
      <line x1={82} y1={78} x2={65} y2={85} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={98} y1={78} x2={115} y2={85} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),

  'calf-7': () => ( // Toe Walk Stretch
    <g>
      <Ground />
      <Head cx={85} cy={30} />
      <line x1={85} y1={42} x2={85} y2={105} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs on tiptoes */}
      <line x1={82} y1={105} x2={78} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={78} y1={155} x2={78} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={78} y1={170} x2={75} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={88} y1={105} x2={92} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={92} y1={155} x2={92} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={92} y1={170} x2={95} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* raised heels indicator */}
      <line x1={78} y1={170} x2={78} y2={183} stroke={HIGHLIGHT} strokeWidth="2" strokeDasharray="3,2" />
      <line x1={92} y1={170} x2={92} y2={183} stroke={HIGHLIGHT} strokeWidth="2" strokeDasharray="3,2" />
      {/* motion arrow */}
      <path d="M 110 178 L 120 178" fill="none" stroke={GROUND} strokeWidth="2" />
      <polygon points="120,178 115,174 115,182" fill={GROUND} />
      <rect x={72} y={155} width={8} height={18} rx={4} fill={HIGHLIGHT} opacity={0.4} />
      <rect x={90} y={155} width={8} height={18} rx={4} fill={HIGHLIGHT} opacity={0.4} />
    </g>
  ),

  'calf-8': () => ( // Calf Foam Roll
    <g>
      <Ground />
      {/* foam roller */}
      <ellipse cx={110} cy={155} rx={18} ry={10} fill="#a78bfa" stroke={OUTLINE} strokeWidth="1.5" />
      <Head cx={55} cy={100} />
      {/* sitting up, hands behind */}
      <line x1={60} y1={112} x2={90} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs on roller */}
      <line x1={90} y1={145} x2={110} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={110} y1={150} x2={145} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* crossed leg on top */}
      <line x1={90} y1={140} x2={115} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms behind */}
      <line x1={58} y1={110} x2={40} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={62} y1={110} x2={50} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={98} y={148} width={25} height={8} rx={4} fill={HIGHLIGHT} opacity={0.4} />
    </g>
  ),

  'calf-9': () => ( // Runner's Calf Stretch
    <g>
      <Ground />
      <Head cx={80} cy={42} />
      <line x1={80} y1={54} x2={85} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* front leg in mini lunge */}
      <line x1={85} y1={120} x2={70} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={70} y1={155} x2={60} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* back leg straight, heel pressed */}
      <line x1={85} y1={120} x2={125} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={125} y1={145} x2={140} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms */}
      <line x1={73} y1={75} x2={60} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={87} y1={75} x2={100} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* heel press indicator */}
      <line x1={140} y1={183} x2={140} y2={178} stroke={HIGHLIGHT} strokeWidth="3" />
      <rect x={127} y={155} width={10} height={25} rx={5} fill={HIGHLIGHT} opacity={0.4} />
    </g>
  ),

  'calf-10': () => ( // Heel Sit Stretch
    <g>
      <Ground />
      <Head cx={100} cy={60} />
      <line x1={100} y1={72} x2={100} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* kneeling, sitting on heels with toes tucked */}
      <line x1={95} y1={130} x2={85} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={85} y1={165} x2={80} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={105} y1={130} x2={115} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={115} y1={165} x2={120} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* toes tucked indicator */}
      <path d="M 80 183 Q 78 178 82 175" fill="none" stroke={HIGHLIGHT} strokeWidth="2.5" />
      <path d="M 120 183 Q 122 178 118 175" fill="none" stroke={HIGHLIGHT} strokeWidth="2.5" />
      <line x1={92} y1={90} x2={80} y2={115} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={108} y1={90} x2={120} y2={115} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <rect x={78} y={165} width={10} height={15} rx={5} fill={HIGHLIGHT} opacity={0.4} />
      <rect x={112} y={165} width={10} height={15} rx={5} fill={HIGHLIGHT} opacity={0.4} />
    </g>
  ),

  // ── LOWER BACK ───────────────────────────────────

  'lb-1': () => ( // Cat-Cow Stretch
    <g>
      <Ground />
      <Head cx={55} cy={105} />
      {/* on all fours - arched back (cow) */}
      <path d="M 60 115 Q 100 95 140 115" fill="none" stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms */}
      <line x1={65} y1={118} x2={55} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={70} y1={118} x2={65} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* legs */}
      <line x1={135} y1={118} x2={140} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={140} y1={118} x2={150} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* spine highlight */}
      <path d="M 70 112 Q 100 92 130 112" fill="none" stroke={HIGHLIGHT} strokeWidth="6" opacity={0.3} strokeLinecap="round" />
      {/* up/down arrows */}
      <line x1={100} y1={88} x2={100} y2={78} stroke={HIGHLIGHT} strokeWidth="2" />
      <polygon points="100,78 96,84 104,84" fill={HIGHLIGHT} />
      <line x1={100} y1={98} x2={100} y2={108} stroke={HIGHLIGHT} strokeWidth="2" />
      <polygon points="100,108 96,102 104,102" fill={HIGHLIGHT} />
    </g>
  ),

  'lb-2': () => ( // Child's Pose
    <g>
      <Ground />
      <Head cx={50} cy={145} />
      <line x1={55} y1={152} x2={100} y2={160} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs folded */}
      <line x1={100} y1={160} x2={120} y2={175} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={175} x2={115} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms extended */}
      <line x1={53} y1={148} x2={25} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={55} y1={148} x2={35} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* lower back highlight */}
      <ellipse cx={85} cy={158} rx={18} ry={8} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'lb-3': () => ( // Knees to Chest
    <g>
      <Ground y={145} />
      <Head cx={45} cy={135} />
      <line x1={57} y1={135} x2={100} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* both knees pulled to chest */}
      <line x1={100} y1={135} x2={90} y2={105} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={90} y1={105} x2={80} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={135} x2={95} y2={100} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={95} y1={100} x2={85} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms hugging */}
      <line x1={65} y1={125} x2={88} y2={108} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={70} y1={128} x2={92} y2={105} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx={95} cy={130} rx={15} ry={8} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'lb-4': () => ( // Supine Twist
    <g>
      <Ground y={150} />
      <Head cx={50} cy={140} />
      <line x1={62} y1={140} x2={110} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs dropped to one side */}
      <line x1={110} y1={140} x2={90} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={90} y1={120} x2={75} y2={112} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={110} y1={140} x2={95} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={95} y1={115} x2={80} y2={108} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms T */}
      <line x1={80} y1={135} x2={35} y2={130} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={80} y1={135} x2={145} y2={130} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx={100} cy={135} rx={15} ry={8} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'lb-5': () => ( // Cobra Stretch
    <g>
      <Ground y={165} />
      <Head cx={60} cy={75} />
      {/* torso arching up */}
      <path d="M 60 87 Q 80 100 110 150 Q 120 160 130 163" fill="none" stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs flat */}
      <line x1={130} y1={163} x2={170} y2={163} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms straight, propping up */}
      <line x1={60} y1={90} x2={65} y2={163} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={65} y1={90} x2={75} y2={163} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* lower back highlight */}
      <ellipse cx={105} cy={145} rx={18} ry={10} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'lb-6': () => ( // Pelvic Tilt
    <g>
      <Ground y={148} />
      <Head cx={45} cy={138} />
      <line x1={57} y1={138} x2={100} y2={138} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* knees bent, feet flat */}
      <line x1={100} y1={138} x2={120} y2={110} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={110} x2={130} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={138} x2={125} y2={110} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={125} y1={110} x2={140} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arrow showing tilt */}
      <path d="M 95 142 L 95 132" fill="none" stroke={HIGHLIGHT} strokeWidth="2.5" />
      <polygon points="95,132 91,137 99,137" fill={HIGHLIGHT} />
      <ellipse cx={95} cy={140} rx={15} ry={6} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'lb-7': () => ( // Seated Spinal Twist
    <g>
      <Ground />
      <Head cx={100} cy={55} />
      <line x1={100} y1={67} x2={100} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* one leg extended */}
      <line x1={100} y1={130} x2={55} y2={160} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={55} y1={160} x2={35} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* crossed bent leg */}
      <line x1={100} y1={130} x2={85} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={85} y1={155} x2={75} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* twisted - elbow to knee, other arm back */}
      <line x1={93} y1={85} x2={78} y2={135} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={107} y1={85} x2={130} y2={95} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* twist arrow */}
      <path d="M 108 100 A 12 12 0 0 1 92 100" fill="none" stroke={HIGHLIGHT} strokeWidth="2.5" />
      <polygon points="92,100 97,95 97,105" fill={HIGHLIGHT} />
      <ellipse cx={100} cy={115} rx={10} ry={18} fill={HIGHLIGHT} opacity={0.2} />
    </g>
  ),

  'lb-8': () => ( // Standing Back Extension
    <g>
      <Ground />
      <Head cx={100} cy={35} />
      {/* torso leaning back */}
      <path d="M 100 47 Q 95 80 100 120" fill="none" stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs straight */}
      <line x1={95} y1={120} x2={90} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={105} y1={120} x2={110} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* hands on lower back */}
      <line x1={93} y1={65} x2={90} y2={105} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={107} y1={65} x2={110} y2={105} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* back extension arrow */}
      <path d="M 88 85 Q 82 80 85 70" fill="none" stroke={HIGHLIGHT} strokeWidth="2.5" />
      <polygon points="85,70 80,77 88,77" fill={HIGHLIGHT} />
      <ellipse cx={98} cy={105} rx={10} ry={15} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'lb-9': () => ( // Thread the Needle
    <g>
      <Ground />
      <Head cx={60} cy={140} />
      {/* on all fours, shoulder dropped */}
      <line x1={65} y1={148} x2={100} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* one arm threaded under */}
      <line x1={65} y1={145} x2={130} y2={160} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* other arm up */}
      <line x1={95} y1={125} x2={110} y2={90} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* legs */}
      <line x1={100} y1={130} x2={120} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={120} y1={165} x2={125} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={130} x2={130} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={130} y1={165} x2={135} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx={85} cy={138} rx={15} ry={8} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  'lb-10': () => ( // Sphinx Pose
    <g>
      <Ground y={165} />
      <Head cx={55} cy={95} />
      {/* torso propped on forearms */}
      <path d="M 55 107 Q 80 120 110 150 Q 125 160 140 163" fill="none" stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs flat */}
      <line x1={140} y1={163} x2={175} y2={163} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* forearms flat on ground */}
      <line x1={55} y1={110} x2={55} y2={163} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={60} y1={110} x2={75} y2={163} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx={115} cy={148} rx={18} ry={8} fill={HIGHLIGHT} opacity={0.3} />
    </g>
  ),

  // ── GROIN / INNER THIGH ──────────────────────────

  'groin-1': () => ( // Butterfly Stretch
    <g>
      <Ground />
      <Head cx={100} cy={65} />
      <line x1={100} y1={77} x2={100} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* butterfly legs */}
      <line x1={100} y1={130} x2={55} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={55} y1={145} x2={95} y2={175} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={130} x2={145} y2={145} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={145} y1={145} x2={105} y2={175} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx={100} cy={178} rx={10} ry={5} fill={SKIN_DARK} />
      <line x1={92} y1={100} x2={85} y2={170} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={108} y1={100} x2={115} y2={170} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* inner thigh highlight */}
      <line x1={80} y1={138} x2={95} y2={165} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.25} strokeLinecap="round" />
      <line x1={120} y1={138} x2={105} y2={165} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.25} strokeLinecap="round" />
    </g>
  ),

  'groin-2': () => ( // Wide Squat (Malasana)
    <g>
      <Ground />
      <Head cx={100} cy={55} />
      <line x1={100} y1={67} x2={100} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* deep squat, wide stance */}
      <line x1={100} y1={120} x2={60} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={60} y1={135} x2={55} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={120} x2={140} y2={135} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={140} y1={135} x2={145} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* elbows pressing knees */}
      <line x1={93} y1={90} x2={65} y2={130} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={107} y1={90} x2={135} y2={130} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={60} y1={128} x2={70} y2={138} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
      <line x1={140} y1={128} x2={130} y2={138} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
    </g>
  ),

  'groin-3': () => ( // Side Lunge Stretch
    <g>
      <Ground />
      <Head cx={70} cy={50} />
      <line x1={70} y1={62} x2={75} y2={125} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* bent leg side lunge */}
      <line x1={75} y1={125} x2={55} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={55} y1={155} x2={50} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* straight leg with inner thigh stretch */}
      <line x1={75} y1={125} x2={140} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={140} y1={165} x2={160} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={65} y1={80} x2={50} y2={110} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={82} y1={80} x2={95} y2={110} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* inner thigh highlight on straight leg */}
      <line x1={95} y1={135} x2={135} y2={160} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
    </g>
  ),

  'groin-4': () => ( // Frog Stretch
    <g>
      <Ground />
      <Head cx={100} cy={100} />
      <line x1={100} y1={112} x2={100} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* forearms */}
      <line x1={95} y1={120} x2={70} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={105} y1={120} x2={130} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* legs wide frog */}
      <line x1={95} y1={150} x2={45} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={45} y1={155} x2={30} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={105} y1={150} x2={155} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={155} y1={155} x2={170} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={55} y1={145} x2={85} y2={155} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
      <line x1={145} y1={145} x2={115} y2={155} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
    </g>
  ),

  'groin-5': () => ( // Standing Adductor Stretch
    <g>
      <Ground />
      <Head cx={75} cy={40} />
      <line x1={75} y1={52} x2={80} y2={115} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* bent side */}
      <line x1={80} y1={115} x2={55} y2={150} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={55} y1={150} x2={50} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* straight side */}
      <line x1={80} y1={115} x2={135} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={135} y1={155} x2={155} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={68} y1={70} x2={55} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={82} y1={70} x2={95} y2={100} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={100} y1={125} x2={130} y2={150} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
    </g>
  ),

  'groin-6': () => ( // Supine Groin Stretch
    <g>
      <Ground y={150} />
      <Head cx={45} cy={140} />
      <line x1={57} y1={140} x2={105} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* butterfly legs while lying */}
      <line x1={105} y1={140} x2={85} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={85} y1={120} x2={105} y2={105} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={105} y1={140} x2={125} y2={120} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={125} y1={120} x2={105} y2={105} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={80} y1={130} x2={88} y2={125} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={80} y1={130} x2={122} y2={125} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={90} y1={125} x2={105} y2={110} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
      <line x1={120} y1={125} x2={105} y2={110} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
    </g>
  ),

  'groin-7': () => ( // Cossack Squat
    <g>
      <Ground />
      <Head cx={65} cy={55} />
      <line x1={65} y1={67} x2={70} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* deep side squat leg */}
      <line x1={70} y1={130} x2={55} y2={160} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={55} y1={160} x2={50} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* straight leg out, toes up */}
      <line x1={70} y1={130} x2={140} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={140} y1={170} x2={155} y2={167} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* toe pointing up */}
      <line x1={155} y1={167} x2={158} y2={160} stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round" />
      <line x1={58} y1={85} x2={45} y2={115} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={72} y1={85} x2={85} y2={115} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={95} y1={140} x2={135} y2={165} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
    </g>
  ),

  'groin-8': () => ( // Seated Straddle Stretch
    <g>
      <Ground />
      <Head cx={100} cy={90} />
      {/* torso leaning forward */}
      <line x1={100} y1={102} x2={100} y2={140} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs in wide V */}
      <line x1={100} y1={140} x2={40} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={100} y1={140} x2={160} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms reaching forward */}
      <line x1={95} y1={100} x2={85} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={105} y1={100} x2={115} y2={183} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={70} y1={148} x2={92} y2={145} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
      <line x1={130} y1={148} x2={108} y2={145} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
    </g>
  ),

  'groin-9': () => ( // Half Kneeling Adductor Stretch
    <g>
      <Ground />
      <Head cx={100} cy={50} />
      <line x1={100} y1={62} x2={100} y2={125} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* kneeling leg */}
      <line x1={100} y1={125} x2={85} y2={160} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={85} y1={160} x2={80} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* extended leg to side */}
      <line x1={100} y1={125} x2={155} y2={165} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={155} y1={165} x2={170} y2={183} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={93} y1={80} x2={80} y2={110} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={107} y1={80} x2={120} y2={110} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={120} y1={135} x2={150} y2={160} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
    </g>
  ),

  'groin-10': () => ( // Wall Straddle
    <g>
      {/* wall */}
      <rect x={155} y={20} width={12} height={170} rx={2} fill="#cbd5e1" stroke={OUTLINE} strokeWidth="1" />
      <Ground y={175} />
      <Head cx={90} cy={155} />
      <line x1={100} y1={155} x2={135} y2={155} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* legs up the wall, spread in V */}
      <line x1={135} y1={155} x2={152} y2={100} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={152} y1={100} x2={155} y2={60} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={135} y1={155} x2={152} y2={130} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <line x1={152} y1={130} x2={155} y2={170} stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      {/* arms at sides */}
      <line x1={100} y1={150} x2={70} y2={155} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <line x1={100} y1={160} x2={70} y2={165} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* inner thigh highlight */}
      <line x1={145} y1={110} x2={148} y2={140} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
      <line x1={148} y1={140} x2={145} y2={160} stroke={HIGHLIGHT} strokeWidth="8" opacity={0.3} strokeLinecap="round" />
    </g>
  ),
};

export function StretchIllustration({ stretchId, className = '' }: Props) {
  const render = illustrations[stretchId];

  if (!render) {
    return (
      <div className={`flex items-center justify-center w-48 h-48 rounded-2xl bg-slate-100 dark:bg-slate-800 ${className}`}>
        <span className="text-6xl">🧘</span>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-48 h-48 ${className}`}
      role="img"
      aria-label="Stretch illustration"
    >
      <rect width="200" height="200" rx="16" className="fill-slate-100 dark:fill-slate-800" />
      {render()}
    </svg>
  );
}
