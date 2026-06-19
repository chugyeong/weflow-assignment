import { RotateCcw, Save, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { TextAreaField, TextField } from "../../components/common/FormControls";
import { useCaseStore } from "../../store/useCaseStore";
import { Agreement, Form } from "../../styles/common/components";

const getCaseForm = (item) => ({
  title: item?.title || "",
  category: item?.category || "",
  summary: item?.summary || "",
  description: item?.description || "",
  result: item?.result || "",
  metrics: item?.metrics?.join("\n") || "",
  clientType: item?.clientType || "",
  launchPeriod: item?.launchPeriod || "",
  channel: item?.channel || "",
  projectScope: item?.projectScope?.join("\n") || "",
  timeline: item?.timeline?.join("\n") || "",
  testimonial: item?.testimonial || "",
  visible: item?.visible !== false,
});

const CaseEditor = ({ activeCase, updateCase, toggleCaseVisibility }) => {
  const [form, setForm] = useState(() => getCaseForm(activeCase));

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleToggleVisibility = () => {
    setForm((prev) => ({ ...prev, visible: !prev.visible }));
    toggleCaseVisibility(activeCase.id);
  };

  const handleSave = (event) => {
    event.preventDefault();

    updateCase(activeCase.id, {
      ...form,
      metrics: form.metrics
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      projectScope: form.projectScope
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      timeline: form.timeline
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
    });
    toast.success("성공사례가 저장되었습니다.");
  };

  return (
    <form
      className="rounded-[14px] border border-white/10 bg-white/[0.045] p-6 shadow-we-black max-[640px]:p-4"
      onSubmit={handleSave}>
      <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-5 max-[640px]:flex-col max-[640px]:items-start">
        <div>
          <h2 className="text-2xl font-black text-we-white">{activeCase.title}</h2>
          <p className="mt-1 text-sm text-we-gray-500">
            이미지와 슬러그는 기존 사례 자산을 사용합니다.
          </p>
        </div>
        <button
          type="button"
          className={`inline-flex min-h-10 items-center rounded-[10px] border px-3 font-extrabold transition ${
            form.visible
              ? "border-we-blue-300/50 bg-we-blue-300/10 text-we-blue-100"
              : "border-we-gray-700 bg-we-black text-we-gray-300"
          }`}
          onClick={handleToggleVisibility}>
          {form.visible ? "공개 중" : "비공개"}
        </button>
      </div>

      <Form>
        <TextField
          label="사례명"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="사례명을 입력하세요"
        />
        <TextField
          label="카테고리"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="업종 또는 분류"
        />
      </Form>

      <TextField
        label="대표 성과"
        name="result"
        value={form.result}
        onChange={handleChange}
        placeholder="예: 문의 흐름 개선"
      />
      <Form>
        <TextField
          label="클라이언트 라벨"
          name="clientType"
          value={form.clientType}
          onChange={handleChange}
          placeholder="예: 피트니스 운영팀"
        />
        <TextField
          label="제작 기간"
          name="launchPeriod"
          value={form.launchPeriod}
          onChange={handleChange}
          placeholder="예: 5일 제작"
        />
      </Form>
      <TextField
        label="유입 채널"
        name="channel"
        value={form.channel}
        onChange={handleChange}
        placeholder="예: 검색 광고 + 카카오 상담"
      />
      <TextAreaField
        label="요약"
        name="summary"
        value={form.summary}
        onChange={handleChange}
        placeholder="상세 페이지 상단 요약 문구"
      />
      <TextAreaField
        label="상세 설명"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="프로젝트 개선 방향과 작업 내용을 입력하세요"
      />
      <TextAreaField
        label="개선 포인트"
        name="metrics"
        value={form.metrics}
        onChange={handleChange}
        placeholder={"한 줄에 하나씩 입력\n모바일 중심 구성\n상담 CTA 강화"}
      />
      <Form>
        <TextAreaField
          label="작업 범위"
          name="projectScope"
          value={form.projectScope}
          onChange={handleChange}
          placeholder={"한 줄에 하나씩 입력\n랜딩 구조 설계\n모바일 UI 개선"}
        />
        <TextAreaField
          label="진행 단계"
          name="timeline"
          value={form.timeline}
          onChange={handleChange}
          placeholder={"한 줄에 하나씩 입력\n진단\n구조 설계\n배포"}
        />
      </Form>
      <TextAreaField
        label="고객 코멘트"
        name="testimonial"
        value={form.testimonial}
        onChange={handleChange}
        placeholder="상세 페이지 하단에 표시될 코멘트를 입력하세요"
      />

      <Agreement>
        <input type="checkbox" name="visible" checked={form.visible} onChange={handleChange} />
        <span>공개 페이지에 노출</span>
      </Agreement>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] font-extrabold text-white shadow-we-blue transition hover:-translate-y-0.5">
        <Save size={17} />
        변경사항 저장
      </button>
    </form>
  );
};

