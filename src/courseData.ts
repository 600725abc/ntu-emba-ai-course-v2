import {
  Bot,
  BookOpen,
  BrainCircuit,
  Code2,
  Globe,
  Image,
  Layers,
  Map,
  MessageSquareCode,
  Mic2,
  MonitorSmartphone,
  Music,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Video,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export type CourseSession = {
  session: number
  year: 2024 | 2025 | 2026
  monthDay: string
  isoDate: string
  title: string
  subtitle: string
  icon: LucideIcon
  featured?: boolean
}

export type CourseYear = {
  year: 2024 | 2025 | 2026
  theme: string
  description: string
}

export const COURSE_YEARS: CourseYear[] = [
  {
    year: 2024,
    theme: 'Foundation',
    description: 'Establishing the AI Landscape / 建立 AI 全景視野與邏輯',
  },
  {
    year: 2025,
    theme: 'Deployment',
    description: 'Personal & Team AI Transformation / 實踐與自動化',
  },
  {
    year: 2026,
    theme: 'Agency',
    description: 'From AI Chat to AI Work Agent / 從聊天工具到工作代理',
  },
]

export const COURSE_SESSIONS: CourseSession[] = [
  {
    session: 1,
    year: 2024,
    monthDay: 'Apr 19',
    isoDate: '2024-04-19',
    title: 'AI 產業趨勢解析與 LLM 對話邏輯',
    subtitle: 'AI Trends & LLM Dialogue Logic',
    icon: Map,
  },
  {
    session: 2,
    year: 2024,
    monthDay: 'May 03',
    isoDate: '2024-05-03',
    title: '跨平台實作：Copilot 與 Claude 提示策略',
    subtitle: 'Mastery: Copilot & Claude Prompting',
    icon: MessageSquareCode,
  },
  {
    session: 3,
    year: 2024,
    monthDay: 'May 17',
    isoDate: '2024-05-17',
    title: 'AI 視覺生成：Adobe Firefly 與關鍵字彙',
    subtitle: 'AI Graphics: Adobe Firefly & Keywords',
    icon: Image,
  },
  {
    session: 4,
    year: 2024,
    monthDay: 'Jun 14',
    isoDate: '2024-06-14',
    title: '前瞻技術：人形機器人與 Luma 影音創作',
    subtitle: 'Tech: Robotics & Video via Luma',
    icon: Video,
  },
  {
    session: 5,
    year: 2024,
    monthDay: 'Jul 05',
    isoDate: '2024-07-05',
    title: 'AI 術語複習、Suno 音樂創作與影音轉檔',
    subtitle: 'Terminology Review, Suno & Media Conversion',
    icon: Music,
  },
  {
    session: 6,
    year: 2024,
    monthDay: 'Aug 02',
    isoDate: '2024-08-02',
    title: '進階指令：媒體合成與 Hedra 虛擬人像說唱',
    subtitle: 'Advanced Prompting: Media & Avatars (Hedra)',
    icon: Mic2,
  },
  {
    session: 7,
    year: 2024,
    monthDay: 'Nov 15',
    isoDate: '2024-11-15',
    title: '指令工程專題（一）：核心邏輯與架構',
    subtitle: 'Prompt Engineering (I): Logic & Structure',
    icon: BrainCircuit,
  },
  {
    session: 8,
    year: 2024,
    monthDay: 'Nov 29',
    isoDate: '2024-11-29',
    title: '指令工程專題（二）：商務情境演練',
    subtitle: 'Prompt Engineering (II): Business Scenarios',
    icon: Layers,
  },
  {
    session: 9,
    year: 2024,
    monthDay: 'Dec 27',
    isoDate: '2024-12-27',
    title: '知識管理革命：Google NotebookLM 整合',
    subtitle: 'Knowledge Management: Google NotebookLM',
    icon: BookOpen,
    featured: true,
  },
  {
    session: 10,
    year: 2025,
    monthDay: 'Feb 21',
    isoDate: '2025-02-21',
    title: '技術實作：Google AI Studio 開發者工具',
    subtitle: 'Execution: Google AI Studio Tools',
    icon: Code2,
  },
  {
    session: 11,
    year: 2025,
    monthDay: 'Mar 21',
    isoDate: '2025-03-21',
    title: '專業繪圖工程：Recraft 結構化提示詞解析',
    subtitle: 'Professional Graphics: Recraft Analysis',
    icon: PenTool,
  },
  {
    session: 12,
    year: 2025,
    monthDay: 'Apr 24',
    isoDate: '2025-04-24',
    title: '資訊檢索戰術：ChatGPT、Gemini 與 Perplexity',
    subtitle: 'Search Strategy: ChatGPT, Gemini & Perplexity',
    icon: Search,
  },
  {
    session: 13,
    year: 2025,
    monthDay: 'May 23',
    isoDate: '2025-05-23',
    title: '私人 AI 助理：Custom GPTs、Gems 與 Canvas',
    subtitle: 'AI Assistants: GPTs, Gems & Canvas',
    icon: Bot,
  },
  {
    session: 14,
    year: 2025,
    monthDay: 'Jul 11',
    isoDate: '2025-07-11',
    title: '互動式網頁與產品開發實務（一）',
    subtitle: 'Interactive Web & App Creation (I)',
    icon: MonitorSmartphone,
  },
  {
    session: 15,
    year: 2025,
    monthDay: 'Aug 22',
    isoDate: '2025-08-22',
    title: 'GPT-5 展望、4o 視覺應用與網頁實作（二）',
    subtitle: 'GPT-5, GPT-4o Vision & Web Apps (II)',
    icon: Zap,
  },
  {
    session: 16,
    year: 2025,
    monthDay: 'Oct 31',
    isoDate: '2025-10-31',
    title: 'AI Agent 時代：自動化工作流與插件部署',
    subtitle: 'The Agent Era: Workflows & Connectors',
    icon: Workflow,
  },
  {
    session: 17,
    year: 2025,
    monthDay: 'Dec 05',
    isoDate: '2025-12-05',
    title: 'Google AI 生態系整合：從實驗室到專業簡報',
    subtitle: 'Google AI Ecosystem: From Labs to Presentations',
    icon: Globe,
    featured: true,
  },
  {
    session: 18,
    year: 2026,
    monthDay: 'Jul 14',
    isoDate: '2026-07-14',
    title: 'Codex 入門',
    subtitle:
      'Codex 入門：學會把 AI 從聊天工具變成工作代理，協助建立專案、整理檔案、修改成果、串接工具，並保留主管審查與決策權。',
    icon: Sparkles,
  },
]

export const FACILITATOR_TEXT = [
  'Patricia Liu is the facilitator of the NTU EMBA Generative AI Learning Group. She holds an EMBA degree from The Chinese University of Hong Kong and has worked both in front of and behind the camera in television production.',
  'She contributed as an AI advisor to the Global Warming series in Follow Me Go! (下課花路米), an award-winning children’s program on Public Television Service (公共電視台) in Taiwan, supporting bilingual content, project planning, and visual restoration.',
  'Passionate about new ideas, Patricia blends self-driven learning with a sharp eye for aesthetics.',
]

export const SITE_STATS = [
  { label: 'Sessions', value: COURSE_SESSIONS.length.toString(), icon: ShieldCheck },
  { label: 'Years', value: COURSE_YEARS.length.toString(), icon: Layers },
  { label: 'Newest', value: 'Codex', icon: Sparkles },
]