const AdminCases = () => {
  const cases = useCaseStore((state) => state.cases);
  const updateCase = useCaseStore((state) => state.updateCase);
  const toggleCaseVisibility = useCaseStore((state) => state.toggleCaseVisibility);
  const resetCases = useCaseStore((state) => state.resetCases);
  const [activeId, setActiveId] = useState(cases[0]?.id || "");
  const [query, setQuery] = useState("");

  const filteredCases = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return cases;
    return cases.filter((item) =>
      `${item.title} ${item.category} ${item.slug}`.toLowerCase().includes(keyword),
    );
  }, [cases, query]);

  const activeCase = cases.find((item) => item.id === activeId) || cases[0];

  const handleReset = () => {
    resetCases();
    toast.success("성공사례 데이터를 기본값으로 복원했습니다.");
  };

  if (!activeCase) {
    return <div className="rounded-[14px] border border-white/10 p-8">관리할 사례가 없습니다.</div>;
  }

  return (
    <>
      <div className="mb-6 flex items-end justify-between gap-4 max-[760px]:flex-col max-[760px]:items-start">
        <div>
          <span className="mb-2 inline-flex rounded-full border border-we-blue-300/40 bg-we-blue-300/10 px-3 py-1 text-sm font-extrabold text-we-blue-100">
            CASE MANAGEMENT
          </span>
          <h1 className="text-[clamp(28px,4vw,44px)] font-black text-we-white">성공사례 관리</h1>
          <p className="mt-2 break-keep text-we-gray-500">
            공개 성공사례의 상세 문구, 성과 포인트, 노출 여부를 관리합니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[340px_minmax(0,1fr)] gap-5 max-[980px]:grid-cols-1">
        <aside className="rounded-[14px] border border-white/10 bg-we-black/80 p-4 shadow-we-black">
          <label className="mb-4 flex min-h-11 items-center gap-2 rounded-[10px] border border-white/10 bg-white/[0.04] px-3 text-we-gray-300">
            <Search size={17} />
            <input
              className="min-w-0 flex-1 bg-transparent text-sm text-we-gray-100 placeholder:text-we-gray-500"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="사례 검색"
            />
          </label>

          <div className="grid max-h-[680px] gap-2 overflow-y-auto pr-1 [scrollbar-color:#334155_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-we-gray-700">
            {filteredCases.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`rounded-[10px] border p-3 text-left transition ${
                  activeCase.id === item.id
                    ? "border-we-blue-300 bg-we-blue-300/12"
                    : "border-white/10 bg-white/[0.03] hover:border-we-blue-300/60"
                }`}
                onClick={() => setActiveId(item.id)}>
                <div className="flex items-center justify-between gap-3">
                  <strong className="break-keep text-we-white">{item.title}</strong>
                  <span
                    className={`shrink-0 rounded-full px-2 py-1 text-xs font-extrabold ${
                      item.visible ? "bg-we-blue-500 text-white" : "bg-we-gray-700 text-we-gray-300"
                    }`}>
                    {item.visible ? "노출" : "숨김"}
                  </span>
                </div>
                <p className="mt-1 text-sm text-we-gray-500">/{item.slug}</p>
              </button>
            ))}
          </div>
        </aside>

        <CaseEditor
          key={activeCase.id}
          activeCase={activeCase}
          updateCase={updateCase}
          toggleCaseVisibility={toggleCaseVisibility}
        />
      </div>
    </>
  );
};

export default AdminCases;
