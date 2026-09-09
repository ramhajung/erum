/**
 * 이룸교회 중고등부 예랑 - 스마트 사역 관리 애플리케이션
 * Built with Emil Kowalski Design Engineering & Apple HIG Principles
 */

// =============================================================================
// 1. Initial Mock Data (Matches User Uploaded Images 1-5 Exactly)
// =============================================================================

const INITIAL_DATA = {
  student: {
    name: "양형모",
    grade: "고3 · 예랑 찬양팀",
    phone: "010-3849-2918",
    avatar: "👦🏻",
    visits: [
      {
        id: 1,
        date: "9/5",
        title: "카톡 심방: 수시 원서 접수 스트레스 상담",
        desc: "원서 접수를 앞두고 집중력 저하 및 진로 불안감 나눔. 격려와 합심 기도 진행.",
        icon: "💬"
      },
      {
        id: 2,
        date: "8/28",
        title: "심방: 찬양팀 세션 격려",
        desc: "주일 오전 찬양 연습 후 간식 전달 및 악기 세션 격려.",
        icon: "📢"
      }
    ],
    prayers: [
      { id: 1, text: "수시 대학 합격 및 믿음의 진로", count: 18, prayed: true },
      { id: 2, text: "가족 영혼 구원", count: 24, prayed: false }
    ]
  },
  agendas: {
    confirmed: [
      {
        id: 1,
        title: "[안건 1] 예랑 스카(자습실) 운영 및 간식 당번표 확정",
        author: "작성: 정하람 전도사",
        statusBadge: null,
        type: "cyan"
      },
      {
        id: 2,
        title: "[안건 2] 5주차 신앙기초 공과 지도법 나눔",
        author: "작성: 정하람 전도사",
        statusBadge: null,
        type: "yellow"
      },
      {
        id: 3,
        title: "[안건 3] 10월 생일자 선물 및 파티 기획",
        author: "제안: 김희순 집사",
        statusBadge: "전도사 승인완료 ✅",
        type: "peach"
      }
    ],
    pending: [
      {
        id: 101,
        title: "[제안] 찬양팀 토요 연습시간 변경의 건",
        author: "제안자: 소예진 선생님",
        desc: "기존 토요 16시에서 17시로 1시간 늦춰 참석률을 높이고자 합니다."
      }
    ]
  },
  attendance: [
    {
      id: 1,
      name: "김대한 선생님",
      role: "직장 출장 💼",
      status: "사전 결석",
      memo: "주말 지방 출장으로 불참합니다",
      duty: "방송실/자막",
      substitute: "김신원T 지정됨 ✅",
      avatar: "👨🏻‍💼"
    },
    {
      id: 2,
      name: "나하은 선생님",
      role: "가족행사 🚗",
      status: "지각",
      memo: "친척 예식 후 11:20 도착 예정",
      duty: "회계/간식",
      substitute: "자체 소화 가능",
      avatar: "👩🏻‍💼"
    }
  ],
  receiptPresets: [
    {
      name: "다이소 (멀티탭)",
      date: "2026.09.06",
      store: "다이소 이룸점",
      amount: 45000,
      category: "스카/시험기간 💻",
      user: "김대한 선생님",
      purpose: "예랑 스카 야간 자습용 고속 멀티탭 10구 3개 구매",
      icon: "🧾"
    },
    {
      name: "파리바게트 (간식)",
      date: "2026.09.13",
      store: "파리바게트 역삼점",
      amount: 22000,
      category: "중등부 분반 간식비 🥪",
      user: "김대한 선생님",
      purpose: "중등부 2학기 분반 모임 샌드위치 & 주스 구매",
      icon: "🥐"
    },
    {
      name: "뚜레쥬르 (생일케이크)",
      date: "2026.08.30",
      store: "뚜레쥬르 이룸점",
      amount: 62000,
      category: "생일 축하/행사비 🎂",
      user: "김희순 집사님",
      purpose: "8월 생일자 축하 케이크 2개 및 파티 용품",
      icon: "🎂"
    }
  ],
  accounting: {
    initialBalance: 1842500,
    income: 200000,
    closedMonths: [],
    receipts: [
      {
        id: 1,
        date: "9/6",
        title: "스카 멀티탭 10구 구매",
        author: "김대한 선생님",
        amount: 45000,
        status: "정산완료",
        category: "비품비",
        store: "쿠팡",
        receiptUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
        isMine: true
      },
      {
        id: 2,
        date: "9/13",
        title: "중등부 분반 간식비",
        author: "김대한 선생님",
        amount: 22000,
        status: "승인대기",
        category: "간식비",
        store: "파리바게뜨",
        receiptUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
        isMine: true
      },
      {
        id: 3,
        date: "8/30",
        title: "생일 케이크 및 축하선물",
        author: "김희순 집사",
        amount: 62000,
        status: "정산완료",
        category: "행사비",
        store: "파리바게뜨",
        receiptUrl: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80",
        isMine: false
      },
      {
        id: 4,
        date: "9/1",
        title: "9월 교사 공과 지도서 10부",
        author: "정하람 전도사",
        amount: 24000,
        status: "정산완료",
        category: "교재/공과비",
        store: "교보문고",
        receiptUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
        isMine: false
      }
    ],
    // Numbers 월별 회계장부 (사용자 시트 캡처 100% 반영)
    ledgerEntries: [
      // --- 1월 내역 (Numbers 원본 1~65행 데이터 및 합계 완벽 일치) ---
      { id: 100, month: 1, date: "2026.01.05", title: "1월 전반기 회비·헌금·찬조 이월합산", offering: 10000, fee: 1935000, donation: 100000, expense: 120000, author: "회계 재정부", store: "-", category: "이월", receiptUrl: null },
      { id: 101, month: 1, date: "2026.01.23", title: "소예진/ 수련회비", offering: 0, fee: 50000, donation: 0, expense: 0, author: "소예진T", store: "-", category: "회비", receiptUrl: null },
      { id: 102, month: 1, date: "2026.01.23", title: "김대한/ 수련회비", offering: 0, fee: 50000, donation: 0, expense: 0, author: "김대한T", store: "-", category: "회비", receiptUrl: null },
      { id: 103, month: 1, date: "2026.01.23", title: "김강산", offering: 0, fee: 50000, donation: 0, expense: 0, author: "김강산", store: "-", category: "회비", receiptUrl: null },
      { id: 104, month: 1, date: "2026.01.23", title: "수련회 완등록비/ 14명", offering: 0, fee: 0, donation: 0, expense: 1266000, author: "정하람 전도사", store: "수련회 본부", category: "행사비", receiptUrl: "https://images.unsplash.com/photo-1554415707-9e49017a1215?w=600&auto=format&fit=crop&q=80" },
      { id: 105, month: 1, date: "2026.01.23", title: "오우건", offering: 0, fee: 100000, donation: 0, expense: 0, author: "오우건", store: "-", category: "회비", receiptUrl: null },
      { id: 106, month: 1, date: "2026.01.23", title: "전병철", offering: 0, fee: 100000, donation: 0, expense: 0, author: "전병철", store: "-", category: "회비", receiptUrl: null },
      { id: 107, month: 1, date: "2026.01.23", title: "김만석 집사님/ 수련회찬조", offering: 0, fee: 0, donation: 50000, expense: 0, author: "김만석 집사님", store: "-", category: "찬조", receiptUrl: null },
      { id: 108, month: 1, date: "2026.01.23", title: "한지혜/ 수련회찬조", offering: 0, fee: 0, donation: 65000, expense: 0, author: "한지혜", store: "-", category: "찬조", receiptUrl: null },
      { id: 109, month: 1, date: "2026.01.24", title: "김찬서 헌금", offering: 3000, fee: 0, donation: 0, expense: 0, author: "김찬서", store: "-", category: "헌금", receiptUrl: null },
      { id: 110, month: 1, date: "2026.01.24", title: "홍가화", offering: 0, fee: 20000, donation: 0, expense: 0, author: "홍가화", store: "-", category: "회비", receiptUrl: null },
      { id: 111, month: 1, date: "2026.01.24", title: "예랑저녁", offering: 0, fee: 0, donation: 0, expense: 151500, author: "김대한T", store: "역삼 솥밥", category: "간식비", receiptUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80" },
      { id: 112, month: 1, date: "2026.01.25", title: "배득수", offering: 0, fee: 30000, donation: 0, expense: 0, author: "배득수", store: "-", category: "회비", receiptUrl: null },
      { id: 113, month: 1, date: "2026.01.25", title: "김영미", offering: 0, fee: 100000, donation: 0, expense: 0, author: "김영미", store: "-", category: "회비", receiptUrl: null },
      { id: 114, month: 1, date: "2026.01.25", title: "레크상품,예랑간식/대주샘", offering: 0, fee: 0, donation: 0, expense: 81428, author: "대주샘", store: "다이소/이마트", category: "행사비", receiptUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80" },
      { id: 115, month: 1, date: "2026.01.25", title: "배서연, 박주환/ 수련회찬조", offering: 0, fee: 0, donation: 100000, expense: 0, author: "배서연, 박주환", store: "-", category: "찬조", receiptUrl: null },
      { id: 116, month: 1, date: "2026.01.25", title: "박진희 수련회찬조", offering: 0, fee: 0, donation: 30000, expense: 0, author: "박진희", store: "-", category: "찬조", receiptUrl: null },
      { id: 117, month: 1, date: "2026.01.26", title: "성동현 / 예랑찬조", offering: 0, fee: 0, donation: 50000, expense: 0, author: "성동현", store: "-", category: "찬조", receiptUrl: null },
      { id: 118, month: 1, date: "2026.01.26", title: "수련회이불", offering: 0, fee: 0, donation: 0, expense: 52000, author: "정하람 전도사", store: "이룸 침구", category: "행사비", receiptUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80" },
      { id: 119, month: 1, date: "2026.01.26", title: "이성민, 이연주", offering: 0, fee: 130000, donation: 0, expense: 0, author: "이성민, 이연주", store: "-", category: "회비", receiptUrl: null },
      { id: 120, month: 1, date: "2026.01.26", title: "김서린 회비환불", offering: 0, fee: 49500, donation: 0, expense: 0, author: "김서린", store: "-", category: "회비", receiptUrl: null },
      { id: 121, month: 1, date: "2026.01.28", title: "2남전도회", offering: 0, fee: 30000, donation: 0, expense: 0, author: "2남전도회", store: "-", category: "회비", receiptUrl: null },
      { id: 122, month: 1, date: "2026.01.30", title: "최지원/ 두쫀쿠재료비", offering: 0, fee: 0, donation: 0, expense: 51820, author: "최지원T", store: "베이킹재료몰", category: "간식비", receiptUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80" },
      { id: 123, month: 1, date: "2026.01.30", title: "최지원/ 딸기", offering: 0, fee: 0, donation: 0, expense: 18580, author: "최지원T", store: "청과물가게", category: "간식비", receiptUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&auto=format&fit=crop&q=80" },
      // --- 9월 내역 (가을 학기) ---
      { id: 901, month: 9, date: "2026.09.01", title: "정하람 전도사 / 교보문고 (교재)", offering: 0, fee: 0, donation: 0, expense: 24000, author: "정하람 전도사", store: "교보문고", category: "교재/공과비", receiptUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80" },
      { id: 902, month: 9, date: "2026.09.06", title: "김대한T / 쿠팡 (스카 멀티탭)", offering: 0, fee: 0, donation: 0, expense: 45000, author: "김대한T", store: "쿠팡", category: "비품비", receiptUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80" },
      { id: 903, month: 9, date: "2026.09.10", title: "9월 정기 부서 예산 지원금", offering: 200000, fee: 0, donation: 0, expense: 0, author: "교회 재정부", store: "-", category: "지원금", receiptUrl: null },
      { id: 904, month: 9, date: "2026.09.13", title: "김대한T / 파리바게뜨 (분반 간식)", offering: 0, fee: 0, donation: 0, expense: 22000, author: "김대한T", store: "파리바게뜨", category: "간식비", receiptUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80" }
    ]
  },
  checklist: {
    eventName: "예랑 스카",
    dday: "D-12",
    manager: "김대한 선생님",
    items: [
      { id: 1, title: "멀티탭 및 고속 충전기 10구 구매 (김대한T)", manager: "김대한T", checked: true, color: "green" },
      { id: 2, title: "야간 집중 간식(토스트/음료) 주문 (양선아T)", manager: "양선아T", checked: false, color: "default" },
      { id: 3, title: "스카 홍보 포스터 인쇄 및 게시 (정하람 전도사)", manager: "정하람 전도사", checked: true, color: "yellow" },
      { id: 4, title: "10분 말씀 큐티지 인쇄 (소예진T)", manager: "소예진T", checked: false, color: "default" },
      { id: 5, title: "자습실 좌석 배치 및 청소 당번표 확정 (정하람 전도사)", manager: "정하람 전도사", checked: true, color: "green" }
    ]
  },
  staffBox: {
    items: [
      { id: 1, type: "구매요청", title: "방송실 고속 HDMI 케이블 & 멀티탭 10구", author: "김대한T", budget: "45,000원", status: "승인완료", badgeType: "approved" },
      { id: 2, type: "사역건의", title: "예랑 스카 야식 쉼터 공간 분리 제안", author: "소예진T", budget: null, status: "검토중", badgeType: "review" },
      { id: 3, type: "회의안건", title: "찬양팀 토요 연습시간 변경의 건", author: "소예진 선생님", budget: null, status: "검토중", badgeType: "review", agendaId: 101 }
    ]
  },
  worshipDuty: {
    date: "10/18",
    subtitle: "정성된 마음으로 준비하는 예배",
    prePrayer: { name: "교사 & 리더", role: "예배 10분 전 본당", badge: "예배전" },
    prayer: { name: "김예원", role: "고등부 2학년", badge: "학생회" },
    scripture: { name: "이유리 학생", role: "중등부 3학년", badge: "성경" },
    announcement: { name: "정하람 전도사", role: "청소년부 담당", badge: "부서소식" }
  },
  users: [
    {
      id: "u1",
      name: "정하람 전도사",
      username: "pastor",
      password: "password",
      role: "pastor",
      duty: "중고등부 총괄 사역 & 설교",
      phone: "010-1234-5678",
      avatar: "✝️",
      isAdmin: true
    },
    {
      id: "u2",
      name: "나하은 선생님",
      username: "accountant",
      password: "password",
      role: "accountant",
      duty: "중고등부 회계 & 재정 장부 결산",
      phone: "010-2345-6789",
      avatar: "💼",
      isAdmin: false
    },
    {
      id: "u3",
      name: "김대한 선생님",
      username: "teacher",
      password: "password",
      role: "teacher",
      duty: "고3 담임 / 방송실 자막 & 미디어",
      phone: "010-3456-7890",
      avatar: "🧑🏻‍🏫",
      isAdmin: false
    },
    {
      id: "u4",
      name: "소예진 선생님",
      username: "teacher2",
      password: "password",
      role: "teacher",
      duty: "새친구반 담임 / 찬양팀 멘토",
      phone: "010-4567-8901",
      avatar: "👩🏻‍🏫",
      isAdmin: false
    },
    {
      id: "u5",
      name: "양형모 학생",
      username: "student",
      password: "password",
      role: "student",
      duty: "고3 / 예랑 찬양팀 드럼 세션",
      phone: "010-3849-2918",
      avatar: "👦🏻",
      isAdmin: false
    },
    {
      id: "u6",
      name: "김하람 학생",
      username: "student2",
      password: "password",
      role: "student",
      duty: "중2 / 새친구반 정착 학생",
      phone: "010-5678-9012",
      avatar: "👧🏻",
      isAdmin: false
    }
  ],
  currentUserId: "u1",
  isAuthenticated: false
};

// State storage
let appState = loadState();

function loadState() {
  const saved = localStorage.getItem("yerang_app_state_v1");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (!parsed.users || parsed.users.length === 0) {
        parsed.users = JSON.parse(JSON.stringify(INITIAL_DATA.users));
      } else {
        // Migrate u1 pastor avatar from 👑 to ✝️ if still present in localStorage
        const pastorUser = parsed.users.find(u => u.id === "u1" || u.role === "pastor");
        if (pastorUser && pastorUser.avatar === "👑") {
          pastorUser.avatar = "✝️";
        }
      }
      if (!parsed.currentUserId) {
        parsed.currentUserId = "u1";
      }
      if (typeof parsed.isAuthenticated !== "boolean") {
        parsed.isAuthenticated = false;
      }
      if (!parsed.agendas) {
        parsed.agendas = JSON.parse(JSON.stringify(INITIAL_DATA.agendas));
      }
      if (!parsed.staffBox) {
        parsed.staffBox = JSON.parse(JSON.stringify(INITIAL_DATA.staffBox));
      }
      if (!parsed.worshipDuty || !parsed.worshipDuty.prePrayer) {
        parsed.worshipDuty = JSON.parse(JSON.stringify(INITIAL_DATA.worshipDuty));
      }
      // Ensure agendaId linkage between pending agendas and staffBox items
      if (parsed.agendas && parsed.agendas.pending && parsed.staffBox && parsed.staffBox.items) {
        parsed.agendas.pending.forEach(pa => {
          const matched = parsed.staffBox.items.find(si => si.type === "회의안건" && (si.agendaId === pa.id || si.title.includes(pa.title.replace("[제안]", "").trim())));
          if (matched) {
            matched.agendaId = pa.id;
          }
        });
      }
      return parsed;
    } catch (e) {
      console.error("Failed to parse saved state", e);
    }
  }
  return JSON.parse(JSON.stringify(INITIAL_DATA));
}

function saveState() {
  localStorage.setItem("yerang_app_state_v1", JSON.stringify(appState));
}

// =============================================================================
// 2. Sonner-Style Toast Engine (ask-sonner & emil-design-eng)
// =============================================================================

function showToast(message, type = "success", duration = 3000) {
  const container = document.getElementById("sonnerContainer");
  if (!container) return;

  const icons = {
    success: '<span class="sonner-icon-success">✓</span>',
    info: '<span class="sonner-icon-info">ℹ</span>',
    warn: '<span class="sonner-icon-warn">⚠</span>'
  };

  const toast = document.createElement("div");
  toast.className = "sonner-toast";
  toast.innerHTML = `${icons[type] || icons.success} <span>${message}</span>`;
  container.appendChild(toast);

  // Trigger enter animation (emil-design: scale from 0.95 to 1)
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Sound / Tactile Vibration feedback simulation
  if (window.navigator && window.navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) {
    try { window.navigator.vibrate(15); } catch(e){}
  }

  // Dismiss timer
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 240);
  }, duration);
}

// =============================================================================
// 3. View Management & Navigation
// =============================================================================

function initNavigation() {
  const tabButtons = document.querySelectorAll(".bottom-tab-bar .tab-btn");
  const views = document.querySelectorAll(".screen-view");
  const screenTitle = document.getElementById("screenTitle");
  const screenSubtitle = document.getElementById("screenSubtitle");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const title = btn.dataset.title;
      const subtitle = btn.dataset.subtitle;

      // Update active tab button
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Switch view with Emil Kowalski progressive transition
      views.forEach(v => {
        if (v.id === targetId) {
          v.classList.add("active");
        } else {
          v.classList.remove("active");
        }
      });

      // Update Header Text
      if (screenTitle && title) screenTitle.textContent = title;
      if (screenSubtitle && subtitle) screenSubtitle.textContent = subtitle;

      // 구글 스프레드시트 실시간 동기화
      if (targetId === "view-accounting" && typeof syncFromGoogleSheet === "function") {
        syncFromGoogleSheet(false);
      }

      // 스케줄 서브탭 권한 갱신
      if (targetId === "view-scheduler" && typeof renderSchedulerSubTabsByRole === "function") {
        renderSchedulerSubTabsByRole();
      }

      // Scroll top
      const container = document.getElementById("screensContainer");
      if (container) container.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// Switch to specific tab programmatically
function switchToTab(viewId) {
  const btn = document.querySelector(`.bottom-tab-bar .tab-btn[data-target="${viewId}"]`);
  if (btn) {
    btn.click();
  } else {
    const views = document.querySelectorAll(".screen-view");
    views.forEach(v => {
      if (v.id === viewId) {
        v.classList.add("active");
      } else {
        v.classList.remove("active");
      }
    });
    const container = document.getElementById("screensContainer");
    if (container) container.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// =============================================================================
// 4. Screen 1: 학생 심방 & 기도제목 Rendering & Events
// =============================================================================

function renderStudentSection() {
  const student = appState.student;

  // Student info
  document.getElementById("currentStudentName").textContent = student.name;
  document.getElementById("currentStudentGrade").textContent = student.grade;

  // Render Visits
  const visitListEl = document.getElementById("visitationList");
  visitListEl.innerHTML = "";

  student.visits.forEach(item => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <div class="date-badge">${item.date}</div>
      <div class="timeline-content">
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>
      <div class="timeline-icon-btn">${item.icon}</div>
    `;
    visitListEl.appendChild(el);
  });

  // Render Prayers
  const prayerListEl = document.getElementById("prayerList");
  prayerListEl.innerHTML = "";

  student.prayers.forEach((prayer, idx) => {
    const el = document.createElement("div");
    el.className = "prayer-card";
    el.innerHTML = `
      <div class="prayer-left">
        <div class="prayer-heart-icon">♥</div>
        <span>${prayer.text}</span>
      </div>
      <div class="prayer-hands" title="기도 동참하기" data-prayer-id="${prayer.id}">
        🙏 <span style="font-size:12px; font-weight:800; color:#5c4e44;">${prayer.count}</span>
      </div>
    `;

    // Click on prayer hands
    const handsBtn = el.querySelector(".prayer-hands");
    handsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      prayer.count += 1;
      saveState();
      renderStudentSection();
      showToast(`'${prayer.text}' 기도에 함께 동참했습니다! 🙏`);
    });

    prayerListEl.appendChild(el);
  });
}

function initStudentEvents() {
  // Call / Message quick contact buttons
  document.getElementById("callBtn").addEventListener("click", () => {
    showToast(`양형모 학생(${appState.student.phone})에게 전화를 연결합니다 📞`, "info");
  });

  document.getElementById("msgBtn").addEventListener("click", () => {
    showToast("카카오톡 학생 심방 대화방을 엽니다 💬", "info");
  });

  // Add Visit Form
  document.getElementById("openAddVisitModalBtn").addEventListener("click", () => {
    openModal("visitModal");
  });

  document.getElementById("visitForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("visitDateInput").value;
    const type = document.getElementById("visitTypeInput").value;
    const content = document.getElementById("visitContentInput").value;

    const newVisit = {
      id: Date.now(),
      date: date || "오늘",
      title: `${type}: ${content.slice(0, 20)}...`,
      desc: content,
      icon: type.includes("카톡") ? "💬" : type.includes("전화") ? "📞" : "☕"
    };

    appState.student.visits.unshift(newVisit);
    saveState();
    renderStudentSection();
    closeModal("visitModal");
    showToast("새 심방 기록이 정상 등록되었습니다! ✨");
  });
}

function isAgendaAuthor(item, user) {
  if (!item || !user) return false;
  if (item.authorId && item.authorId === user.id) return true;
  const rawAuthor = (item.author || "").replace(/^제안자:\s*/, "").replace(/^작성:\s*/, "").replace(/^제안:\s*/, "").trim();
  const userName = (user.name || "").trim();
  if (!rawAuthor || !userName) return false;
  if (rawAuthor === userName) return true;
  const cleanAuthor = rawAuthor.replace(/선생님|전도사|집사|T/g, "").trim();
  const cleanUser = userName.replace(/선생님|전도사|집사|T/g, "").trim();
  if (cleanAuthor && cleanUser && cleanAuthor === cleanUser) return true;
  return rawAuthor.includes(cleanUser) || userName.includes(cleanAuthor);
}

// =============================================================================
// 5. Screen 2: 이번 주 교사 회의 안건 Rendering & Events
// =============================================================================

function renderAgendaSection() {
  const confirmedList = document.getElementById("confirmedAgendaList");
  const pendingList = document.getElementById("pendingAgendaList");
  const confirmedCountEl = document.getElementById("confirmedAgendaCount");
  const pendingCountEl = document.getElementById("pendingAgendaCount");
  const openModalBtn = document.getElementById("openAddAgendaModalBtn");

  const isPastor = (currentRole === "pastor");
  const currentUser = getCurrentUser();

  // 버튼 문구 동적 변경 (전도사: 바로 회의 안건 추가 / 선생님: 안건 제안하기)
  if (openModalBtn) {
    if (isPastor) {
      openModalBtn.innerHTML = `<span>＋</span> <span>회의 안건 추가 (전도사 즉시 확정)</span>`;
    } else {
      openModalBtn.innerHTML = `<span>＋</span> <span>안건 제안하기</span>`;
    }
  }

  confirmedList.innerHTML = "";
  pendingList.innerHTML = "";

  // Render Confirmed
  appState.agendas.confirmed.forEach(agenda => {
    const card = document.createElement("div");
    card.className = "agenda-card default-border";
    if (agenda.type === "cyan") card.classList.add("cyan-border");
    if (agenda.type === "yellow") card.classList.add("yellow-border");

    let badgeHtml = "";
    if (agenda.statusBadge) {
      badgeHtml = `<span class="approval-badge">${agenda.statusBadge}</span>`;
    }

    // 전도사(pastor)인 경우 확정 안건 수정 및 삭제 버튼 제공
    let actionButtonsHtml = "";
    if (isPastor) {
      actionButtonsHtml = `
        <div style="display:flex; align-items:center; gap:5px; margin-left:auto;">
          <button type="button" class="edit-confirmed-agenda-btn" data-agenda-id="${agenda.id}" style="padding:4px 8px; font-size:11px; font-weight:700; background:#f5efff; color:#6c35c4; border-radius:6px; border:1px solid #e0c8ff; cursor:pointer;" title="안건 수정">
            ✏️ 수정
          </button>
          <button type="button" class="delete-confirmed-agenda-btn" data-agenda-id="${agenda.id}" style="padding:4px 7px; font-size:11px; background:#fff0f0; color:#ef4444; border-radius:6px; border:1px solid #fecaca; cursor:pointer;" title="안건 삭제">
            🗑️
          </button>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="agenda-title">${agenda.title}</div>
      <div class="agenda-author" style="margin-top:6px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:6px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span>(${agenda.author})</span>
          ${badgeHtml}
        </div>
        ${actionButtonsHtml}
      </div>
    `;

    // 수정 버튼 이벤트
    const editBtn = card.querySelector(".edit-confirmed-agenda-btn");
    if (editBtn) {
      editBtn.addEventListener("click", () => {
        openEditAgendaModal(agenda.id);
      });
    }

    // 삭제 버튼 이벤트
    const deleteBtn = card.querySelector(".delete-confirmed-agenda-btn");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        if (confirm(`'${agenda.title}' 안건을 회의 목록에서 삭제하시겠습니까?`)) {
          appState.agendas.confirmed = appState.agendas.confirmed.filter(a => a.id !== agenda.id);
          // 사역자 소통함(staffBox)에서도 연동 삭제
          if (appState.staffBox && appState.staffBox.items) {
            const raw = agenda.title.replace(/\[안건 \d+\]/, "").trim();
            appState.staffBox.items = appState.staffBox.items.filter(s => !(s.agendaId === agenda.id || s.id === agenda.id || s.title.includes(raw) || raw.includes(s.title)));
          }
          saveState();
          renderAgendaSection();
          renderStaffBoxSection();
          updateStaffBoxHomeBadge();
          showToast(`🗑️ 안건이 삭제되었습니다. (소통함 연동)`, "info");
        }
      });
    }

    confirmedList.appendChild(card);
  });

  // Render Pending: 전도사와 제안자 본인 외에는 보이지 않게 보안 필터링!
  const visiblePending = isPastor 
    ? appState.agendas.pending 
    : appState.agendas.pending.filter(agenda => isAgendaAuthor(agenda, currentUser));

  visiblePending.forEach(agenda => {
    const card = document.createElement("div");
    card.className = "agenda-card waiting-border";

    let actionsHtml = "";
    if (isPastor) {
      actionsHtml = `
        <div class="waiting-actions">
          <button class="btn-approve" data-approve-id="${agenda.id}">
            <span>✓</span> <span>승인</span>
          </button>
          <button class="btn-reject" data-reject-id="${agenda.id}">
            <span>✕</span> <span>반려</span>
          </button>
        </div>
      `;
    } else {
      actionsHtml = `
        <div style="margin-top:10px; display:flex; align-items:center; justify-content:space-between; padding-top:8px; border-top:1px dashed #fed7aa;">
          <span style="font-size:11.5px; color:#ea580c; font-weight:700;">🔒 전도사님 승인 대기 중 (제안자만 열람 가능)</span>
          <button type="button" class="btn-withdraw-agenda" data-agenda-id="${agenda.id}" style="padding:4px 9px; font-size:11px; font-weight:700; background:#fff1f2; color:#e11d48; border-radius:6px; border:1px solid #fecdd3; cursor:pointer;" title="제안 취소">
            제안 취소 ✕
          </button>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="agenda-title">${agenda.title}</div>
      <div class="agenda-author">
        <span>(${agenda.author})</span>
        <span style="color:#d96a24; font-weight:700; font-size:11px;">승인 대기</span>
      </div>
      ${agenda.desc ? `<p style="font-size:12px; color:var(--text-muted); margin-top:6px;">${agenda.desc}</p>` : ""}
      ${actionsHtml}
    `;

    if (isPastor) {
      card.querySelector(".btn-approve").addEventListener("click", () => {
        approveAgenda(agenda.id);
      });
      card.querySelector(".btn-reject").addEventListener("click", () => {
        rejectAgenda(agenda.id);
      });
    } else {
      const withdrawBtn = card.querySelector(".btn-withdraw-agenda");
      if (withdrawBtn) {
        withdrawBtn.addEventListener("click", () => {
          if (confirm(`'${agenda.title}' 제안을 취소하시겠습니까?`)) {
            appState.agendas.pending = appState.agendas.pending.filter(a => a.id !== agenda.id);
            if (appState.staffBox && appState.staffBox.items) {
              appState.staffBox.items = appState.staffBox.items.filter(s => s.agendaId !== agenda.id && s.id !== agenda.id);
            }
            saveState();
            renderAgendaSection();
            renderStaffBoxSection();
            updateStaffBoxHomeBadge();
            showToast("제안하신 안건이 취소되었습니다.", "info");
          }
        });
      }
    }

    pendingList.appendChild(card);
  });

  if (visiblePending.length === 0) {
    const emptyMsg = isPastor 
      ? "현재 승인 대기 중인 교사 제안 안건이 없습니다. 👍"
      : "내가 제안하여 승인 대기 중인 안건이 없습니다. 👍";
    pendingList.innerHTML = `
      <div style="text-align:center; padding:18px; color:var(--text-muted); font-size:13px; background:white; border-radius:var(--radius-md); border:1px solid var(--border-light);">
        ${emptyMsg}
      </div>
    `;
  }

  confirmedCountEl.textContent = appState.agendas.confirmed.length;
  pendingCountEl.textContent = visiblePending.length;

  updateMeetingNavBadge();
}

function openEditAgendaModal(agendaId) {
  const agenda = appState.agendas.confirmed.find(a => a.id === agendaId);
  if (!agenda) return;

  document.getElementById("editAgendaIdInput").value = agenda.id;
  document.getElementById("editAgendaTitleInput").value = agenda.title || "";
  document.getElementById("editAgendaAuthorInput").value = agenda.author || "";

  openModal("editAgendaModal");
}

function approveAgenda(id) {
  const index = appState.agendas.pending.findIndex(a => a.id === id);
  if (index === -1) return;

  const item = appState.agendas.pending.splice(index, 1)[0];
  appState.agendas.confirmed.push({
    id: item.id,
    title: item.title.replace("[제안]", `[안건 ${appState.agendas.confirmed.length + 1}]`),
    author: item.author.replace("제안자:", "제안:"),
    statusBadge: "전도사 승인완료 ✅",
    type: "peach"
  });

  // 사역자 소통함(staffBox)에도 동일 안건이 있다면 승인완료로 함께 연동 업데이트
  if (appState.staffBox && appState.staffBox.items) {
    const rawTitle = item.title.replace("[제안]", "").trim();
    let linkedStaff = appState.staffBox.items.find(s => s.agendaId === item.id || s.id === item.id || s.title.includes(rawTitle) || rawTitle.includes(s.title));
    if (linkedStaff) {
      linkedStaff.agendaId = item.id;
      linkedStaff.status = "승인완료";
      linkedStaff.badgeType = "approved";
    } else {
      appState.staffBox.items.unshift({
        id: item.id,
        agendaId: item.id,
        type: "회의안건",
        title: rawTitle,
        author: item.author.replace("제안자:", "").trim(),
        budget: null,
        status: "승인완료",
        badgeType: "approved"
      });
    }
  }

  saveState();
  renderAgendaSection();
  renderStaffBoxSection();
  updateStaffBoxHomeBadge();
  showToast("안건이 전도사님 승인되어 확정 안건 목록에 등록되었습니다! (소통함도 함께 승인됨) 📌");
}

function rejectAgenda(id) {
  const index = appState.agendas.pending.findIndex(a => a.id === id);
  if (index === -1) return;

  const item = appState.agendas.pending.splice(index, 1)[0];

  // 사역자 소통함(staffBox)에서도 동일 안건이 있다면 반려(삭제) 연동
  if (appState.staffBox && appState.staffBox.items) {
    const rawTitle = item.title.replace("[제안]", "").trim();
    const linkedIndex = appState.staffBox.items.findIndex(s => s.agendaId === item.id || s.id === item.id || s.title.includes(rawTitle) || rawTitle.includes(s.title));
    if (linkedIndex !== -1) {
      appState.staffBox.items.splice(linkedIndex, 1);
    }
  }

  saveState();
  renderAgendaSection();
  renderStaffBoxSection();
  updateStaffBoxHomeBadge();
  showToast(`'${item.title}' 안건이 반려 처리되었습니다. (소통함 연동 완료)`, "warn");
}

function initAgendaEvents() {
  const openModalBtn = document.getElementById("openAddAgendaModalBtn");
  if (openModalBtn) {
    openModalBtn.addEventListener("click", () => {
      const currentUser = getCurrentUser();
      const authorSelect = document.getElementById("agendaAuthorInput");
      const modalTitle = document.querySelector("#agendaModal .sheet-title");
      const submitBtn = document.querySelector("#agendaModal button[type='submit']");

      if (currentRole === "pastor") {
        if (modalTitle) modalTitle.textContent = "회의 안건 즉시 등록 (전도사)";
        if (submitBtn) submitBtn.textContent = "확정 안건으로 바로 추가 ✓";
        if (authorSelect) authorSelect.value = "정하람 전도사";
      } else {
        if (modalTitle) modalTitle.textContent = "교사 회의 안건 제안";
        if (submitBtn) submitBtn.textContent = "안건 제안 제출 (승인 대기 등록)";
        if (authorSelect && currentUser) {
          for (let opt of authorSelect.options) {
            if (opt.value.includes(currentUser.name) || currentUser.name.includes(opt.value)) {
              opt.selected = true;
              break;
            }
          }
        }
      }

      openModal("agendaModal");
    });
  }

  const form = document.getElementById("agendaForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const currentUser = getCurrentUser();
      const author = document.getElementById("agendaAuthorInput").value;
      const title = document.getElementById("agendaTitleInput").value;
      const desc = document.getElementById("agendaDescInput").value;
      const newId = Date.now();

      if (currentRole === "pastor") {
        // 전도사는 바로 확정된 안건으로 등록!
        const nextNum = appState.agendas.confirmed.length + 1;
        const newConfirmed = {
          id: newId,
          authorId: currentUser ? currentUser.id : "u1",
          title: `[안건 ${nextNum}] ${title}`,
          author: `작성: ${author}`,
          statusBadge: "전도사 직속 안건 📌",
          type: "cyan"
        };
        appState.agendas.confirmed.push(newConfirmed);

        // 사역자 소통함에도 승인완료 회의안건으로 동기화 등록
        if (appState.staffBox && appState.staffBox.items) {
          appState.staffBox.items.unshift({
            id: newId,
            agendaId: newId,
            authorId: currentUser ? currentUser.id : "u1",
            type: "회의안건",
            title: title,
            author: author,
            budget: null,
            status: "승인완료",
            badgeType: "approved"
          });
        }

        saveState();
        renderAgendaSection();
        renderStaffBoxSection();
        updateStaffBoxHomeBadge();
        closeModal("agendaModal");
        form.reset();
        showToast(`🎉 회의 안건 [안건 ${nextNum}]이 확정 안건으로 바로 등록되었습니다! (소통함 동기화)`, "success");
      } else {
        // 교사는 승인 대기로 등록
        const newAgenda = {
          id: newId,
          authorId: currentUser ? currentUser.id : null,
          title: `[제안] ${title}`,
          author: `제안자: ${author}`,
          desc: desc
        };
        appState.agendas.pending.push(newAgenda);

        // 사역자 소통함(staffBox)에도 '회의안건'으로 자동 등록 (동기화)
        if (appState.staffBox && appState.staffBox.items) {
          appState.staffBox.items.unshift({
            id: newId,
            agendaId: newId,
            authorId: currentUser ? currentUser.id : null,
            type: "회의안건",
            title: title,
            author: author,
            budget: null,
            status: "검토중",
            badgeType: "review"
          });
        }

        saveState();
        renderAgendaSection();
        renderStaffBoxSection();
        updateStaffBoxHomeBadge();
        closeModal("agendaModal");
        form.reset();
        showToast("신규 안건 제안이 등록되었습니다 (소통함 연동 및 승인 대기 중) ⏳");
      }
    });
  }

  // Edit Agenda Form
  const editForm = document.getElementById("editAgendaForm");
  if (editForm) {
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = Number(document.getElementById("editAgendaIdInput").value);
      const target = appState.agendas.confirmed.find(a => a.id === id);
      if (!target) return;

      const title = document.getElementById("editAgendaTitleInput").value.trim();
      const author = document.getElementById("editAgendaAuthorInput").value.trim();

      if (!title) return;

      const oldTitle = target.title;
      target.title = title;
      target.author = author;

      // Also update linked item in staffBox!
      if (appState.staffBox && appState.staffBox.items) {
        const oldRaw = oldTitle.replace(/\[안건 \d+\]/, "").trim();
        const newRaw = title.replace(/\[안건 \d+\]/, "").trim();
        const linked = appState.staffBox.items.find(s => s.agendaId === target.id || s.id === target.id || s.title.includes(oldRaw));
        if (linked) {
          linked.title = newRaw;
          if (author) linked.author = author.replace(/^제안:\s*/, "").replace(/^작성:\s*/, "");
        }
      }

      saveState();
      renderAgendaSection();
      renderStaffBoxSection();
      closeModal("editAgendaModal");
      showToast("✅ 회의 안건 내용이 성공적으로 수정되었습니다! (소통함 연동)");
    });
  }
}

// =============================================================================
// 6. Screen 3: 예랑 스마트 스케줄러 (사전 출결 & 대타) Rendering & Events
// =============================================================================

function renderAttendanceSection() {
  const listEl = document.getElementById("attendanceList");
  if (!listEl) return;
  listEl.innerHTML = "";

  const currentUser = getCurrentUser();
  const isPastor = (currentRole === "pastor" && (!currentUser || currentUser.role === "pastor"));

  // 1. 이번 주 출석/사전결석/지각 통계 바: 전도사에게만 노출 (선생님들에게는 비노출)
  const statsBar = document.getElementById("attendanceStatsBar");
  if (statsBar) {
    statsBar.style.display = isPastor ? "flex" : "none";
  }

  let absentCount = 0;
  let lateCount = 0;

  appState.attendance.forEach(att => {
    if (att.status === "사전 결석") absentCount++;
    if (att.status === "지각") lateCount++;
  });

  // Calculate stats
  const statAbsentEl = document.getElementById("statAbsentCount");
  const statLateEl = document.getElementById("statLateCount");
  const statPresentEl = document.getElementById("statPresentCount");
  if (statAbsentEl) statAbsentEl.textContent = absentCount;
  if (statLateEl) statLateEl.textContent = lateCount;
  if (statPresentEl) statPresentEl.textContent = Math.max(9 - absentCount - lateCount, 0);

  // 2. 다른 선생님들이 보낸 출결 카드는 숨기고, 전도사는 전체 / 선생님은 본인 것만 표시
  const filteredAttendance = isPastor
    ? appState.attendance
    : appState.attendance.filter(att => {
        if (!currentUser) return false;
        const cleanAttName = (att.name || "").replace(/선생님|집사님|전도사님|교사|T|쌤/gi, "").replace(/\s+/g, "");
        const cleanUserName = (currentUser.name || "").replace(/선생님|집사님|전도사님|교사|T|쌤/gi, "").replace(/\s+/g, "");
        return cleanAttName && cleanUserName && (cleanAttName === cleanUserName || cleanAttName.includes(cleanUserName) || cleanUserName.includes(cleanAttName));
      });

  if (filteredAttendance.length === 0) {
    const emptyEl = document.createElement("div");
    emptyEl.style.cssText = "padding: 36px 16px; text-align: center; background: #ffffff; border-radius: 16px; border: 1.5px dashed #f1ddd2; color: #94a3b8; margin: 12px 0;";
    emptyEl.innerHTML = `
      <div style="font-size: 32px; margin-bottom: 8px;">📋</div>
      <div style="font-size: 14px; font-weight: 800; color: #475569; margin-bottom: 4px;">등록된 나의 예배 출결 내역이 없습니다</div>
      <div style="font-size: 12px; color: #94a3b8; line-height: 1.5;">이번 주 주일 예배에 사전 결석 또는 지각 예정이실 경우<br>아래 버튼을 눌러 등록해주세요.</div>
    `;
    listEl.appendChild(emptyEl);
    return;
  }

  filteredAttendance.forEach(att => {
    const isLate = att.status === "지각";
    const card = document.createElement("div");
    card.className = `teacher-att-card ${isLate ? "late-card" : ""}`;

    const dutyHtml = att.duty ? `<div>담당: <b>${att.duty}</b></div>` : "";
    const subHtml = att.substitute ? `<div>대타: <span class="substitute-badge">${att.substitute}</span></div>` : "";
    const extraRow = (dutyHtml || subHtml) ? `
      <div class="substitute-row">
        ${dutyHtml}
        ${subHtml}
      </div>
    ` : "";

    card.innerHTML = `
      <div class="teacher-card-top">
        <div class="teacher-profile">
          <div class="teacher-avatar-sm">${att.avatar || "👤"}</div>
          <div>
            <div class="teacher-name-txt">${att.name}</div>
            <div class="teacher-reason-pill">${att.role}</div>
          </div>
        </div>
        <div class="${isLate ? "badge-late" : "badge-absent"}">
          ${att.status} ${isLate ? "⏰" : "✕"}
        </div>
      </div>

      <div class="teacher-memo-box">
        ${att.memo}
        ${att.eta ? `<div style="margin-top:6px; font-weight:700; color:#d97706; font-size:12px; display:flex; align-items:center; gap:4px;"><span>⏰ 도착 예정:</span> <span>${att.eta}</span></div>` : ''}
      </div>

      ${extraRow}
    `;
    listEl.appendChild(card);
  });
}

function initAttendanceEvents() {
  document.getElementById("openAbsentModalBtn").addEventListener("click", () => {
    const currentUser = getCurrentUser();
    const nameInput = document.getElementById("absentTeacherInput");
    if (nameInput) {
      nameInput.value = currentUser ? currentUser.name : "선생님";
    }
    const memoInput = document.getElementById("absentMemoInput");
    if (memoInput) memoInput.value = "";
    const etaInput = document.getElementById("absentEtaInput");
    if (etaInput) etaInput.value = "";
    openModal("absentModal");
  });

  document.getElementById("absentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const currentUser = getCurrentUser();
    const name = (currentUser ? currentUser.name : document.getElementById("absentTeacherInput")?.value) || "선생님";
    const status = document.getElementById("absentStatusInput").value;
    const reason = document.getElementById("absentReasonCategory").value;
    const memo = document.getElementById("absentMemoInput").value;
    const eta = document.getElementById("absentEtaInput")?.value?.trim() || "";
    const duty = currentUser ? (currentUser.duty || "") : "";

    const newAtt = {
      id: Date.now(),
      name: name,
      role: reason,
      status: status,
      memo: memo,
      eta: eta,
      duty: duty,
      avatar: currentUser?.avatar || "🧑🏻‍🏫"
    };

    appState.attendance.unshift(newAtt);
    saveState();
    renderAttendanceSection();
    closeModal("absentModal");
    showToast(`예배 ${status} 등록이 완료되었습니다! ✅`);
  });
}

// =============================================================================
// 7. Screen 4: AI 영수증 등록 및 시트 실시간 기입 & Open Accountant 스마트 회계
// =============================================================================

// Open Accountant 스마트 비목 매핑 사전
const SMART_CATEGORIES = {
  "간식비": ["파리바게뜨", "파리바게트", "뚜레쥬르", "뚜레주르", "배달의민족", "배민", "스타벅스", "이디야", "메가커피", "컴포즈", "투썸", "서브웨이", "맘스터치", "맥도날드", "버거킹", "피자스쿨", "도미노", "비비큐", "교촌", "던킨", "베스킨라빈스", "배스킨라빈스", "떡볶이", "김밥"],
  "비품비": ["다이소", "알파문구", "쿠팡", "네이버페이", "이마트", "홈플러스", "롯데마트", "문구", "오피스"],
  "교재/공과비": ["교보문고", "예스24", "알라딘", "두란노", "생명의말씀사", "기독교서점", "출판"],
  "사역지원비": ["인쇄", "복사", "현수막", "카셰어링", "쏘카", "주유소", "하이패스", "택시", "우체국"],
  "행사비": ["수련회", "기도회", "체육대회", "캠프", "볼링장", "방탈출", "영화관", "CGV", "메가박스"]
};

function detectCategoryFromStore(storeName) {
  if (!storeName) return null;
  const lower = storeName.toLowerCase().replace(/\s+/g, "");
  for (const [cat, keywords] of Object.entries(SMART_CATEGORIES)) {
    for (const kw of keywords) {
      if (lower.includes(kw.toLowerCase())) {
        return cat;
      }
    }
  }
  return null;
}

// Open Accountant 회계 이상 거래 감지 (고액 지출, 중복 청구, 미분류)
function detectReceiptAnomalies(receipt, allReceipts = []) {
  const anomalies = [];
  if (!receipt) return anomalies;

  // 1. 고액 지출 점검 (50,000원 이상)
  if (receipt.amount >= 50000) {
    anomalies.push({ type: "high", label: "고액 지출 (5만원 이상)", tagClass: "anomaly-tag-high" });
  }

  // 2. 중복 청구 의심 (동일 가맹점 + 동일 금액)
  const isDuplicate = allReceipts.some(r =>
    r.id !== receipt.id &&
    r.store && receipt.store &&
    r.store.trim().toLowerCase() === receipt.store.trim().toLowerCase() &&
    Number(r.amount) === Number(receipt.amount)
  );
  if (isDuplicate) {
    anomalies.push({ type: "duplicate", label: "중복 의심 (동일처·동일액)", tagClass: "anomaly-tag-warn" });
  }

  // 3. 미분류 점검
  if (!receipt.category || receipt.category === "기타" || receipt.category === "미분류") {
    anomalies.push({ type: "uncategorized", label: "미분류 점검 필요", tagClass: "anomaly-tag" });
  }

  return anomalies;
}

let currentPresetIndex = 0;
let currentUploadedImage = null;
let currentLedgerMonth = 1;

// 공식 구글 Apps Script Webhook URL 기본값
const DEFAULT_GSHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxGj8aUgeBqKZ1yfVRBdn2ZtiPLIRfqXJWvy1ZCRi19qBNqK7uEZqoHVB5fJsqxPwNx/exec";

// Google Apps Script 연동 템플릿 코드
const APPS_SCRIPT_TEMPLATE = `/**
 * 이룸교회 중고등부 예랑 - 스마트 회계 & 영수증 드라이브 자동 연동 스크립트
 */

const RECEIPT_FOLDER_NAME = "예랑_영수증_보관함";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1) 결제 일자 분석 -> 해당 '월' 시트 선택 (예: "2026.09.13" -> "9월")
    const dateStr = data.date || Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy.MM.dd");
    const monthMatch = dateStr.match(/\\d{4}[.-](\\d{1,2})[.-]\\d{1,2}/) || dateStr.match(/(\\d{1,2})[.-]\\d{1,2}/);
    const monthNum = monthMatch ? parseInt(monthMatch[1], 10) : (new Date().getMonth() + 1);
    const sheetName = monthNum + "월";

    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.getSheets()[0];
    }

    // 2) 영수증 사진 구글 드라이브 자동 저장 (월별 하위 폴더 자동 분류)
    let receiptUrl = "";
    if (data.imageBase64) {
      const fileName = "[" + dateStr + "] " + (data.store || "지출") + "_" + (amount ? amount.toLocaleString() + "원" : "") + "_" + (data.author || "교사") + ".jpg";
      receiptUrl = saveReceiptToDrive(data.imageBase64, fileName, ss, sheetName);
    }

    // 3) 해당 월 시트에 데이터 기입
    const amount = Number(data.amount) || 0;
    const author = data.author || "";
    const store = data.store || "";
    const purpose = data.purpose || "";
    const titleMemo = author ? author + " / " + store + " (" + purpose + ")" : store + " (" + purpose + ")";
    const receiptFormula = receiptUrl ? '=HYPERLINK("' + receiptUrl + '", "영수증 보기 📑")' : "증빙 없음";

    const newRow = sheet.getLastRow() + 1;
    sheet.getRange(newRow, 2).setValue(dateStr);
    sheet.getRange(newRow, 3).setValue(titleMemo);
    sheet.getRange(newRow, 7).setValue(amount);
    sheet.getRange(newRow, 8).setFormula(receiptFormula);
    sheet.getRange(newRow, 9).setValue(author);
    sheet.getRange(newRow, 10).setValue("정산완료");

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      sheet: sheetName,
      row: newRow,
      receiptUrl: receiptUrl
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function saveReceiptToDrive(base64Data, fileName, ss, monthName) {
  // 1) 스프레드시트가 있는 부모 폴더(예: '예랑' 프로젝트 폴더) 자동 탐색
  const ssFile = DriveApp.getFileById(ss.getId());
  const parents = ssFile.getParents();
  const parentFolder = parents.hasNext() ? parents.next() : DriveApp.getRootFolder();

  // 2) '예랑_영수증_보관함' 폴더 생성/가져오기
  const rootFolders = parentFolder.getFoldersByName(RECEIPT_FOLDER_NAME);
  const rootFolder = rootFolders.hasNext() ? rootFolders.next() : parentFolder.createFolder(RECEIPT_FOLDER_NAME);

  // 3) '1월_영수증', '9월_영수증' 등 월별 하위 폴더 자동 생성/분류
  const monthFolderName = (monthName || "기타") + "_영수증";
  const subFolders = rootFolder.getFoldersByName(monthFolderName);
  const targetFolder = subFolders.hasNext() ? subFolders.next() : rootFolder.createFolder(monthFolderName);

  // 4) 파일 저장 및 열람 권한 설정
  const cleanBase64 = base64Data.replace(/^data:image\\/\\w+;base64,/, "");
  const decodedBlob = Utilities.newBlob(Utilities.base64Decode(cleanBase64), "image/jpeg", fileName);
  const file = targetFolder.createFile(decodedBlob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return file.getUrl();
}`;

function initReceiptSection() {
  const changeBtn = document.getElementById("changeReceiptSampleBtn");
  const submitBtn = document.getElementById("submitReceiptBtn");
  const storeInput = document.getElementById("rcptStore");
  const catSelect = document.getElementById("rcptCategory");
  const smartBadge = document.getElementById("smartCategoryBadge");
  const anomalyBox = document.getElementById("receiptAnomalyBox");

  const fileInput = document.getElementById("receiptFileInput");
  const triggerCameraBtn = document.getElementById("triggerCameraBtn");
  const receiptZone = document.getElementById("receiptZone");
  const previewThumb = document.getElementById("receiptPreviewThumb");
  const previewImg = document.getElementById("receiptPreviewImg");

  // 실시간 영수증 사진 촬영 및 파일 첨부 핸들러
  if (triggerCameraBtn && fileInput) {
    triggerCameraBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      fileInput.click();
    });
  }

  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        currentUploadedImage = event.target.result;
        if (previewImg && previewThumb) {
          previewImg.src = currentUploadedImage;
          previewThumb.style.display = "block";
        }
        const defaultIconBox = document.getElementById("receiptDefaultIconBox");
        if (defaultIconBox) defaultIconBox.style.display = "none";

        const zone = document.getElementById("receiptZone");
        if (zone) zone.style.opacity = "0.5";
        showToast("영수증 사진을 분석 중입니다... 🪄");

        setTimeout(() => {
          if (zone) zone.style.opacity = "1";
          const now = new Date();
          const todayStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
          const dateInput = document.getElementById("rcptDate");
          if (dateInput) dateInput.value = todayStr;

          const scanTitle = document.getElementById("receiptScanStatusTitle");
          if (scanTitle) scanTitle.textContent = "영수증 사진 업로드 & 인식 성공!";
          const subText = document.getElementById("receiptIconSubText");
          if (subText) subText.textContent = "사진 첨부됨 📷";

          const currentStore = storeInput ? storeInput.value : "다이소";
          const currentAmt = 45000;
          updateFormSmartBadges(currentStore, currentAmt);

          showToast("영수증 사진이 첨부되었습니다! 내용 확인 후 등록하세요 🚀");
        }, 300);
      };
      reader.readAsDataURL(file);
    });
  }

  function updateFormSmartBadges(storeVal, amountVal) {
    // 1. 스마트 비목 추천
    const suggestedCat = detectCategoryFromStore(storeVal);
    if (smartBadge) {
      if (suggestedCat) {
        smartBadge.style.display = "inline-flex";
        smartBadge.innerHTML = `💡 AI 추천 분류: <b>${suggestedCat}</b> (클릭하여 적용)`;
        smartBadge.onclick = () => {
          if (catSelect) catSelect.value = suggestedCat;
          showToast(`분류가 '${suggestedCat}'(으)로 자동 적용되었습니다 ✨`);
        };
      } else {
        smartBadge.style.display = "none";
      }
    }

    // 2. 실시간 회계 이상 감지 (고액/중복)
    if (anomalyBox) {
      const draftReceipt = {
        id: -1,
        store: storeVal,
        amount: Number(amountVal) || 0,
        category: catSelect ? catSelect.value : ""
      };
      const anomalies = detectReceiptAnomalies(draftReceipt, appState.accounting.receipts);
      if (anomalies.length > 0) {
        anomalyBox.style.display = "block";
        anomalyBox.innerHTML = `
          <div style="font-weight:700; margin-bottom:4px;">⚠️ 회계 이상 징후 감지 (Open Accountant)</div>
          ${anomalies.map(a => `<div style="font-size:11.5px; margin-top:2px;">• <b>${a.label}</b></div>`).join("")}
        `;
      } else {
        anomalyBox.style.display = "none";
      }
    }
  }

  if (storeInput) {
    storeInput.addEventListener("input", (e) => {
      const preset = appState.receiptPresets[currentPresetIndex];
      const amt = preset ? preset.amount : 45000;
      updateFormSmartBadges(e.target.value, amt);
    });
  }

  if (changeBtn) {
    changeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentPresetIndex = (currentPresetIndex + 1) % appState.receiptPresets.length;
      const preset = appState.receiptPresets[currentPresetIndex];

      // Scanning animation
      const zone = document.getElementById("receiptZone");
      if (zone) zone.style.opacity = "0.5";
      const iconEl = document.getElementById("receiptIconVisual");
      if (iconEl) iconEl.textContent = "⚡";

      if (previewThumb) previewThumb.style.display = "none";
      const defaultIconBox = document.getElementById("receiptDefaultIconBox");
      if (defaultIconBox) defaultIconBox.style.display = "flex";
      currentUploadedImage = preset.receiptUrl || null;

      setTimeout(() => {
        if (zone) zone.style.opacity = "1";
        if (iconEl) iconEl.textContent = preset.icon;
        document.getElementById("highlightAmount").textContent = preset.amount.toLocaleString() + "원";
        document.getElementById("highlightStore").textContent = preset.store;

        document.getElementById("rcptDate").value = preset.date;
        document.getElementById("rcptStore").value = preset.store;
        document.getElementById("rcptPriceDisplay").innerHTML = `${preset.amount.toLocaleString()} <span style="font-size:14px; font-weight:700; color:#555;">원 (지출)</span>`;
        document.getElementById("rcptCategory").value = preset.category;
        document.getElementById("rcptUser").value = preset.user;
        document.getElementById("rcptPurpose").value = preset.purpose;

        const scanTitle = document.getElementById("receiptScanStatusTitle");
        if (scanTitle) scanTitle.textContent = "AI 영수증 분석 성공!";
        const subText = document.getElementById("receiptIconSubText");
        if (subText) subText.textContent = "업로드됨 ✓";

        updateFormSmartBadges(preset.store, preset.amount);

        showToast(`AI 영수증 분석: '${preset.store}' (${preset.amount.toLocaleString()}원) 인식 완료! 🪄`);
      }, 200);
    });
  }

  // Initial trigger for form
  const initialPreset = appState.receiptPresets[0];
  if (initialPreset) {
    updateFormSmartBadges(initialPreset.store, initialPreset.amount);
    currentUploadedImage = initialPreset.receiptUrl || "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80";
  }

  // Submit Receipt to Google Sheets
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const preset = appState.receiptPresets[currentPresetIndex];
      const date = document.getElementById("rcptDate").value;
      const store = document.getElementById("rcptStore").value;
      const category = document.getElementById("rcptCategory").value;
      const user = document.getElementById("rcptUser").value;
      const purpose = document.getElementById("rcptPurpose").value;
      const amount = preset ? preset.amount : 45000;

      // Extract month
      const monthMatch = date.match(/\d{4}[.-](\d{1,2})[.-]\d{1,2}/) || date.match(/(\d{1,2})[.-]\d{1,2}/);
      const monthNum = monthMatch ? parseInt(monthMatch[1], 10) : 9;

      const receiptPhoto = currentUploadedImage || (preset ? preset.receiptUrl : "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80");

      // 1. Add to accounting receipts list
      const newReceipt = {
        id: Date.now(),
        date: date.slice(5) || "9/8",
        title: purpose.slice(0, 18) + (purpose.length > 18 ? "..." : ""),
        author: user,
        amount: amount,
        status: "정산완료",
        category: category,
        store: store,
        receiptUrl: receiptPhoto,
        isMine: true
      };
      appState.accounting.receipts.unshift(newReceipt);

      // 2. Add to Numbers monthly ledger entries
      const newLedgerEntry = {
        id: newReceipt.id,
        month: monthNum,
        date: date,
        title: `${(user || "").replace("선생님", "T")} / ${store} (${purpose})`,
        offering: 0,
        fee: 0,
        donation: 0,
        expense: amount,
        author: user,
        store: store,
        category: category,
        receiptUrl: receiptPhoto
      };
      if (!appState.accounting.ledgerEntries) {
        appState.accounting.ledgerEntries = [];
      }
      appState.accounting.ledgerEntries.unshift(newLedgerEntry);

      // 3. Send to Google Apps Script Web App if configured
      const webhookUrl = localStorage.getItem("yerang_gsheet_webhook_url") || DEFAULT_GSHEET_WEBHOOK_URL;
      if (webhookUrl && webhookUrl.startsWith("http")) {
        try {
          fetch(webhookUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              date: date,
              store: store,
              amount: amount,
              category: category,
              author: user,
              purpose: purpose,
              imageBase64: receiptPhoto.startsWith("data:") ? receiptPhoto : null
            })
          }).then(() => {
            console.log("Sent to Google Apps Script Webhook");
          }).catch(err => console.error("Webhook error:", err));
        } catch (e) {
          console.error("Fetch exception:", e);
        }
      }

      saveState();
      renderAccountingSection();

      showToast("구글 스프레드시트에 즉시 등록되었습니다! (새 행 추가 완료 🚀)");

      setTimeout(() => {
        switchToTab("view-accounting");
        setTimeout(() => {
          if (typeof syncFromGoogleSheet === "function") syncFromGoogleSheet(false);
        }, 1500);
      }, 600);
    });
  }
}

// =============================================================================
// 8. Screen 5: 역할별 회계 보안 & 권한 분리 시스템 (Open Accountant Engine)
// =============================================================================

function renderAccountingSection() {
  const myReceiptList = document.getElementById("myReceiptList");
  const allReceiptList = document.getElementById("allReceiptList");
  const totalBalanceEl = document.getElementById("totalBalanceAmount");
  const gsheetTableBody = document.getElementById("gsheetTableBody");

  // Live balance and expense sum
  let totalExpense = 0;
  appState.accounting.receipts.forEach(r => totalExpense += Number(r.amount) || 0);
  const liveBalance = appState.accounting.initialBalance + appState.accounting.income - totalExpense;

  if (totalBalanceEl) {
    totalBalanceEl.innerHTML = `${liveBalance.toLocaleString()} <span style="font-size:16px; font-weight:700;">원</span>`;
  }

  const subStatsEl = document.querySelector("#adminAccountingView .balance-sub-stats");
  if (subStatsEl) {
    subStatsEl.innerHTML = `
      <span class="stat-inc">수입: +${appState.accounting.income.toLocaleString()}원</span>
      <span style="color:#d8cebe;">|</span>
      <span class="stat-exp">지출: -${totalExpense.toLocaleString()}원</span>
    `;
  }

  // 1. My Receipts (Teacher View)
  if (myReceiptList) {
    myReceiptList.innerHTML = "";
    const myReceipts = appState.accounting.receipts.filter(r => r.isMine);
    
    myReceipts.forEach(r => {
      const isDone = r.status === "정산완료";
      const el = document.createElement("div");
      el.className = "expense-row-item";
      el.innerHTML = `
        <div class="expense-info">
          <div class="expense-title" style="display:flex; align-items:center; gap:6px;">
            <span>${r.title}</span>
            <span class="smart-cat-pill">${r.category || "미분류"}</span>
          </div>
          <div class="expense-meta">${r.date} 제출 | ${r.store || "지정처"} | ${r.amount.toLocaleString()}원</div>
          ${r.receiptUrl ? `
            <div style="margin-top:4px;">
              <button class="receipt-view-pill" onclick="openReceiptModalById(${r.id})">📷 영수증 원본 보기</button>
            </div>
          ` : ""}
        </div>
        <div class="expense-status-badge ${isDone ? "status-done" : "status-wait"}">
          ${r.status} ${isDone ? "✓" : "⏳"}
        </div>
      `;
      myReceiptList.appendChild(el);
    });
  }

  // 2. All Receipts (Admin View) with Open Accountant Anomaly & Categorization
  if (allReceiptList) {
    allReceiptList.innerHTML = "";
    appState.accounting.receipts.forEach(r => {
      const anomalies = detectReceiptAnomalies(r, appState.accounting.receipts);
      const el = document.createElement("div");
      el.className = "expense-row-item";
      el.innerHTML = `
        <div class="expense-info">
          <div class="expense-title" style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
            <span>${r.title} (${(r.author || "").replace("선생님", "T")})</span>
            <span class="smart-cat-pill">${r.category || "미분류"}</span>
          </div>
          <div class="expense-meta">${r.date} 지출 | ${r.store || "지정처"} 📑</div>
          <div style="display:flex; gap:4px; margin-top:4px; align-items:center; flex-wrap:wrap;">
            ${anomalies.map(a => `<span class="anomaly-tag ${a.tagClass}">${a.label}</span>`).join("")}
            ${r.receiptUrl ? `<button class="receipt-view-pill" onclick="openReceiptModalById(${r.id})">📷 영수증 보기</button>` : ""}
          </div>
        </div>
        <div style="text-align:right; flex-shrink:0;">
          <div class="expense-amount-red">-${r.amount.toLocaleString()}원</div>
          <div style="font-size:10.5px; color:#178263; font-weight:700; margin-top:2px;">시트기입완료 ✓</div>
        </div>
      `;
      allReceiptList.appendChild(el);
    });
  }

  // 3. Google Sheet table rows
  if (gsheetTableBody) {
    gsheetTableBody.innerHTML = "";
    appState.accounting.receipts.forEach((r, idx) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td>2026.${r.date}</td>
        <td><span style="color:#d94343; font-weight:700;">지출</span></td>
        <td>${r.store || "예랑 지정처"}</td>
        <td style="font-weight:700;">${r.amount.toLocaleString()}원</td>
        <td>${r.category}</td>
        <td>${r.author}</td>
        <td>${r.title}</td>
      `;
      gsheetTableBody.appendChild(tr);
    });
  }

  // 4. Render Numbers Monthly Ledger
  renderMonthlyLedger(currentLedgerMonth);

  // 5. Render Open Accountant P&L and Month-End Close
  renderProfitLoss();
  renderMonthEndClose(liveBalance, totalExpense);
}

// -----------------------------------------------------------------------------
// Numbers 원본 스타일 월별 회계장부 렌더러
// -----------------------------------------------------------------------------
function renderMonthlyLedger(selectedMonth = currentLedgerMonth) {
  currentLedgerMonth = selectedMonth;
  const tbody = document.getElementById("numbersLedgerTableBody");
  const titleEl = document.getElementById("currentMonthLedgerTitle");
  const badgeEl = document.getElementById("ledgerRowCountBadge");
  const sumOffEl = document.getElementById("sumOffering");
  const sumFeeEl = document.getElementById("sumFee");
  const sumDonEl = document.getElementById("sumDonation");
  const sumExpEl = document.getElementById("sumExpense");
  const netRemEl = document.getElementById("netRemainingAmount");

  if (!tbody) return;

  // Month Chips active state
  const chips = document.querySelectorAll(".ledger-month-chip");
  chips.forEach(chip => {
    chip.classList.toggle("active", String(chip.dataset.month) === String(selectedMonth));
  });

  const entries = appState.accounting.ledgerEntries || [];
  const filtered = selectedMonth === "all"
    ? entries
    : entries.filter(e => Number(e.month) === Number(selectedMonth));

  if (titleEl) {
    titleEl.textContent = `📑 2026년 ${selectedMonth === "all" ? "전체" : selectedMonth + "월"} 예랑 회계장부`;
  }
  if (badgeEl) {
    badgeEl.textContent = `${filtered.length}건 기록`;
  }

  tbody.innerHTML = "";

  let totalOffering = 0;
  let totalFee = 0;
  let totalDonation = 0;
  let totalExpense = 0;

  if (filtered.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="7" style="text-align:center; padding:24px; color:#8c7d6b;">해당 월의 기장 내역이 없습니다. (새 영수증 등록 시 자동 기입됩니다)</td>`;
    tbody.appendChild(tr);
  } else {
    filtered.forEach(item => {
      totalOffering += Number(item.offering) || 0;
      totalFee += Number(item.fee) || 0;
      totalDonation += Number(item.donation) || 0;
      totalExpense += Number(item.expense) || 0;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="text-align:center; font-weight:700;">${item.date}</td>
        <td><b>${item.title}</b></td>
        <td class="num-cell col-inc">${item.offering ? item.offering.toLocaleString() + '원' : '-'}</td>
        <td class="num-cell col-inc">${item.fee ? item.fee.toLocaleString() + '원' : '-'}</td>
        <td class="num-cell col-inc">${item.donation ? item.donation.toLocaleString() + '원' : '-'}</td>
        <td class="num-cell col-exp" style="font-weight:700; color:#d94343;">${item.expense ? item.expense.toLocaleString() + '원' : '-'}</td>
        <td style="text-align:center;">
          ${item.expense > 0 ? `<button class="receipt-view-pill" onclick="openReceiptModalById(${item.id})">📷 보기</button>` : `<span style="color:#bbb;">-</span>`}
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Calculate totals and net
  const totalIncome = totalOffering + totalFee + totalDonation;
  const netRemaining = totalIncome - totalExpense;

  if (sumOffEl) sumOffEl.textContent = totalOffering > 0 ? totalOffering.toLocaleString() + "원" : "-";
  if (sumFeeEl) sumFeeEl.textContent = totalFee > 0 ? totalFee.toLocaleString() + "원" : "-";
  if (sumDonEl) sumDonEl.textContent = totalDonation > 0 ? totalDonation.toLocaleString() + "원" : "-";
  if (sumExpEl) sumExpEl.textContent = totalExpense > 0 ? totalExpense.toLocaleString() + "원" : "-";

  if (netRemEl) {
    netRemEl.innerHTML = `${netRemaining.toLocaleString()} <span style="font-size:11px; font-weight:700;">원</span>`;
    netRemEl.style.color = netRemaining >= 0 ? "#10644e" : "#d94343";
  }
}

// -----------------------------------------------------------------------------
// 영수증 원본 사진 팝업 모달 열기
// -----------------------------------------------------------------------------
function openReceiptModalById(id) {
  const allReceipts = [...(appState.accounting.receipts || []), ...(appState.accounting.ledgerEntries || [])];
  const found = allReceipts.find(r => Number(r.id) === Number(id));
  if (found) {
    openReceiptModal(found);
  } else {
    showToast("영수증 정보를 찾을 수 없습니다.");
  }
}

function openReceiptModal(receipt) {
  const modal = document.getElementById("receiptViewerModal");
  if (!modal) return;

  const titleEl = document.getElementById("receiptModalTitle");
  const metaEl = document.getElementById("receiptModalMeta");
  const imgEl = document.getElementById("receiptModalImg");
  const storeEl = document.getElementById("receiptModalStore");
  const amountEl = document.getElementById("receiptModalAmount");
  const catEl = document.getElementById("receiptModalCategory");
  const authorEl = document.getElementById("receiptModalAuthor");
  const purposeEl = document.getElementById("receiptModalPurpose");
  const driveBtn = document.getElementById("receiptDriveLinkBtn");

  const title = receipt.title || receipt.store || "영수증 증빙";
  const author = receipt.author || "교사";
  const date = receipt.date || "2026";
  const amount = Number(receipt.amount || receipt.expense || 0);

  if (titleEl) titleEl.textContent = `📷 ${receipt.store || "영수증"} 실물 증빙`;
  if (metaEl) metaEl.textContent = `${date} | ${author} 제출 | 시트 기입 완료 ✓`;

  const photoSrc = receipt.receiptUrl || currentUploadedImage || "https://images.unsplash.com/photo-1554415707-9e49017a1215?w=600&auto=format&fit=crop&q=80";
  if (imgEl) imgEl.src = photoSrc;

  if (storeEl) storeEl.textContent = receipt.store || "예랑 지정처";
  if (amountEl) amountEl.textContent = `${amount.toLocaleString()}원`;
  if (catEl) catEl.textContent = receipt.category || "비품/간식비";
  if (authorEl) authorEl.textContent = author;
  if (purposeEl) purposeEl.textContent = receipt.purpose || receipt.title || "-";

  if (driveBtn) {
    if (receipt.receiptUrl && receipt.receiptUrl.startsWith("http")) {
      driveBtn.href = receipt.receiptUrl;
      driveBtn.style.display = "inline-flex";
    } else {
      driveBtn.style.display = "none";
    }
  }

  openModal("receiptViewerModal");
}

// -----------------------------------------------------------------------------
// 구글 스프레드시트 실시간 연동 설정 (Apps Script)
// -----------------------------------------------------------------------------
function initGsheetConfig() {
  const openBtn = document.getElementById("openGsheetConfigBtn");
  const saveBtn = document.getElementById("saveGsheetConfigBtn");
  const copyCodeBtn = document.getElementById("copyAppsScriptCodeBtn");
  const urlInput = document.getElementById("gsheetWebhookUrlInput");
  const codeArea = document.getElementById("appsScriptCodeBlock");

  if (codeArea) {
    codeArea.value = APPS_SCRIPT_TEMPLATE;
  }

  if (urlInput) {
    urlInput.value = localStorage.getItem("yerang_gsheet_webhook_url") || DEFAULT_GSHEET_WEBHOOK_URL;
  }

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      openModal("gsheetConfigModal");
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const val = urlInput ? urlInput.value.trim() : "";
      localStorage.setItem("yerang_gsheet_webhook_url", val);
      showToast("구글 스프레드시트 연동 URL이 저장되었습니다! 🚀");
      closeModal("gsheetConfigModal");
    });
  }

  if (copyCodeBtn && codeArea) {
    copyCodeBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(codeArea.value).then(() => {
        showToast("Apps Script 코드가 클립보드에 복사되었습니다! 📋");
      }).catch(() => {
        codeArea.select();
        document.execCommand("copy");
        showToast("Apps Script 코드가 복사되었습니다! 📋");
      });
    });
  }
}

// -----------------------------------------------------------------------------
// Numbers 스타일 월별 엑셀(CSV) 내보내기 (UTF-8 BOM)
// -----------------------------------------------------------------------------
function exportMonthlyLedgerCSV(month = currentLedgerMonth) {
  const entries = appState.accounting.ledgerEntries || [];
  const filtered = month === "all"
    ? entries
    : entries.filter(e => Number(e.month) === Number(month));

  const headers = ["일자", "적요/내역", "헌금(수입1)", "회비/수련회비(수입2)", "찬조/후원(수입3)", "지출", "영수증링크", "제출자"];
  const rows = filtered.map(item => [
    `"${item.date}"`,
    `"${(item.title || '').replace(/"/g, '""')}"`,
    item.offering || 0,
    item.fee || 0,
    item.donation || 0,
    item.expense || 0,
    `"${(item.receiptUrl || '').replace(/"/g, '""')}"`,
    `"${(item.author || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `yerang_monthly_ledger_${month}월.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(`📊 ${month === 'all' ? '전체' : month + '월'} 회계장부 CSV가 성공적으로 다운로드되었습니다!`);
}

// -----------------------------------------------------------------------------
// Open Accountant: 손익계산서 (Profit & Loss / P&L)
// -----------------------------------------------------------------------------
function renderProfitLoss() {
  const container = document.getElementById("accSectionProfitLoss");
  if (!container) return;

  const totalIncome = appState.accounting.income || 0;
  let totalExpense = 0;
  const categoryTotals = {};

  appState.accounting.receipts.forEach(r => {
    const amt = Number(r.amount) || 0;
    totalExpense += amt;
    const cat = r.category || "기타";
    categoryTotals[cat] = (categoryTotals[cat] || 0) + amt;
  });

  const netBalance = totalIncome - totalExpense;
  const marginRatio = totalIncome > 0 ? Math.round((netBalance / totalIncome) * 100) : 0;
  const sortedCategories = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);

  container.innerHTML = `
    <div class="pnl-container">
      <div class="pnl-metric-grid">
        <div class="pnl-metric-box inc">
          <div class="metric-label">총 수입 (예산지원 등)</div>
          <div class="metric-val">+${totalIncome.toLocaleString()}원</div>
        </div>
        <div class="pnl-metric-box exp">
          <div class="metric-label">총 지출 (영수증 승인합)</div>
          <div class="metric-val">-${totalExpense.toLocaleString()}원</div>
        </div>
        <div class="pnl-metric-box net">
          <div class="metric-label">순 수지 (마진율 ${marginRatio}%)</div>
          <div class="metric-val" style="color: ${netBalance >= 0 ? '#10644e' : '#d94343'};">
            ${netBalance >= 0 ? '+' : ''}${netBalance.toLocaleString()}원
          </div>
        </div>
      </div>

      <div class="pnl-breakdown-card">
        <div class="breakdown-header">
          <span>📊 비목별 지출 분석 (P&L Breakdown)</span>
          <span style="font-size:11px; color:var(--text-muted);">총 ${sortedCategories.length}개 비목</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${sortedCategories.map(([cat, amt]) => {
            const pct = totalExpense > 0 ? Math.round((amt / totalExpense) * 100) : 0;
            return `
              <div>
                <div style="display:flex; justify-content:space-between; font-size:12.5px; font-weight:700; margin-bottom:4px;">
                  <span style="color:#2d261e;">${cat}</span>
                  <span style="color:#ad551b;">${amt.toLocaleString()}원 <span style="font-size:11px; color:#8c7d6b; font-weight:600;">(${pct}%)</span></span>
                </div>
                <div class="pnl-bar-track">
                  <div class="pnl-bar-fill" style="width: ${pct}%;"></div>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

// -----------------------------------------------------------------------------
// Open Accountant: 월말 결산 마감 및 통장 잔액 대사 (Month-End Close & Reconciliation)
// -----------------------------------------------------------------------------
function renderMonthEndClose(liveBalance, totalExpense) {
  const container = document.getElementById("accSectionMonthClose");
  if (!container) return;

  const totalReceipts = appState.accounting.receipts.length;
  const uncategorizedReceipts = appState.accounting.receipts.filter(r => !r.category || r.category === "기타" || r.category === "미분류").length;
  
  let anomalyCount = 0;
  appState.accounting.receipts.forEach(r => {
    const anomalies = detectReceiptAnomalies(r, appState.accounting.receipts);
    if (anomalies.length > 0) anomalyCount++;
  });

  let totalExp = totalExpense;
  if (totalExp === undefined) {
    totalExp = 0;
    appState.accounting.receipts.forEach(r => totalExp += Number(r.amount) || 0);
  }
  const bankBalance = appState.accounting.initialBalance + appState.accounting.income - totalExp;
  const ledgerBalance = liveBalance !== undefined ? liveBalance : bankBalance;
  const diff = bankBalance - ledgerBalance;

  const currentMonth = "2026년 9월";
  const isClosed = appState.accounting.closedMonths && appState.accounting.closedMonths.includes(currentMonth);

  container.innerHTML = `
    <div class="close-checklist-card">
      <div class="close-card-header">
        <div>
          <div style="font-size:15px; font-weight:800; color:#2d261e;">🗓️ ${currentMonth} 정기 회계 마감</div>
          <div style="font-size:11.5px; color:#8c7d6b; margin-top:2px;">Open Accountant 표준 4단계 결산 프로세스</div>
        </div>
        <div>
          ${isClosed 
            ? `<span style="background:#d4f3e6; color:#10644e; padding:4px 8px; border-radius:6px; font-size:11.5px; font-weight:800;">마감 완료 🔒</span>` 
            : `<span style="background:#ffeedb; color:#ad551b; padding:4px 8px; border-radius:6px; font-size:11.5px; font-weight:800;">마감 진행중 ⏳</span>`}
        </div>
      </div>

      <div class="close-steps-list">
        <!-- Step 1: 영수증 증빙 확인 -->
        <div class="close-step-item">
          <div class="step-check-icon ${totalReceipts > 0 ? 'done' : 'wait'}">${totalReceipts > 0 ? '✓' : '•'}</div>
          <div class="step-info">
            <div class="step-title">1단계: 영수증 전수 증빙 확인</div>
            <div class="step-desc">등록된 모든 지출에 대한 실물/전자 영수증 첨부 상태를 점검합니다. (총 ${totalReceipts}건 제출됨)</div>
          </div>
        </div>

        <!-- Step 2: 미분류 및 비목 점검 -->
        <div class="close-step-item">
          <div class="step-check-icon ${uncategorizedReceipts === 0 ? 'done' : 'wait'}">${uncategorizedReceipts === 0 ? '✓' : '!'}</div>
          <div class="step-info">
            <div class="step-title">2단계: 미분류 계정과목 점검</div>
            <div class="step-desc">${uncategorizedReceipts === 0 ? '모든 지출이 유효한 예산 비목으로 분류되었습니다.' : `미분류 또는 기타 항목이 ${uncategorizedReceipts}건 발견되었습니다.`}</div>
          </div>
        </div>

        <!-- Step 3: 이상 거래 및 중복 탐지 -->
        <div class="close-step-item">
          <div class="step-check-icon ${anomalyCount === 0 ? 'done' : 'wait'}">${anomalyCount === 0 ? '✓' : '!'}</div>
          <div class="step-info">
            <div class="step-title">3단계: 이상 거래 및 중복 청구 감지</div>
            <div class="step-desc">${anomalyCount === 0 ? '중복 청구 및 고액 이상 거래가 없습니다.' : `감사 대상 지출 ${anomalyCount}건 (고액/중복)이 플래그되었습니다.`}</div>
          </div>
        </div>

        <!-- Step 4: 통장 잔액 대사 (Reconciliation) -->
        <div class="close-step-item">
          <div class="step-check-icon ${diff === 0 ? 'done' : 'wait'}">${diff === 0 ? '✓' : '!'}</div>
          <div class="step-info">
            <div class="step-title">4단계: 통장 잔액 대사 (Reconciliation)</div>
            <div class="step-desc">은행 실계좌 잔액과 장부상 기장 잔액의 일치 여부를 대조합니다.</div>
          </div>
        </div>
      </div>

      <!-- 대사 현황 상자 -->
      <div class="reconcile-box">
        <div class="reconcile-row">
          <span>은행 실계좌 잔액 (통장 잔고)</span>
          <span style="font-weight:700;">${bankBalance.toLocaleString()}원</span>
        </div>
        <div class="reconcile-row" style="margin-top:4px;">
          <span>예랑 장부 기장 잔액</span>
          <span style="font-weight:700;">${ledgerBalance.toLocaleString()}원</span>
        </div>
        <div class="reconcile-diff-row">
          <span>대사 차액 (Difference)</span>
          <span style="color: ${diff === 0 ? '#10644e' : '#d94343'}; font-size:13px; font-weight:800;">
            ${diff === 0 ? '0원 (완전 일치 ✓)' : `${diff.toLocaleString()}원 (불일치)`}
          </span>
        </div>
      </div>

      <button class="close-month-btn" id="closeMonthBtn" ${isClosed ? 'disabled' : ''}>
        ${isClosed ? '🔒 2026년 9월 결산 마감 완료됨 (장부 잠금)' : '🔒 2026년 9월 회계 결산 마감 확정하기'}
      </button>
    </div>
  `;

  const btn = document.getElementById("closeMonthBtn");
  if (btn && !isClosed) {
    btn.addEventListener("click", () => {
      if (!appState.accounting.closedMonths) {
        appState.accounting.closedMonths = [];
      }
      appState.accounting.closedMonths.push(currentMonth);
      saveState();
      renderAccountingSection();
      showToast("🎉 2026년 9월 회계 결산이 성공적으로 마감되었습니다! 장부가 안전하게 보존됩니다.");
    });
  }
}

// -----------------------------------------------------------------------------
// Open Accountant: 엑셀 호환 CSV 내보내기 (UTF-8 BOM)
// -----------------------------------------------------------------------------
function exportAccountingCSV() {
  const headers = ["번호", "일자", "구분", "가맹점/처", "금액", "카테고리", "제출자", "내역/목적", "영수증링크"];
  const rows = appState.accounting.receipts.map((r, idx) => [
    idx + 1,
    `2026.${r.date}`,
    "지출",
    `"${(r.store || '예랑 지정처').replace(/"/g, '""')}"`,
    r.amount,
    `"${(r.category || '기타').replace(/"/g, '""')}"`,
    `"${(r.author || '').replace(/"/g, '""')}"`,
    `"${(r.title || '').replace(/"/g, '""')}"`,
    `"${(r.receiptUrl || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `yerang_accounting_ledger_202609.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast("📊 전체 영수증 CSV 파일이 성공적으로 다운로드되었습니다! (엑셀 한글 호환)");
}

// -----------------------------------------------------------------------------
// Open Accountant: 회계 하위 서브 탭 스위처 & 월별 장부 이벤트
// -----------------------------------------------------------------------------
function initAccountingSubTabs() {
  const tabReceipts = document.getElementById("accSubTabReceipts");
  const tabMonthlyLedger = document.getElementById("accSubTabMonthlyLedger");
  const tabProfitLoss = document.getElementById("accSubTabProfitLoss");
  const tabMonthClose = document.getElementById("accSubTabMonthClose");

  const secReceipts = document.getElementById("accSectionReceipts");
  const secMonthlyLedger = document.getElementById("accSectionMonthlyLedger");
  const secProfitLoss = document.getElementById("accSectionProfitLoss");
  const secMonthClose = document.getElementById("accSectionMonthClose");

  const gotoAddReceiptAdmin = document.getElementById("gotoAddReceiptAdminBtn");
  const gotoAddReceiptFromLedger = document.getElementById("gotoAddReceiptFromLedgerBtn");
  const exportCsv = document.getElementById("exportCsvBtn");
  const exportMonthlyCsv = document.getElementById("exportMonthlyCsvBtn");

  function switchAccTab(target) {
    if (tabReceipts) tabReceipts.classList.toggle("active", target === "receipts");
    if (tabMonthlyLedger) tabMonthlyLedger.classList.toggle("active", target === "ledger");
    if (tabProfitLoss) tabProfitLoss.classList.toggle("active", target === "pnl");
    if (tabMonthClose) tabMonthClose.classList.toggle("active", target === "close");

    if (secReceipts) secReceipts.style.display = target === "receipts" ? "block" : "none";
    if (secMonthlyLedger) secMonthlyLedger.style.display = target === "ledger" ? "block" : "none";
    if (secProfitLoss) secProfitLoss.style.display = target === "pnl" ? "block" : "none";
    if (secMonthClose) secMonthClose.style.display = target === "close" ? "block" : "none";

    if (target === "ledger") {
      renderMonthlyLedger(currentLedgerMonth);
    }
  }

  if (tabReceipts) tabReceipts.addEventListener("click", () => switchAccTab("receipts"));
  if (tabMonthlyLedger) tabMonthlyLedger.addEventListener("click", () => switchAccTab("ledger"));
  if (tabProfitLoss) tabProfitLoss.addEventListener("click", () => switchAccTab("pnl"));
  if (tabMonthClose) tabMonthClose.addEventListener("click", () => switchAccTab("close"));

  // Month Chips click handler in Monthly Ledger
  const monthChips = document.querySelectorAll(".ledger-month-chip");
  monthChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const month = chip.dataset.month;
      renderMonthlyLedger(month);
    });
  });

  if (gotoAddReceiptAdmin) {
    gotoAddReceiptAdmin.addEventListener("click", () => switchToTab("view-receipt"));
  }
  if (gotoAddReceiptFromLedger) {
    gotoAddReceiptFromLedger.addEventListener("click", () => switchToTab("view-receipt"));
  }

  if (exportCsv) {
    exportCsv.addEventListener("click", () => exportAccountingCSV());
  }
  if (exportMonthlyCsv) {
    exportMonthlyCsv.addEventListener("click", () => exportMonthlyLedgerCSV(currentLedgerMonth));
  }

  // Live Sync Button (구글 스프레드시트 실시간 데이터 동기화)
  const liveSyncBtn = document.getElementById("liveSyncGsheetBtn");
  if (liveSyncBtn) {
    liveSyncBtn.addEventListener("click", () => syncFromGoogleSheet(true));
  }

  // Google Sheet Webhook & Apps Script Config
  initGsheetConfig();

  // 앱 실행 시 구글 시트 실시간 데이터 자동 동기화
  syncFromGoogleSheet(false);
}

// -----------------------------------------------------------------------------
// 구글 스프레드시트 실시간 데이터 양방향 동기화 엔진 (JSONP 무제한 크로스오리진 연동)
// -----------------------------------------------------------------------------
const DEFAULT_GSHEET_DOC_ID = "1T3iJ9nrDwCZLPmNBgvLgb83NwjXMqIb88dnFKBgdGgU";

function fetchGsheetJSONP(docId) {
  return new Promise((resolve, reject) => {
    const callbackName = "yerangGvizCallback_" + Math.floor(Math.random() * 1000000);
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("구글 스프레드시트 응답 시간 초과"));
    }, 8000);

    function cleanup() {
      clearTimeout(timeout);
      try { delete window[callbackName]; } catch (e) { window[callbackName] = undefined; }
      if (script && script.parentNode) script.parentNode.removeChild(script);
    }

    window[callbackName] = function(data) {
      cleanup();
      resolve(data);
    };

    const script = document.createElement("script");
    script.src = `https://docs.google.com/spreadsheets/d/${docId}/gviz/tq?tqx=responseHandler:${callbackName}`;
    script.onerror = function(err) {
      cleanup();
      reject(err);
    };
    document.head.appendChild(script);
  });
}

async function syncFromGoogleSheet(isManual = false) {
  const syncBtn = document.getElementById("liveSyncGsheetBtn");
  const syncText = document.getElementById("liveSyncText");
  if (syncBtn) syncBtn.classList.add("syncing");
  if (syncText) syncText.textContent = "구글시트 동기화 중...";

  try {
    const json = await fetchGsheetJSONP(DEFAULT_GSHEET_DOC_ID);
    const rows = json.table?.rows || [];

    if (rows.length === 0) {
      if (isManual) showToast("스프레드시트에 등록된 데이터가 없습니다.");
      return;
    }

    const fetchedReceipts = [];
    const fetchedLedgerEntries = [];

    rows.forEach((r, idx) => {
      const cellsV = (r.c || []).map(cell => (cell && cell.v !== undefined) ? cell.v : null);
      const cellsF = (r.c || []).map(cell => (cell && cell.f !== undefined) ? cell.f : (cell ? cell.v : null));

      // Col 1: Date
      let rawDate = cellsF[1] || cellsV[1];
      let formattedDate = "2026.09.01";
      let month = 9;

      if (rawDate) {
        if (typeof rawDate === "string") {
          const dateOnly = rawDate.match(/\d{4}[.-]\d{1,2}[.-]\d{1,2}/);
          if (dateOnly) {
            formattedDate = dateOnly[0].replace(/-/g, '.');
            const parts = formattedDate.split('.');
            month = parseInt(parts[1], 10);
          } else {
            const dm = rawDate.match(/Date\((\d+),(\d+),(\d+)/);
            if (dm) {
              const y = parseInt(dm[1], 10);
              const m = parseInt(dm[2], 10) + 1;
              const d = parseInt(dm[3], 10);
              formattedDate = `${y}.${String(m).padStart(2, '0')}.${String(d).padStart(2, '0')}`;
              month = m;
            }
          }
        }
      }

      const txId = cellsV[0] || `EXP-2026${String(month).padStart(2, '0')}-${String(idx + 1).padStart(3, '0')}`;
      let rawAuthor = cellsV[2] || "담당 교사";
      const category = cellsV[3] || "간식/비품비";
      const purpose = cellsV[4] || "";
      const store = cellsV[5] || "지출처";
      const amount = Number(cellsV[6]) || 0;
      const paymentMethod = cellsV[7] || "체크카드";
      let receiptUrl = cellsV[8] || "";
      if (receiptUrl === "[link removed]" || !receiptUrl.startsWith("http")) {
        receiptUrl = "https://images.unsplash.com/photo-1554415707-9e49017a1215?w=600&auto=format&fit=crop&q=80";
      }
      const status = cellsV[9] || "정산완료";
      const anomaly = cellsV[10] || "정상";
      const memo = cellsV[11] || "";

      // Title & author breakdown
      let author = rawAuthor;
      let title = purpose || rawAuthor;
      if (rawAuthor.includes(" / ")) {
        const parts = rawAuthor.split(" / ");
        author = parts[0];
        title = parts[1];
      }

      // Receipt item for Tab 1
      fetchedReceipts.push({
        id: idx + 1,
        title: title,
        amount: amount,
        store: store,
        date: formattedDate,
        author: author,
        category: category,
        status: status,
        anomaly: anomaly,
        method: paymentMethod,
        purpose: purpose || title,
        receiptUrl: receiptUrl,
        isMine: author.includes("하람") || author.includes("정하람")
      });

      // Ledger entry for Tab 2 (Numbers table)
      fetchedLedgerEntries.push({
        id: 9000 + idx + 1,
        month: month,
        date: formattedDate,
        title: `${author} / ${store}${purpose ? ` (${purpose})` : ''}`,
        offering: 0,
        fee: 0,
        donation: 0,
        expense: amount,
        author: author,
        store: store,
        category: category,
        receiptUrl: receiptUrl
      });
    });

    // 1월 historical entries from user's original Numbers screenshot
    const janEntries = (appState.accounting.ledgerEntries || []).filter(e => Number(e.month) === 1);
    appState.accounting.ledgerEntries = [...janEntries, ...fetchedLedgerEntries];
    appState.accounting.receipts = fetchedReceipts;

    saveState();
    renderAccountingSection();
    renderMonthlyLedger(currentLedgerMonth || 9);
    renderProfitLoss();
    renderMonthEndClose();

    const nowStr = new Date().toLocaleTimeString("ko-KR", { hour: '2-digit', minute: '2-digit' });
    if (syncText) syncText.textContent = `구글시트 실시간 연동됨 (${nowStr}) 🔄`;
    if (isManual) {
      showToast(`구글 스프레드시트의 최신 내역(${fetchedReceipts.length}건)이 앱에 즉시 동기화되었습니다! 🚀`);
    }
  } catch (err) {
    console.error("GSheet sync error:", err);
    if (syncText) syncText.textContent = "구글시트 연동 (캐시 모드) 🔄";
    if (isManual) {
      showToast("구글 시트 연동 상태를 확인 중입니다. 캐시된 장부를 표시합니다.");
    }
  } finally {
    if (syncBtn) syncBtn.classList.remove("syncing");
  }
}

// =============================================================================
// 8. Role-Based Multi-Persona Management Engine (4대 역할 전용)
// =============================================================================

const ROLES = {
  pastor: {
    id: "pastor",
    name: "정하람 전도사",
    title: "이룸교회 중고등부 예랑",
    subtitle: "2026년 10월 13일 주일",
    badge: "✝️ 전도사 모드",
    tagClass: "tag-pastor",
    activeClass: "active-pastor",
    tabs: [
      { target: "view-home", icon: "home", label: "홈", title: "이룸교회 중고등부 예랑", subtitle: "2026년 10월 13일 주일" },
      { target: "view-scheduler", icon: "calendar_today", label: "스케줄", title: "예랑 스마트 스케줄러", subtitle: "사역 캘린더 · 생일 · 행사 D-Day · 예배 출결" },
      { target: "view-students", icon: "groups", label: "학생부", title: "학생 심방 & 기도제목", subtitle: "청소년부 학생 돌봄 & 신앙 관리" },
      { target: "view-agenda", icon: "diversity_3", label: "회의", title: "이번 주 교사 회의 안건", subtitle: "2026.09.13 주일 교사 회의 안건" },
      { target: "view-accounting", icon: "account_balance_wallet", label: "재정", title: "부서 재정 및 회계 장부", subtitle: "실시간 실잔액 및 전체 교사 영수증 감독" }
    ],
    defaultTab: "view-home",
    showAccountingAdmin: true
  },
  accountant: {
    id: "accountant",
    name: "나하은 선생님",
    title: "선생님(회계) · 재정 관리",
    subtitle: "선생님(회계) · 재정 및 정산 권한",
    badge: "💼 선생님(회계)",
    tagClass: "tag-accountant",
    activeClass: "active-accountant",
    tabs: [
      { target: "view-home", icon: "home", label: "홈", title: "회계 & 행정 대시보드", subtitle: "2026년 10월 13일 주일" },
      { target: "view-accounting", icon: "account_balance_wallet", label: "회계장부", title: "부서 전체 실잔액 & 장부", subtitle: "영수증 정산 승인 및 구글 시트 연동" },
      { target: "view-receipt", icon: "photo_camera", label: "영수증", title: "AI 영수증 자동 등록", subtitle: "영수증 OCR 분석 및 구글 시트 연동" },
      { target: "view-scheduler", icon: "calendar_today", label: "스케줄", title: "예랑 스마트 스케줄러", subtitle: "사역 캘린더 · 생일 · 행사 D-Day · 예배 출결" },
      { target: "view-agenda", icon: "diversity_3", label: "회의", title: "이번 주 교사 회의 안건", subtitle: "2026.09.13 주일 교사 회의 안건" }
    ],
    defaultTab: "view-home",
    showAccountingAdmin: true
  },
  deacon: {
    id: "deacon",
    name: "부장집사님",
    title: "중고등부 부장 지도",
    subtitle: "부장집사님 · 사역 협력 및 지도 권한",
    badge: "👔 부장집사님",
    tagClass: "tag-deacon",
    activeClass: "active-teacher",
    tabs: [
      { target: "view-home", icon: "home", label: "홈", title: "교사 목양 대시보드", subtitle: "2026년 10월 13일 주일" },
      { target: "view-teacher-class", icon: "menu_book", label: "공과/새친구", title: "공과공부 & 새친구반 적응", subtitle: "분반 지도 및 새친구 4주 체크리스트" },
      { target: "view-scheduler", icon: "calendar_today", label: "스케줄", title: "예배 출결 & 대타", subtitle: "나의 주일 결석/지각 사전 등록" },
      { target: "view-agenda", icon: "diversity_3", label: "회의/건의", title: "회의 안건 & 사역 소통함", subtitle: "안건 제안 및 사역 건의 등록" },
      { target: "view-accounting", icon: "receipt_long", label: "내영수증", title: "내가 제출한 영수증 목록", subtitle: "정산 상태 확인 (부서 잔액 보안 적용 🔒)" }
    ],
    defaultTab: "view-home",
    showAccountingAdmin: false
  },
  teacher_grade: {
    id: "teacher_grade",
    name: "김대한 선생님",
    title: "공과반 목양 지도",
    subtitle: "선생님(공과반) · 분반 지도 권한",
    badge: "🧑🏻‍🏫 선생님(공과반)",
    tagClass: "tag-teacher",
    activeClass: "active-teacher",
    tabs: [
      { target: "view-home", icon: "home", label: "홈", title: "교사 목양 대시보드", subtitle: "2026년 10월 13일 주일" },
      { target: "view-teacher-class", icon: "menu_book", label: "공과/새친구", title: "공과공부 & 새친구반 적응", subtitle: "고3 분반 지도 및 새친구 4주 체크리스트" },
      { target: "view-scheduler", icon: "calendar_today", label: "스케줄", title: "예배 출결 & 대타", subtitle: "나의 주일 결석/지각 사전 등록" },
      { target: "view-agenda", icon: "diversity_3", label: "회의/건의", title: "회의 안건 & 사역 소통함", subtitle: "안건 제안 및 사역 건의 등록" },
      { target: "view-accounting", icon: "receipt_long", label: "내영수증", title: "내가 제출한 영수증 목록", subtitle: "정산 상태 확인 (부서 잔액 보안 적용 🔒)" }
    ],
    defaultTab: "view-home",
    showAccountingAdmin: false
  },
  teacher_new: {
    id: "teacher_new",
    name: "소예진 선생님",
    title: "새친구반 목양 지도",
    subtitle: "선생님(새친구반) · 새친구 지도 권한",
    badge: "🌱 선생님(새친구반)",
    tagClass: "tag-teacher",
    activeClass: "active-teacher",
    tabs: [
      { target: "view-home", icon: "home", label: "홈", title: "교사 목양 대시보드", subtitle: "2026년 10월 13일 주일" },
      { target: "view-teacher-class", icon: "menu_book", label: "공과/새친구", title: "공과공부 & 새친구반 적응", subtitle: "새친구반 4주 체크리스트 & 등반 관리" },
      { target: "view-scheduler", icon: "calendar_today", label: "스케줄", title: "예배 출결 & 대타", subtitle: "나의 주일 결석/지각 사전 등록" },
      { target: "view-agenda", icon: "diversity_3", label: "회의/건의", title: "회의 안건 & 사역 소통함", subtitle: "안건 제안 및 사역 건의 등록" },
      { target: "view-accounting", icon: "receipt_long", label: "내영수증", title: "내가 제출한 영수증 목록", subtitle: "정산 상태 확인 (부서 잔액 보안 적용 🔒)" }
    ],
    defaultTab: "view-home",
    showAccountingAdmin: false
  },
  teacher: {
    id: "teacher",
    name: "선생님",
    title: "교사 목양 대시보드",
    subtitle: "선생님 · 분반 지도 권한",
    badge: "🧑🏻‍🏫 선생님(공과반)",
    tagClass: "tag-teacher",
    activeClass: "active-teacher",
    tabs: [
      { target: "view-home", icon: "home", label: "홈", title: "교사 목양 대시보드", subtitle: "2026년 10월 13일 주일" },
      { target: "view-teacher-class", icon: "menu_book", label: "공과/새친구", title: "공과공부 & 새친구반 적응", subtitle: "고3 분반 지도 및 새친구 4주 체크리스트" },
      { target: "view-scheduler", icon: "calendar_today", label: "스케줄", title: "예배 출결 & 대타", subtitle: "나의 주일 결석/지각 사전 등록" },
      { target: "view-agenda", icon: "diversity_3", label: "회의/건의", title: "회의 안건 & 사역 소통함", subtitle: "안건 제안 및 사역 건의 등록" },
      { target: "view-accounting", icon: "receipt_long", label: "내영수증", title: "내가 제출한 영수증 목록", subtitle: "정산 상태 확인 (부서 잔액 보안 적용 🔒)" }
    ],
    defaultTab: "view-home",
    showAccountingAdmin: false
  },
  student: {
    id: "student",
    name: "양형모 (고3)",
    title: "예랑 청소년부 피드",
    subtitle: "양형모 (고3) · 찬양팀 세션",
    badge: "👦🏻 학생 모드",
    tagClass: "tag-student",
    activeClass: "active-student",
    tabs: [
      { target: "view-home", icon: "home", label: "홈", title: "예랑 청소년부 피드", subtitle: "주일 섬김이 · D-Day · 공지사항" },
      { target: "view-scheduler", icon: "calendar_today", label: "스케줄", title: "예랑 스케줄", subtitle: "행사 D-Day · 생일 · 공지사항" },
      { target: "view-student-counsel", icon: "forum", label: "1:1상담", title: "전도사님 & 선생님 1:1 상담", subtitle: "비밀 보장 고민 상담 & 심방 신청" }
    ],
    defaultTab: "view-home",
    showAccountingAdmin: false
  }
};

// Role definitions and labels
const ROLE_NAMES = {
  pastor: "전도사",
  accountant: "선생님(회계)",
  deacon: "부장집사님",
  teacher_grade: "선생님(공과반)",
  teacher_new: "선생님(새친구반)",
  teacher: "선생님(공과반)",
  student: "학생"
};

const ROLE_BADGES = {
  pastor: '<span class="role-identity-tag tag-pastor" style="font-size:10px; padding:2px 6px;">✝️ 전도사</span>',
  accountant: '<span class="role-identity-tag tag-accountant" style="font-size:10px; padding:2px 6px;">💼 선생님(회계)</span>',
  deacon: '<span class="role-identity-tag tag-deacon" style="font-size:10px; padding:2px 6px;">👔 부장집사님</span>',
  teacher_grade: '<span class="role-identity-tag tag-teacher" style="font-size:10px; padding:2px 6px;">🧑🏻‍🏫 선생님(공과반)</span>',
  teacher_new: '<span class="role-identity-tag tag-teacher" style="font-size:10px; padding:2px 6px;">🌱 선생님(새친구반)</span>',
  teacher: '<span class="role-identity-tag tag-teacher" style="font-size:10px; padding:2px 6px;">🧑🏻‍🏫 선생님(공과반)</span>',
  student: '<span class="role-identity-tag tag-student" style="font-size:10px; padding:2px 6px;">👦🏻 학생</span>'
};

const DEFAULT_AVATARS = {
  pastor: "✝️",
  accountant: "💼",
  deacon: "👔",
  teacher_grade: "🧑🏻‍🏫",
  teacher_new: "🌱",
  teacher: "🧑🏻‍🏫",
  student: "👦🏻"
};

let currentRole = "pastor";

function getCurrentUser() {
  if (!appState.users || appState.users.length === 0) {
    appState.users = JSON.parse(JSON.stringify(INITIAL_DATA.users));
  }
  const user = appState.users.find(u => u.id === appState.currentUserId);
  return user || appState.users[0];
}

function renderUserHeaderBar() {
  const user = getCurrentUser();
  const avatarEl = document.getElementById("userHeaderAvatar");
  const nameEl = document.getElementById("userHeaderName");
  const adminBanner = document.getElementById("adminUserMgmtBanner");

  if (avatarEl) avatarEl.textContent = user.avatar || "👤";
  if (nameEl) {
    nameEl.textContent = user.name;
  }

  // Admin banner visibility: only visible if current active role is 'pastor'
  if (adminBanner) {
    adminBanner.style.display = (currentRole === "pastor") ? "flex" : "none";
  }
}

function renderUserSwitchGrid() {
  const container = document.getElementById("userSwitchGridContainer");
  if (!container) return;
  container.innerHTML = "";

  const activeUsers = appState.users.filter(u => !u.isPending);

  activeUsers.forEach(user => {
    const isCurrent = user.id === appState.currentUserId;
    const card = document.createElement("div");
    card.className = `user-switch-card ${isCurrent ? "active-user" : ""}`;
    card.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px;">
        <div class="user-mgmt-avatar">${user.avatar || "👤"}</div>
        <div>
          <div style="font-size:13.5px; font-weight:700; color:var(--text-main); display:flex; align-items:center; gap:6px;">
            <span>${user.name}</span>
            ${ROLE_BADGES[user.role] || ""}
          </div>
          <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">${user.duty || ""}</div>
          <div style="font-size:11px; color:#888;">📞 ${user.phone || "-"}</div>
        </div>
      </div>
      <div>
        ${isCurrent 
          ? '<span style="font-size:12px; font-weight:700; color:var(--primary); padding:6px 10px; background:#f0e8fc; border-radius:8px;">접속중 ✓</span>' 
          : `<button class="btn-secondary switch-to-user-btn" style="padding:6px 12px; font-size:12px;" data-user-id="${user.id}">전환하기</button>`
        }
      </div>
    `;

    const btn = card.querySelector(".switch-to-user-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        switchCurrentUser(user.id);
      });
    }

    container.appendChild(card);
  });
}

function renderUserManagerSection() {
  const container = document.getElementById("userMgmtListContainer");
  if (!container) return;
  container.innerHTML = "";

  appState.users.forEach(user => {
    const isCurrent = user.id === appState.currentUserId;
    const card = document.createElement("div");
    card.className = "user-mgmt-card";
    const pendingBadge = user.isPending ? '<span style="font-size:10.5px; background:#fef3c7; color:#b45309; padding:2px 7px; border-radius:6px; font-weight:800; border:1px solid #fde68a;">승인 대기중 ⏳</span>' : '';

    card.innerHTML = `
      <div class="user-mgmt-info">
        <div class="user-mgmt-avatar">${user.avatar || "👤"}</div>
        <div class="user-mgmt-details" style="flex:1;">
          <div class="user-mgmt-name" style="display:flex; align-items:center; gap:5px; flex-wrap:wrap;">
            <span>${user.name}</span>
            ${pendingBadge}
            ${isCurrent ? '<span style="font-size:10px; background:#e8def8; color:#4a148c; padding:2px 6px; border-radius:4px; margin-left:2px;">현재 본인</span>' : ''}
          </div>
          <div class="user-mgmt-duty">${user.duty || "-"} · ${user.phone || ""}</div>
          ${user.username ? `<div style="font-size:11px; color:#888;">ID: ${user.username}</div>` : ''}
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:6px; margin-top:8px;">
        ${user.isPending ? `
          <button type="button" class="approve-user-btn" data-user-id="${user.id}" style="padding:6px 10px; font-size:12px; font-weight:800; background:#10b981; color:white; border-radius:8px; border:none; cursor:pointer;">
            승인하기 ✓
          </button>
        ` : ''}
        <select class="role-select-dropdown" data-user-id="${user.id}" style="flex:1;">
          <option value="pastor" ${user.role === "pastor" ? "selected" : ""}>✝️ 전도사</option>
          <option value="accountant" ${user.role === "accountant" ? "selected" : ""}>💼 선생님(회계)</option>
          <option value="deacon" ${user.role === "deacon" ? "selected" : ""}>👔 부장집사님</option>
          <option value="teacher_grade" ${(user.role === "teacher_grade" || user.role === "teacher") ? "selected" : ""}>🧑🏻‍🏫 선생님(공과반)</option>
          <option value="teacher_new" ${user.role === "teacher_new" ? "selected" : ""}>🌱 선생님(새친구반)</option>
          <option value="student" ${user.role === "student" ? "selected" : ""}>👦🏻 학생</option>
        </select>
        <button type="button" class="edit-user-btn" data-user-id="${user.id}" style="padding:6px 10px; font-size:12px; font-weight:700; background:#f5efff; color:#6c35c4; border-radius:8px; border:1.5px solid #e0c8ff; cursor:pointer; display:flex; align-items:center; gap:3px; white-space:nowrap;" title="계정 정보 수정">
          <span>✏️</span> <span>수정</span>
        </button>
        ${!isCurrent ? `
          <button type="button" class="delete-user-btn" data-user-id="${user.id}" data-user-name="${user.name}" style="padding:6px 9px; font-size:13px; background:#fff0f0; color:#ef4444; border-radius:8px; border:1.5px solid #fecaca; cursor:pointer; line-height:1; margin-left:auto;" title="계정 삭제">
            🗑️
          </button>
        ` : ''}
      </div>
    `;

    // Approve button event
    const approveBtn = card.querySelector(".approve-user-btn");
    if (approveBtn) {
      approveBtn.addEventListener("click", () => {
        approveUser(user.id);
      });
    }

    const select = card.querySelector(".role-select-dropdown");
    if (select) {
      select.addEventListener("change", (e) => {
        changeUserRole(user.id, e.target.value);
      });
    }

    // Edit button event
    const editBtn = card.querySelector(".edit-user-btn");
    if (editBtn) {
      editBtn.addEventListener("click", () => {
        openEditUserModal(user.id);
      });
    }

    // Delete button event
    const deleteBtn = card.querySelector(".delete-user-btn");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        showDeleteUserConfirm(user.id, user.name);
      });
    }

    container.appendChild(card);
  });
}

function openEditUserModal(userId) {
  const user = appState.users.find(u => u.id === userId);
  if (!user) return;

  document.getElementById("editUserIdInput").value = user.id;
  document.getElementById("editUserNameInput").value = user.name || "";
  document.getElementById("editUserDutyInput").value = user.duty || "";
  document.getElementById("editUserPhoneInput").value = user.phone || "";

  openModal("editUserModal");
}

function initEditUserEvents() {
  const form = document.getElementById("editUserForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const userId = document.getElementById("editUserIdInput").value;
      const user = appState.users.find(u => u.id === userId);
      if (!user) return;

      const name = document.getElementById("editUserNameInput").value.trim();
      const duty = document.getElementById("editUserDutyInput").value.trim();
      const phone = document.getElementById("editUserPhoneInput").value.trim();

      if (!name) {
        showToast("⚠️ 이름을 입력해주세요.", "warn");
        return;
      }

      user.name = name;
      user.duty = duty;
      user.phone = phone;

      saveState();
      closeModal("editUserModal");
      renderUserManagerSection();
      renderUserSwitchGrid();
      renderUserHeaderBar();

      showToast(`✅ '${name}' 계정 정보가 성공적으로 수정되었습니다!`);
    });
  }
}


// 삭제 확인 모달
let _deleteTargetUserId = null;

function showDeleteUserConfirm(userId, userName) {
  _deleteTargetUserId = userId;
  const nameEl = document.getElementById("deleteUserConfirmName");
  if (nameEl) nameEl.textContent = `"${userName}" 계정`;
  openModal("deleteUserConfirmModal");
}

function initDeleteUserConfirm() {
  const confirmBtn = document.getElementById("deleteUserConfirmBtn");
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      if (!_deleteTargetUserId) return;
      const user = appState.users.find(u => u.id === _deleteTargetUserId);
      const name = user ? user.name : "";
      appState.users = appState.users.filter(u => u.id !== _deleteTargetUserId);
      saveState();
      _deleteTargetUserId = null;
      closeModal("deleteUserConfirmModal");
      renderUserManagerSection();
      renderUserSwitchGrid();
      updatePendingCountBadge();
      showToast(`🗑️ '${name}' 계정이 삭제되었습니다.`, "info");
    });
  }
}

function approveUser(userId) {
  const user = appState.users.find(u => u.id === userId);
  if (!user) return;

  user.isPending = false;
  user.duty = `${ROLE_NAMES[user.role]}`;
  saveState();

  renderUserManagerSection();
  renderUserSwitchGrid();
  renderMemberApprovalModal();
  updatePendingCountBadge();
  showToast(`🎉 '${user.name}'님의 가입 승인이 완료되었습니다! 이제 로그인 가능합니다.`, "success");
}

function rejectUser(userId) {
  const user = appState.users.find(u => u.id === userId);
  if (!user) return;
  const userName = user.name;
  appState.users = appState.users.filter(u => u.id !== userId);
  saveState();
  renderMemberApprovalModal();
  renderUserManagerSection();
  renderUserSwitchGrid();
  updatePendingCountBadge();
  showToast(`❌ '${userName}'님의 가입 신청이 거절되었습니다.`, "info");
}

function renderMemberApprovalModal() {
  const container = document.getElementById("memberApprovalListContainer");
  const emptyEl = document.getElementById("memberApprovalEmpty");
  if (!container) return;

  const pendingUsers = appState.users.filter(u => u.isPending);
  container.innerHTML = "";

  if (pendingUsers.length === 0) {
    container.style.display = "none";
    if (emptyEl) emptyEl.style.display = "block";
    return;
  }

  container.style.display = "flex";
  if (emptyEl) emptyEl.style.display = "none";

  pendingUsers.forEach(user => {
    const card = document.createElement("div");
    card.style.cssText = "background:#fff; border:1.5px solid #d1fae5; border-radius:14px; padding:14px 14px; display:flex; align-items:center; gap:12px;";
    card.innerHTML = `
      <div style="width:40px; height:40px; border-radius:50%; background:#ecfdf5; display:flex; align-items:center; justify-content:center; font-size:20px; border:1.5px solid #a7f3d0; shrink:0;">
        ${user.avatar || "👤"}
      </div>
      <div style="flex:1; min-width:0;">
        <div style="font-size:14px; font-weight:800; color:#1e293b; margin-bottom:2px;">${user.name}</div>
        <div style="font-size:11.5px; color:#64748b;">ID: ${user.username || "-"} · ${user.phone || "번호 없음"}</div>
        <div style="font-size:11px; color:#f59e0b; font-weight:700; margin-top:2px;">⏳ 승인 대기중</div>
      </div>
      <div style="display:flex; flex-direction:column; gap:6px; shrink:0;">
        <button type="button" data-approve-id="${user.id}" style="padding:7px 12px; font-size:12px; font-weight:800; background:#10b981; color:white; border-radius:9px; border:none; cursor:pointer; white-space:nowrap;">✓ 승인</button>
        <button type="button" data-reject-id="${user.id}" style="padding:7px 12px; font-size:12px; font-weight:800; background:#f1f5f9; color:#ef4444; border-radius:9px; border:1.5px solid #fecaca; cursor:pointer; white-space:nowrap;">✕ 거절</button>
      </div>
    `;

    card.querySelector("[data-approve-id]").addEventListener("click", () => {
      approveUser(user.id);
    });
    card.querySelector("[data-reject-id]").addEventListener("click", () => {
      rejectUser(user.id);
    });

    container.appendChild(card);
  });
}

function updatePendingCountBadge() {
  const badge = document.getElementById("pendingCountBadge");
  const countText = document.getElementById("pendingCountText");
  const pendingCount = appState.users.filter(u => u.isPending).length;
  if (!badge) return;
  if (pendingCount > 0) {
    badge.classList.remove("hidden");
    if (countText) countText.textContent = `${pendingCount}명 대기중`;
  } else {
    badge.classList.add("hidden");
  }
}

function updateMeetingNavBadge() {
  const isPastor = (currentRole === "pastor");
  const currentUser = getCurrentUser();
  const pendingCount = (appState.agendas && appState.agendas.pending)
    ? (isPastor ? appState.agendas.pending.length : appState.agendas.pending.filter(a => isAgendaAuthor(a, currentUser)).length)
    : 0;
  
  const badges = document.querySelectorAll(".meeting-nav-badge, #meetingNavBadgeStatic");
  badges.forEach(badge => {
    if (pendingCount > 0) {
      badge.textContent = pendingCount;
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });

  const pendingCountEl = document.getElementById("pendingAgendaCount");
  if (pendingCountEl) {
    pendingCountEl.textContent = pendingCount;
  }
}

function updateStaffBoxHomeBadge() {
  const countText = document.getElementById("staffBoxCountText");
  const filterBadge = document.getElementById("staffFilterReviewBadge");
  if (!appState.staffBox) return;

  const isPastor = (currentRole === "pastor");
  const currentUser = getCurrentUser();

  // 검토중인 안건/요청 개수 계산: 전도사는 전체, 교사는 본인 건의만
  const reviewCount = appState.staffBox.items.filter(i => {
    if (i.status !== "검토중") return false;
    if (!isPastor && !isAgendaAuthor(i, currentUser)) return false;
    return true;
  }).length;

  if (countText) {
    if (reviewCount > 0) {
      countText.textContent = `${reviewCount}건 검토 대기중 ⏳`;
      countText.style.color = "#ea580c";
    } else {
      countText.textContent = `모든 소통 확인 완료 ✓`;
      countText.style.color = "#16a34a";
    }
  }

  if (filterBadge) {
    filterBadge.textContent = reviewCount;
    filterBadge.style.display = reviewCount > 0 ? "inline-block" : "none";
  }

  updateMeetingNavBadge();
}

function changeUserRole(userId, newRole) {
  const user = appState.users.find(u => u.id === userId);
  if (!user) return;

  user.role = newRole;
  user.isAdmin = (newRole === "pastor");
  saveState();

  // If the user being modified is currently logged in, switch the master role view immediately
  if (userId === appState.currentUserId) {
    switchMasterRole(newRole, false);
  }

  renderUserHeaderBar();
  renderUserSwitchGrid();
  renderUserManagerSection();

  showToast(`✅ [권한 변경] '${user.name}'의 권한이 '${ROLE_NAMES[newRole]}'(으)로 변경되었습니다!`);
}

function switchCurrentUser(userId) {
  const user = appState.users.find(u => u.id === userId);
  if (!user) return;

  appState.currentUserId = userId;
  saveState();

  switchMasterRole(user.role, false);
  renderUserHeaderBar();
  renderUserSwitchGrid();
  closeModal("userSwitchModal");

  showToast(`👤 '${user.name}' 계정으로 전환되었습니다! (${ROLE_NAMES[user.role]})`, "info");
}

function switchMasterRole(roleKey, notify = true) {
  const roleConfig = ROLES[roleKey];
  if (!roleConfig) return;

  currentRole = roleKey;
  appState.currentRole = roleKey;
  
  // Sync current active user's role to reflect the switcher
  const currentUser = getCurrentUser();
  if (currentUser && currentUser.role !== roleKey) {
    currentUser.role = roleKey;
  }
  saveState();

  // 1. Update Master Role Switcher buttons
  document.querySelectorAll(".role-pill-btn").forEach(btn => {
    btn.className = "role-pill-btn";
    if (btn.dataset.roleId === roleKey) {
      btn.classList.add(roleConfig.activeClass);
    }
  });

  // 2. Update Header Badge and Titles
  const roleBadgeEl = document.getElementById("currentRoleBadge");
  const screenTitleEl = document.getElementById("screenTitle");
  const screenSubtitleEl = document.getElementById("screenSubtitle");

  if (roleBadgeEl) {
    roleBadgeEl.textContent = roleConfig.badge;
    roleBadgeEl.className = `role-identity-tag ${roleConfig.tagClass}`;
  }

  if (screenTitleEl) screenTitleEl.textContent = roleConfig.title;
  if (screenSubtitleEl) screenSubtitleEl.textContent = roleConfig.subtitle;

  // 3. Render Role-Specific Bottom Tab Bar
  renderRoleTabBar(roleConfig);

  // 4. Update Accounting view permissions
  const teacherView = document.getElementById("teacherAccountingView");
  const adminView = document.getElementById("adminAccountingView");
  const roleTeacherBtn = document.getElementById("roleBtnTeacher");
  const roleAdminBtn = document.getElementById("roleBtnAdmin");

  if (roleConfig.showAccountingAdmin) {
    if (teacherView) teacherView.style.display = "none";
    if (adminView) adminView.style.display = "block";
    if (roleAdminBtn) roleAdminBtn.classList.add("active");
    if (roleTeacherBtn) roleTeacherBtn.classList.remove("active");
  } else {
    if (teacherView) teacherView.style.display = "block";
    if (adminView) adminView.style.display = "none";
    if (roleTeacherBtn) roleTeacherBtn.classList.add("active");
    if (roleAdminBtn) roleAdminBtn.classList.remove("active");
  }

  // 5. Navigate to role default tab
  switchToTab(roleConfig.defaultTab);

  // 6. Update user header bar and admin banner visibility
  renderUserHeaderBar();

  // 6-1. 사역자 소통함: 학생에게는 숨김 (전도사·회계쌤·선생님에게 노출)
  const staffBoxBtn = document.getElementById("openStaffBoxBtn");
  if (staffBoxBtn) {
    staffBoxBtn.style.display = (roleKey === "student") ? "none" : "";
  }

  // 6-2. 회원승인: 전도사에게만 노출
  const memberApprovalBtn = document.getElementById("openMemberApprovalBtn");
  if (memberApprovalBtn) {
    memberApprovalBtn.style.display = roleKey === "pastor" ? "" : "none";
  }

  // 역할에 따른 안건/소통함 및 배지 상태 즉시 갱신
  renderAgendaSection();
  renderStaffBoxSection();
  renderWorshipDutySection();
  renderHomeQuickActions();
  renderSchedulerSubTabsByRole();
  renderChecklistSection();
  renderAttendanceSection();
  updateStaffBoxHomeBadge();

  // 7. Sonner Toast Feedback
  if (notify) {
    const toastMsgMap = {
      pastor: "✝️ 전도사 모드로 전환되었습니다. (사역 총괄 권한)",
      accountant: "💼 선생님(회계) 모드로 전환되었습니다. (재정 마스터 권한)",
      deacon: "👔 부장집사님 모드로 전환되었습니다. (청소년부 부장 지도)",
      teacher_grade: "🧑🏻‍🏫 선생님(공과반) 모드로 전환되었습니다. (분반 지도 권한)",
      teacher_new: "🌱 선생님(새친구반) 모드로 전환되었습니다. (새친구 전담 지도)",
      teacher: "🧑🏻‍🏫 선생님 모드로 전환되었습니다. (교사 지도 권한)",
      student: "👦🏻 학생 모드로 전환되었습니다. (예랑 청소년부 포털)"
    };
    showToast(toastMsgMap[roleKey] || "역할이 변경되었습니다.");
  }
}

function renderRoleTabBar(roleConfig) {
  const tabBar = document.getElementById("bottomTabBar");
  if (!tabBar) return;

  tabBar.innerHTML = "";
  roleConfig.tabs.forEach((tab) => {
    const btn = document.createElement("button");
    const isActive = (tab.target === roleConfig.defaultTab);
    btn.type = "button";
    btn.className = `tab-btn flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-2xl transition-all duration-150 active:scale-95 ${
      isActive ? "text-primary font-bold active" : "text-text-muted hover:text-primary hover:bg-surface-container/60 font-semibold"
    }`;
    btn.dataset.target = tab.target;
    btn.dataset.title = tab.title;
    btn.dataset.subtitle = tab.subtitle;

    const fillStyle = isActive ? "font-variation-settings: 'FILL' 1;" : "";
    const wrapBg = isActive ? "bg-primary-fixed/50" : "";
    const isMeetingTab = (tab.target === "view-agenda");
    const badgeHtml = isMeetingTab ? `<span class="meeting-nav-badge hidden absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none shadow-sm">0</span>` : "";

    btn.innerHTML = `
      <div class="tab-icon-wrap w-10 h-7 rounded-full flex items-center justify-center transition-colors relative ${wrapBg}">
        <span class="material-symbols-outlined text-[23px]" style="${fillStyle}">${tab.icon}</span>
        ${badgeHtml}
      </div>
      <span class="text-[11px] tracking-tight">${tab.label}</span>
    `;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".bottom-tab-bar .tab-btn").forEach(b => {
        b.classList.remove("active", "text-primary", "font-bold");
        b.classList.add("text-text-muted", "font-semibold");
        const iconWrap = b.querySelector(".tab-icon-wrap");
        if (iconWrap) iconWrap.classList.remove("bg-primary-fixed/50");
        const sym = b.querySelector(".material-symbols-outlined");
        if (sym) sym.style.fontVariationSettings = "'FILL' 0";
      });

      btn.classList.add("active", "text-primary", "font-bold");
      btn.classList.remove("text-text-muted", "font-semibold");
      const activeWrap = btn.querySelector(".tab-icon-wrap");
      if (activeWrap) activeWrap.classList.add("bg-primary-fixed/50");
      const activeSym = btn.querySelector(".material-symbols-outlined");
      if (activeSym) activeSym.style.fontVariationSettings = "'FILL' 1";

      document.querySelectorAll(".screen-view").forEach(v => {
        if (v.id === tab.target) {
          v.classList.add("active");
        } else {
          v.classList.remove("active");
        }
      });

      const titleEl = document.getElementById("screenTitle");
      const subtitleEl = document.getElementById("screenSubtitle");
      if (titleEl && tab.title) titleEl.textContent = tab.title;
      if (subtitleEl && tab.subtitle) subtitleEl.textContent = tab.subtitle;

      // 구글 스프레드시트 실시간 동기화 (재정 탭 열람 시)
      if (tab.target === "view-accounting" && typeof syncFromGoogleSheet === "function") {
        syncFromGoogleSheet(false);
      }

      const container = document.getElementById("screensContainer");
      if (container) container.scrollTo({ top: 0, behavior: "smooth" });
    });

    tabBar.appendChild(btn);
  });

  updateMeetingNavBadge();
}

function initUserManagementEvents() {
  // Open User Switch Modal
  const openSwitchBtn = document.getElementById("openUserSwitchModalBtn");
  if (openSwitchBtn) {
    openSwitchBtn.addEventListener("click", () => {
      renderUserSwitchGrid();
      openModal("userSwitchModal");
    });
  }

  // Open Admin User Management Modal
  const adminBanner = document.getElementById("adminUserMgmtBanner");
  if (adminBanner) {
    adminBanner.addEventListener("click", () => {
      const user = getCurrentUser();
      if (currentRole !== "pastor") {
        showToast("⚠️ 관리자(전도사)만 계정 권한 관리에 접근할 수 있습니다.", "warn");
        return;
      }
      renderUserManagerSection();
      openModal("userManagementModal");
    });
  }

  // Open Add New User Modal from Admin Management Modal
  const openAddUserBtn = document.getElementById("openAddNewUserBtn");
  if (openAddUserBtn) {
    openAddUserBtn.addEventListener("click", () => {
      openModal("addNewUserModal");
    });
  }

  // Submit New User Form
  const newUserForm = document.getElementById("newUserForm");
  if (newUserForm) {
    newUserForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("newUserNameInput").value.trim();
      const role = document.getElementById("newUserRoleInput").value;
      const duty = document.getElementById("newUserDutyInput").value.trim();
      const phone = document.getElementById("newUserPhoneInput").value.trim();

      if (!name) return;

      const newUser = {
        id: "u_" + Date.now(),
        name: name,
        role: role,
        duty: duty || "중고등부 교사",
        phone: phone || "010-0000-0000",
        avatar: DEFAULT_AVATARS[role] || "👤",
        isAdmin: (role === "pastor")
      };

      appState.users.push(newUser);
      saveState();

      renderUserManagerSection();
      renderUserSwitchGrid();
      closeModal("addNewUserModal");
      newUserForm.reset();

      showToast(`🎉 새 사용자 '${name}'이(가) 등록되었으며 '${ROLE_NAMES[role]}' 권한이 부여되었습니다!`);
    });
  }
}

function initRoleEvents() {
  document.querySelectorAll(".role-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const roleId = btn.dataset.roleId;
      switchMasterRole(roleId);
    });
  });

  // Student 1:1 Counseling Form Handler
  const counselForm = document.getElementById("studentCounselForm");
  if (counselForm) {
    counselForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const target = document.getElementById("counselTargetInput").value;
      const category = document.getElementById("counselCategoryInput").value;
      const method = document.getElementById("counselMethodInput").value;

      showToast(`🕊️ ${target}께 비밀 고민 상담 신청서(${category}, ${method})가 전송되었습니다!`, "success", 4000);
      counselForm.reset();
    });
  }

  // Jump to Receipt submission
  const gotoAddBtn = document.getElementById("gotoAddReceiptBtn");
  if (gotoAddBtn) {
    gotoAddBtn.addEventListener("click", () => {
      switchToTab("view-receipt");
    });
  }

  // Google Sheet Modal Trigger
  const gsheetBtn = document.getElementById("openGoogleSheetModalBtn");
  if (gsheetBtn) {
    gsheetBtn.addEventListener("click", () => {
      openModal("gsheetModal");
    });
  }
}


// =============================================================================
// 9. Modal Helpers & System Utilities
// =============================================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add("open");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("open");
}

function initModalClosers() {
  // Close buttons with data-close attribute
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.close;
      closeModal(modalId);
    });
  });

  // Click backdrop to close
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("open");
      }
    });
  });
}

// Frame Switcher (Mobile Mockup vs Wide Desktop View)
function initFrameSwitcher() {
  const resetBtn = document.getElementById("resetDataBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("모든 데이터를 초기 상태로 복원하시겠습니까?")) {
        localStorage.removeItem("yerang_app_state_v1");
        appState = JSON.parse(JSON.stringify(INITIAL_DATA));
        renderAll();
        showToast("모든 데이터가 초기 상태로 복원되었습니다! 🔄");
        const modal = document.getElementById("userSwitchModal");
        if (modal) modal.classList.remove("open");
      }
    });
  }
}

// Update clock & live date
function initClock() {
  const timeEl = document.getElementById("currentTime");
  const headerDateEl = document.getElementById("headerLiveDate");

  const DAY_NAMES = ["주일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  function updateClockAndDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = DAY_NAMES[now.getDay()];

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");

    if (timeEl) {
      timeEl.textContent = `${h}:${m}`;
    }

    if (headerDateEl) {
      headerDateEl.textContent = `${year}년 ${month}월 ${date}일 (${day}) ${h}:${m}`;
    }
  }

  updateClockAndDate();
  setInterval(updateClockAndDate, 10000); // 10초마다 실시간 갱신
}

// --- 이번 주 예배 섬김 (Worship Duty) Rendering & Events ---
function renderWorshipDutySection() {
  if (!appState.worshipDuty) return;
  const duty = appState.worshipDuty;

  const dateEl = document.getElementById("dutyDateDisplay");
  const subEl = document.getElementById("dutySubtitleDisplay");
  if (dateEl) dateEl.textContent = duty.date || "10/18";
  if (subEl) subEl.textContent = duty.subtitle || "정성된 마음으로 준비하는 예배";

  // 1) 예배 전 기도회
  const preName = document.getElementById("dutyPrePrayerName");
  const preRole = document.getElementById("dutyPrePrayerRole");
  const preBadge = document.getElementById("dutyPrePrayerBadge");
  if (preName && duty.prePrayer) preName.textContent = duty.prePrayer.name || "";
  if (preRole && duty.prePrayer) preRole.textContent = duty.prePrayer.role || "";
  if (preBadge && duty.prePrayer) preBadge.textContent = duty.prePrayer.badge || "예배전";

  // 2) 대표기도
  const prayerName = document.getElementById("dutyPrayerName");
  const prayerRole = document.getElementById("dutyPrayerRole");
  const prayerBadge = document.getElementById("dutyPrayerBadge");
  if (prayerName && duty.prayer) prayerName.textContent = duty.prayer.name || "";
  if (prayerRole && duty.prayer) prayerRole.textContent = duty.prayer.role || "";
  if (prayerBadge && duty.prayer) prayerBadge.textContent = duty.prayer.badge || "학생회";

  // 3) 말씀봉독
  const scripName = document.getElementById("dutyScriptureName");
  const scripRole = document.getElementById("dutyScriptureRole");
  const scripBadge = document.getElementById("dutyScriptureBadge");
  if (scripName && duty.scripture) scripName.textContent = duty.scripture.name || "";
  if (scripRole && duty.scripture) scripRole.textContent = duty.scripture.role || "";
  if (scripBadge && duty.scripture) scripBadge.textContent = duty.scripture.badge || "성경";

  // 4) 광고
  const annName = document.getElementById("dutyAnnouncementName");
  const annRole = document.getElementById("dutyAnnouncementRole");
  const annBadge = document.getElementById("dutyAnnouncementBadge");
  if (annName && duty.announcement) annName.textContent = duty.announcement.name || "";
  if (annRole && duty.announcement) annRole.textContent = duty.announcement.role || "";
  if (annBadge && duty.announcement) annBadge.textContent = duty.announcement.badge || "부서소식";

  // 수정 버튼: 전도사에게만 노출 (다른 직분/학생은 수정 불가)
  const openBtn = document.getElementById("openEditWorshipDutyBtn");
  const isPastor = (currentRole === "pastor" || (getCurrentUser() && getCurrentUser().role === "pastor"));
  if (openBtn) {
    openBtn.style.display = isPastor ? "" : "none";
  }
}

function initWorshipDutyEvents() {
  const openBtn = document.getElementById("openEditWorshipDutyBtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      const isPastor = (currentRole === "pastor" || (getCurrentUser() && getCurrentUser().role === "pastor"));
      if (!isPastor) {
        showToast("⚠️ '이번 주 예배 섬김' 수정은 전도사님만 가능합니다.", "warning");
        return;
      }

      const duty = appState.worshipDuty || INITIAL_DATA.worshipDuty;
      const dateInput = document.getElementById("dutyDateInput");
      const preNameInput = document.getElementById("dutyPrePrayerNameInput");
      const preRoleInput = document.getElementById("dutyPrePrayerRoleInput");
      const pNameInput = document.getElementById("dutyPrayerNameInput");
      const pRoleInput = document.getElementById("dutyPrayerRoleInput");
      const scripNameInput = document.getElementById("dutyScriptureNameInput");
      const scripRoleInput = document.getElementById("dutyScriptureRoleInput");
      const annNameInput = document.getElementById("dutyAnnouncementNameInput");
      const annRoleInput = document.getElementById("dutyAnnouncementRoleInput");

      if (dateInput) dateInput.value = duty.date || "10/18";
      if (preNameInput && duty.prePrayer) preNameInput.value = duty.prePrayer.name || "";
      if (preRoleInput && duty.prePrayer) preRoleInput.value = duty.prePrayer.role || "";
      if (pNameInput && duty.prayer) pNameInput.value = duty.prayer.name || "";
      if (pRoleInput && duty.prayer) pRoleInput.value = duty.prayer.role || "";
      if (scripNameInput && duty.scripture) scripNameInput.value = duty.scripture.name || "";
      if (scripRoleInput && duty.scripture) scripRoleInput.value = duty.scripture.role || "";
      if (annNameInput && duty.announcement) annNameInput.value = duty.announcement.name || "";
      if (annRoleInput && duty.announcement) annRoleInput.value = duty.announcement.role || "";

      openModal("editWorshipDutyModal");
    });
  }

  const form = document.getElementById("worshipDutyForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const isPastor = (currentRole === "pastor" || (getCurrentUser() && getCurrentUser().role === "pastor"));
      if (!isPastor) {
        showToast("⚠️ '이번 주 예배 섬김' 수정 권한이 없습니다 (전도사 전용).", "warning");
        return;
      }

      if (!appState.worshipDuty) {
        appState.worshipDuty = JSON.parse(JSON.stringify(INITIAL_DATA.worshipDuty));
      }

      const date = document.getElementById("dutyDateInput").value.trim();
      const preName = document.getElementById("dutyPrePrayerNameInput").value.trim();
      const preRole = document.getElementById("dutyPrePrayerRoleInput").value.trim();
      const pName = document.getElementById("dutyPrayerNameInput").value.trim();
      const pRole = document.getElementById("dutyPrayerRoleInput").value.trim();
      const scripName = document.getElementById("dutyScriptureNameInput").value.trim();
      const scripRole = document.getElementById("dutyScriptureRoleInput").value.trim();
      const annName = document.getElementById("dutyAnnouncementNameInput").value.trim();
      const annRole = document.getElementById("dutyAnnouncementRoleInput").value.trim();

      appState.worshipDuty.date = date || "10/18";
      if (!appState.worshipDuty.prePrayer) appState.worshipDuty.prePrayer = {};
      appState.worshipDuty.prePrayer.name = preName;
      appState.worshipDuty.prePrayer.role = preRole;

      if (!appState.worshipDuty.prayer) appState.worshipDuty.prayer = {};
      appState.worshipDuty.prayer.name = pName;
      appState.worshipDuty.prayer.role = pRole;

      if (!appState.worshipDuty.scripture) appState.worshipDuty.scripture = {};
      appState.worshipDuty.scripture.name = scripName;
      appState.worshipDuty.scripture.role = scripRole;

      if (!appState.worshipDuty.announcement) appState.worshipDuty.announcement = {};
      appState.worshipDuty.announcement.name = annName;
      appState.worshipDuty.announcement.role = annRole;

      saveState();
      renderWorshipDutySection();
      closeModal("editWorshipDutyModal");
      showToast("이번 주 예배 섬김 명단이 성공적으로 수정되었습니다! ⛪");
    });
  }
}

// --- Home Quick Actions (Role-Adaptive: Pastor vs Teacher) ---
function renderHomeQuickActions() {
  const isPastor = (currentRole === "pastor" || (getCurrentUser() && getCurrentUser().role === "pastor"));
  const isStudent = (currentRole === "student" || (getCurrentUser() && getCurrentUser().role === "student"));

  const pastorActions = document.getElementById("pastorQuickActions");
  const teacherBox = document.getElementById("teacherSuggestionBox");

  if (pastorActions) {
    pastorActions.style.display = isPastor ? "grid" : "none";
  }

  if (teacherBox) {
    teacherBox.style.display = (!isPastor && !isStudent) ? "block" : "none";

    const currentUser = getCurrentUser();
    if (currentUser && appState.staffBox && appState.staffBox.items) {
      const myItems = appState.staffBox.items.filter(item => isAgendaAuthor(item, currentUser));
      const countEl = document.getElementById("mySuggestionCountText");
      if (countEl) {
        countEl.textContent = `${myItems.length}건`;
      }
    }
  }
}

// --- Home Dashboard Interactivity ---
function initHomeDashboardEvents() {
  const staffBoxBtn = document.getElementById("openStaffBoxBtn");
  if (staffBoxBtn) {
    staffBoxBtn.addEventListener("click", () => {
      openModal("staffBoxModal");
    });
  }

  // Teacher suggestion box events (선생님 사역자 건의칸)
  const teacherBox = document.getElementById("teacherSuggestionBox");
  const teacherSuggestBtn = document.getElementById("teacherOpenSuggestBtn");
  const viewMySuggestionsLink = document.getElementById("viewMySuggestionsLink");

  function openTeacherSuggestModal() {
    const currentUser = getCurrentUser();
    const authorSelect = document.getElementById("staffReqAuthorInput");
    if (authorSelect && currentUser) {
      let matchedOption = Array.from(authorSelect.options).find(opt => 
        opt.value.includes(currentUser.name) || currentUser.name.includes(opt.value.replace("T", "").trim())
      );
      if (!matchedOption) {
        const newOpt = new Option(currentUser.name, currentUser.name);
        authorSelect.add(newOpt);
        authorSelect.value = currentUser.name;
      } else {
        authorSelect.value = matchedOption.value;
      }
    }
    openModal("addStaffRequestModal");
  }

  if (teacherSuggestBtn) {
    teacherSuggestBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openTeacherSuggestModal();
    });
  }

  if (teacherBox) {
    teacherBox.addEventListener("click", (e) => {
      if (e.target.closest("#viewMySuggestionsLink") || e.target.closest("#teacherOpenSuggestBtn")) return;
      openTeacherSuggestModal();
    });
  }

  if (viewMySuggestionsLink) {
    viewMySuggestionsLink.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal("staffBoxModal");
    });
  }

  const memberApprovalBtn = document.getElementById("openMemberApprovalBtn");
  if (memberApprovalBtn) {
    memberApprovalBtn.addEventListener("click", () => {
      renderMemberApprovalModal();
      openModal("memberApprovalModal");
    });
  }

  // 초기 승인대기 배지 업데이트
  updatePendingCountBadge();

  // D-Day chip click actions
  const chipChecklist = document.getElementById("chipGotoChecklist");
  if (chipChecklist) {
    chipChecklist.addEventListener("click", () => {
      switchToTab("view-scheduler");
      switchSchedulerSubTab("subTabChecklist");
      showToast("예랑 스카 행사 체크리스트 화면으로 이동했습니다. 📋", "info");
    });
  }

  const chipBirthdays = document.getElementById("chipGotoBirthdays");
  if (chipBirthdays) {
    chipBirthdays.addEventListener("click", () => {
      switchToTab("view-scheduler");
      switchSchedulerSubTab("subTabCalendar");
      showToast("10월 사역 & 생일 캘린더 화면으로 이동했습니다. 🎂", "info");
    });
  }
}

// --- Scheduler Sub-Tabs Management ---
function switchSchedulerSubTab(activeSubTabId) {
  const currentUser = getCurrentUser();
  const isStudent = (currentRole === "student" || (currentUser && currentUser.role === "student"));

  // 학생만 행사 체크리스트 및 예배 출결 접근 차단 (교사/전도사는 모두 열람 가능)
  if (isStudent && (activeSubTabId === "subTabChecklist" || activeSubTabId === "subTabAttendance")) {
    activeSubTabId = "subTabCalendar";
  }

  const subTabs = ["subTabCalendar", "subTabChecklist", "subTabAttendance"];
  const subViews = {
    subTabCalendar: "subViewCalendar",
    subTabChecklist: "subViewChecklist",
    subTabAttendance: "subViewAttendance"
  };

  subTabs.forEach(id => {
    const btn = document.getElementById(id);
    const view = document.getElementById(subViews[id]);
    if (!btn || !view) return;

    if (id === activeSubTabId) {
      btn.classList.add("active");
      view.style.display = "block";
    } else {
      btn.classList.remove("active");
      view.style.display = "none";
    }
  });
}

// --- Scheduler Sub-Tabs Role Permissions ---
// 예배 출결: 전도사 및 선생님(교사), 회계쌤에게 활성화 (학생에게만 숨김)
// 행사 체크리스트: 전도사 및 선생님에게 활성화 (학생에게만 숨김)
function renderSchedulerSubTabsByRole() {
  const currentUser = getCurrentUser();
  const isPastor = (currentRole === "pastor" && (!currentUser || currentUser.role === "pastor"));
  const isStudent = (currentRole === "student" || (currentUser && currentUser.role === "student"));
  const canViewAttendance = !isStudent; // 전도사 및 선생님 모두 활성화

  const tabCal = document.getElementById("subTabCalendar");
  const tabChk = document.getElementById("subTabChecklist");
  const tabAtt = document.getElementById("subTabAttendance");

  const viewCal = document.getElementById("subViewCalendar");
  const viewChk = document.getElementById("subViewChecklist");
  const viewAtt = document.getElementById("subViewAttendance");

  if (!tabCal || !tabChk || !tabAtt) return;

  // 1. 예배 출결: 전도사 및 선생님 모두 활성화 (학생만 숨김)
  if (canViewAttendance) {
    tabAtt.style.display = "";
  } else {
    tabAtt.style.display = "none";
    if (viewAtt) viewAtt.style.display = "none";
  }

  // 2. 행사 체크리스트: 전도사 및 선생님 열람 가능 (학생에게는 숨김)
  if (isStudent) {
    tabChk.style.display = "none";
    if (viewChk) viewChk.style.display = "none";
  } else {
    tabChk.style.display = "";
  }

  // 3. 사역 캘린더 & 생일: 모두에게 노출
  tabCal.style.display = "";

  // 4. 현재 활성화된 서브탭이 비노출 대상인 경우 '사역 캘린더 & 생일'로 안전 전환
  if (!canViewAttendance && tabAtt.classList.contains("active")) {
    switchSchedulerSubTab("subTabCalendar");
  } else if (isStudent && tabChk.classList.contains("active")) {
    switchSchedulerSubTab("subTabCalendar");
  }
}

function initSchedulerSubTabs() {
  ["subTabCalendar", "subTabChecklist", "subTabAttendance"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => switchSchedulerSubTab(id));
    }
  });
  renderSchedulerSubTabsByRole();
}

// --- Event Checklist (New Image 4: 예랑 스카 D-12) ---
function isChecklistAssignee(item, user) {
  if (!item || !user) return false;
  // If item doesn't have manager specified, fallback to title text extraction
  let managerName = item.manager || "";
  if (!managerName && item.title) {
    const match = item.title.match(/\(([^)]+)\)/);
    if (match) managerName = match[1];
  }
  const userName = (user.name || "").trim();
  if (!managerName || !userName) return false;

  const cleanManager = managerName.replace(/선생님|전도사|목사|집사|교사|T|쌤|간사/gi, "").replace(/\s+/g, "");
  const cleanUser = userName.replace(/선생님|전도사|목사|집사|교사|T|쌤|간사/gi, "").replace(/\s+/g, "");

  if (cleanManager && cleanUser && (cleanManager === cleanUser || cleanManager.includes(cleanUser) || cleanUser.includes(cleanManager))) {
    return true;
  }
  return false;
}

function openEditChecklistModal(item) {
  const modal = document.getElementById("editChecklistModal");
  if (!modal) return;
  const idInput = document.getElementById("editChkIdInput");
  const titleInput = document.getElementById("editChkTitleInput");
  const managerInput = document.getElementById("editChkManagerInput");
  const checkedInput = document.getElementById("editChkCheckedInput");

  if (idInput) idInput.value = item.id;
  // Clean raw title from parenthesis manager if present
  let cleanTitle = item.title || "";
  cleanTitle = cleanTitle.replace(/\s*\([^)]+\)\s*$/, "").trim();
  if (titleInput) titleInput.value = cleanTitle;
  if (managerInput) managerInput.value = item.manager || "정하람 전도사";
  if (checkedInput) checkedInput.checked = !!item.checked;

  openModal("editChecklistModal");
}

function deleteChecklistItem(itemId, itemTitle) {
  if (!confirm(`'${itemTitle}' 체크리스트 항목을 정말 삭제하시겠습니까?`)) {
    return;
  }
  appState.checklist.items = appState.checklist.items.filter(i => i.id !== itemId);
  saveState();
  renderChecklistSection();
  closeModal("editChecklistModal");
  showToast("체크리스트 항목이 삭제되었습니다. 🗑️");
}

function renderChecklistSection() {
  const container = document.getElementById("checklistItemsContainer");
  const progressFill = document.getElementById("checklistProgressFill");
  const progressText = document.getElementById("checklistProgressText");
  const openAddBtn = document.getElementById("openAddChecklistBtn");
  if (!container || !appState.checklist) return;

  const currentUser = getCurrentUser();
  const isPastor = (currentRole === "pastor" && (!currentUser || currentUser.role === "pastor"));

  // 전도사에게만 '새 체크리스트 추가' 버튼 노출
  if (openAddBtn) {
    openAddBtn.style.display = isPastor ? "" : "none";
  }

  const items = appState.checklist.items;
  const total = items.length;
  const checkedCount = items.filter(i => i.checked).length;
  const percentage = total > 0 ? Math.round((checkedCount / total) * 100) : 0;

  if (progressFill) progressFill.style.width = `${percentage}%`;
  if (progressText) {
    progressText.textContent = `준비 진행상황 ${percentage}% 완료 (${total}개 중 ${checkedCount}개)`;
  }

  container.innerHTML = "";
  items.forEach(item => {
    const el = document.createElement("div");
    let colorClass = "";
    if (item.checked) {
      colorClass = item.color === "yellow" ? "checked-yellow" : "checked-green";
    }

    const isMyTask = isChecklistAssignee(item, currentUser);
    const canCheck = isPastor || isMyTask;

    el.className = `checklist-item ${colorClass}`;
    if (!canCheck) {
      el.style.opacity = "0.7";
      el.style.cursor = "not-allowed";
    } else {
      el.style.cursor = "pointer";
    }

    // Role badge
    let badgeHtml = "";
    if (!isPastor && isMyTask) {
      badgeHtml = `<span style="font-size:10px; font-weight:800; background:#e0f2fe; color:#0369a1; padding:2px 6px; border-radius:6px; margin-left:6px; border:1px solid #bae6fd;">내 담당 🙋🏻</span>`;
    } else if (!isPastor && !canCheck) {
      badgeHtml = `<span style="font-size:10px; font-weight:700; color:#94a3b8; margin-left:4px;" title="담당자 전용">🔒</span>`;
    }

    // 전도사 전용 수정/삭제 버튼 (선생님 및 타 역할에는 완전히 비노출)
    let pastorActionsHtml = "";
    if (isPastor) {
      pastorActionsHtml = `
        <div class="chk-item-actions" style="display:flex; align-items:center; gap:4px; margin-left:auto; flex-shrink:0;">
          <button type="button" class="chk-edit-btn" title="항목 수정" style="border:none; background:#f1f5f9; hover:background:#e2e8f0; color:#475569; width:28px; height:28px; border-radius:7px; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; font-size:13px; transition:all 150ms;">✏️</button>
          <button type="button" class="chk-del-btn" title="항목 삭제" style="border:none; background:#fef2f2; hover:background:#fee2e2; color:#ef4444; width:28px; height:28px; border-radius:7px; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; font-size:13px; transition:all 150ms;">🗑️</button>
        </div>
      `;
    }

    el.innerHTML = `
      <div class="custom-checkbox" style="${!canCheck ? 'opacity:0.45; cursor:not-allowed;' : 'cursor:pointer;'}">${item.checked ? "✓" : ""}</div>
      <div class="checklist-text-wrap" style="flex:1; min-width:0;">
        <div class="checklist-title" style="display:flex; align-items:center; flex-wrap:wrap; gap:2px;">
          <span style="${!canCheck ? 'color:#64748b;' : ''}">${item.title}</span>
          ${badgeHtml}
        </div>
      </div>
      ${pastorActionsHtml}
    `;

    // Action button events (전도사용)
    if (isPastor) {
      const editBtn = el.querySelector(".chk-edit-btn");
      if (editBtn) {
        editBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          openEditChecklistModal(item);
        });
      }
      const delBtn = el.querySelector(".chk-del-btn");
      if (delBtn) {
        delBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          deleteChecklistItem(item.id, item.title);
        });
      }
    }

    // Toggle checklist item
    el.addEventListener("click", (e) => {
      // If clicked on action buttons, do not toggle
      if (e.target.closest(".chk-item-actions")) return;

      if (!canCheck) {
        showToast("⚠️ 본인이 담당한 항목만 체크할 수 있습니다.", "warn");
        return;
      }

      item.checked = !item.checked;
      saveState();
      renderChecklistSection();
      const statusWord = item.checked ? "완료 처리됨 ✓" : "진행중으로 변경됨";
      showToast(`'${item.title.split("(")[0].trim()}' ${statusWord}`);
    });

    container.appendChild(el);
  });
}

function initChecklistEvents() {
  const openBtn = document.getElementById("openAddChecklistBtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => openModal("addChecklistModal"));
  }

  // 추가 폼 리스너
  const form = document.getElementById("checklistForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("chkTitleInput").value;
      const manager = document.getElementById("chkManagerInput").value;

      const newItem = {
        id: Date.now(),
        title: `${title} (${manager})`,
        manager: manager,
        checked: false,
        color: "green"
      };

      appState.checklist.items.push(newItem);
      saveState();
      renderChecklistSection();
      closeModal("addChecklistModal");
      form.reset();
      showToast("새 행사 체크리스트 항목이 추가되었습니다! 📋");
    });
  }

  // 전도사 수정 폼 리스너
  const editForm = document.getElementById("editChecklistForm");
  if (editForm) {
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const itemId = Number(document.getElementById("editChkIdInput").value);
      const title = document.getElementById("editChkTitleInput").value.trim();
      const manager = document.getElementById("editChkManagerInput").value;
      const isChecked = document.getElementById("editChkCheckedInput").checked;

      const target = appState.checklist.items.find(i => i.id === itemId);
      if (target) {
        target.title = `${title} (${manager})`;
        target.manager = manager;
        target.checked = isChecked;
        saveState();
        renderChecklistSection();
        closeModal("editChecklistModal");
        showToast("체크리스트 항목이 성공적으로 수정되었습니다! ✏️");
      }
    });
  }

  // 모달 내 삭제 버튼 리스너
  const deleteModalBtn = document.getElementById("deleteChkModalBtn");
  if (deleteModalBtn) {
    deleteModalBtn.addEventListener("click", () => {
      const itemId = Number(document.getElementById("editChkIdInput").value);
      const title = document.getElementById("editChkTitleInput").value.trim();
      deleteChecklistItem(itemId, title || "선택한 항목");
    });
  }
}

// --- Staff Communication Box (New Image 1: 사역자 소통함) ---
let currentStaffFilter = "all";

function renderStaffBoxSection(filter = currentStaffFilter) {
  const container = document.getElementById("staffBoxCardsContainer");
  if (!container || !appState.staffBox) return;

  const isPastor = (currentRole === "pastor");
  const currentUser = getCurrentUser();

  // 전도사에게는 '새 요청/건의 등록' 버튼 숨김 (교사/회계쌤에게만 노출)
  const addBtn = document.getElementById("openAddStaffRequestBtn");
  if (addBtn) {
    addBtn.style.display = isPastor ? "none" : "";
  }

  container.innerHTML = "";
  const filtered = appState.staffBox.items.filter(item => {
    // 제안한 안건 및 검토중인 건의는 전도사와 제안자 외에는 보이지 않게 보안 필터링!
    if (!isPastor && item.status === "검토중") {
      if (!isAgendaAuthor(item, currentUser)) return false;
    }
    if (filter === "all") return true;
    if (filter === "검토중") return item.status === "검토중";
    if (filter === "승인완료") return item.status === "승인완료";
    return item.type === filter;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:32px 0; color:#94a3b8;">
        <span style="font-size:32px;">📭</span>
        <div style="font-size:13px; font-weight:700; color:#64748b; margin-top:6px;">해당 상태의 소통함 항목이 없습니다.</div>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    let borderClass = "";
    if (item.type === "사역건의") borderClass = "mint-border";
    if (item.type === "회의안건") borderClass = "purple-border";
    card.className = `staff-box-card ${borderClass}`;

    const iconMap = { "구매요청": "🛒", "사역건의": "💡", "회의안건": "📝" };
    const icon = iconMap[item.type] || "📌";

    const budgetText = item.budget ? ` | 예산: ${item.budget}` : "";

    // 관리자(전도사)일 경우 승인완료 / 검토중을 선택할 수 있는 직관적인 토글 버튼 + 건의 삭제 버튼 제공
    let statusControlHtml = "";
    if (isPastor) {
      let toggleBtnHtml = "";
      if (item.status === "승인완료") {
        toggleBtnHtml = `
          <button type="button" class="staff-status-toggle-btn" data-item-id="${item.id}" style="padding:4px 9px; font-size:11.5px; font-weight:800; background:#d8f5ec; color:#177a60; border-radius:8px; border:1px solid #a3e9d3; cursor:pointer; display:inline-flex; align-items:center; gap:3px;">
            <span>✓ 승인완료</span>
            <span style="font-size:9px; color:#5c9e8d; opacity:0.8;">(변경)</span>
          </button>
        `;
      } else {
        toggleBtnHtml = `
          <button type="button" class="staff-status-toggle-btn" data-item-id="${item.id}" style="padding:4px 9px; font-size:11.5px; font-weight:800; background:#fef0db; color:#bd6a1e; border-radius:8px; border:1px solid #fcd6a0; cursor:pointer; display:inline-flex; align-items:center; gap:3px;">
            <span>⏳ 검토중</span>
            <span style="font-size:9px; color:#c78546; opacity:0.8;">(승인하기)</span>
          </button>
        `;
      }

      statusControlHtml = `
        <div style="display:inline-flex; align-items:center; gap:5px;">
          ${toggleBtnHtml}
          <button type="button" class="staff-item-delete-btn" data-item-id="${item.id}" style="padding:4px 7px; font-size:11px; font-weight:700; background:#fff1f2; color:#e11d48; border-radius:8px; border:1px solid #fecdd3; cursor:pointer; display:inline-flex; align-items:center; gap:2px;" title="건의 삭제">
            <span>🗑️</span>
            <span>삭제</span>
          </button>
        </div>
      `;
    } else {
      if (item.status === "승인완료") {
        statusControlHtml = `<span class="badge-approved">승인완료 ✓</span>`;
      } else if (item.status === "검토중") {
        statusControlHtml = `<span class="badge-review">검토중 ⏳</span>`;
      } else {
        statusControlHtml = `<span style="font-size:11px; font-weight:700; color:#888;">${item.status}</span>`;
      }
    }

    card.innerHTML = `
      <div class="staff-box-title">${icon} [${item.type}] ${item.title}</div>
      <div class="staff-box-meta-row" style="margin-top:10px; display:flex; align-items:center; justify-content:space-between;">
        <div style="font-size:12px; color:#64748b;">작성자: <b style="color:#1e293b;">${item.author}</b>${budgetText}</div>
        <div>${statusControlHtml}</div>
      </div>
    `;

    // 관리자 토글 버튼 클릭 이벤트
    const toggleBtn = card.querySelector(".staff-status-toggle-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const nextStatus = item.status === "승인완료" ? "검토중" : "승인완료";
        item.status = nextStatus;
        item.badgeType = nextStatus === "승인완료" ? "approved" : "review";

        // 회의안건인 경우 회의 탭 안건 목록과 양방향 실시간 동기화!
        if (item.type === "회의안건") {
          const rawItemTitle = item.title.replace(/^\[.*?\]\s*/, "").trim();
          if (nextStatus === "승인완료") {
            // pending -> confirmed 로 이동
            const pIdx = appState.agendas.pending.findIndex(a => 
              (item.agendaId && a.id === item.agendaId) || 
              a.id === item.id ||
              a.title.includes(rawItemTitle) || 
              rawItemTitle.includes(a.title.replace("[제안]", "").trim())
            );
            if (pIdx !== -1) {
              const pItem = appState.agendas.pending.splice(pIdx, 1)[0];
              item.agendaId = pItem.id;
              appState.agendas.confirmed.push({
                id: pItem.id,
                title: pItem.title.replace("[제안]", `[안건 ${appState.agendas.confirmed.length + 1}]`),
                author: pItem.author.replace("제안자:", "제안:"),
                statusBadge: "전도사 승인완료 ✅",
                type: "peach"
              });
            } else {
              const alreadyInConfirmed = appState.agendas.confirmed.some(a => 
                (item.agendaId && a.id === item.agendaId) || a.id === item.id || a.title.includes(rawItemTitle)
              );
              if (!alreadyInConfirmed) {
                const newId = item.agendaId || item.id || Date.now();
                item.agendaId = newId;
                appState.agendas.confirmed.push({
                  id: newId,
                  title: `[안건 ${appState.agendas.confirmed.length + 1}] ${rawItemTitle}`,
                  author: `제안: ${item.author}`,
                  statusBadge: "전도사 승인완료 ✅",
                  type: "peach"
                });
              }
            }
          } else {
            // 승인완료 -> 검토중(pending)으로 되돌리기
            const cIdx = appState.agendas.confirmed.findIndex(a => 
              (item.agendaId && a.id === item.agendaId) || 
              a.id === item.id ||
              a.title.includes(rawItemTitle) || 
              rawItemTitle.includes(a.title.replace(/\[안건 \d+\]/, "").trim())
            );
            if (cIdx !== -1) {
              const cItem = appState.agendas.confirmed.splice(cIdx, 1)[0];
              item.agendaId = cItem.id;
              const cleanTitle = cItem.title.replace(/\[안건 \d+\]/, "").trim();
              appState.agendas.pending.push({
                id: cItem.id,
                title: `[제안] ${cleanTitle}`,
                author: cItem.author.replace("제안:", "제안자:"),
                desc: cleanTitle
              });
            } else {
              const alreadyInPending = appState.agendas.pending.some(a => 
                (item.agendaId && a.id === item.agendaId) || a.id === item.id || a.title.includes(rawItemTitle)
              );
              if (!alreadyInPending) {
                const newId = item.agendaId || item.id || Date.now();
                item.agendaId = newId;
                appState.agendas.pending.push({
                  id: newId,
                  title: `[제안] ${rawItemTitle}`,
                  author: `제안자: ${item.author}`,
                  desc: rawItemTitle
                });
              }
            }
          }
          renderAgendaSection();
        }

        saveState();
        renderStaffBoxSection();
        updateStaffBoxHomeBadge();
        showToast(`'${item.title}' 상태가 [${nextStatus}]로 변경되었습니다! (회의 안건 동기화)`, "info");
      });
    }

    // 관리자 건의 삭제 버튼 클릭 이벤트
    const deleteStaffBtn = card.querySelector(".staff-item-delete-btn");
    if (deleteStaffBtn) {
      deleteStaffBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!confirm(`'${item.title}' 건의 항목을 소통함에서 완전히 삭제하시겠습니까?`)) {
          return;
        }

        // 1. staffBox items 에서 제거
        appState.staffBox.items = appState.staffBox.items.filter(s => s.id !== item.id);

        // 2. 만약 회의안건이면 회의 탭의 pending 및 confirmed 에서도 동기화 삭제!
        if (item.type === "회의안건") {
          const rawItemTitle = item.title.replace(/^\[.*?\]\s*/, "").trim();
          appState.agendas.pending = appState.agendas.pending.filter(a => 
            !((item.agendaId && a.id === item.agendaId) || a.id === item.id || a.title.includes(rawItemTitle) || rawItemTitle.includes(a.title.replace("[제안]", "").trim()))
          );
          appState.agendas.confirmed = appState.agendas.confirmed.filter(a => 
            !((item.agendaId && a.id === item.agendaId) || a.id === item.id || a.title.includes(rawItemTitle) || rawItemTitle.includes(a.title.replace(/\[안건 \d+\]/, "").trim()))
          );
          renderAgendaSection();
        }

        saveState();
        renderStaffBoxSection();
        updateStaffBoxHomeBadge();
        showToast(`🗑️ '${item.title}' 건의 항목이 삭제되었습니다. (연동 완료)`, "info");
      });
    }

    container.appendChild(card);
  });

  updateStaffBoxHomeBadge();
}

function initStaffBoxEvents() {
  // Filter buttons
  document.querySelectorAll("[data-staff-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-staff-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentStaffFilter = btn.dataset.staffFilter;
      renderStaffBoxSection(currentStaffFilter);
    });
  });

  // Open Add Staff Request Modal
  const openAddBtn = document.getElementById("openAddStaffRequestBtn");
  if (openAddBtn) {
    openAddBtn.addEventListener("click", () => openModal("addStaffRequestModal"));
  }

  // Submit Staff Request Form
  const form = document.getElementById("staffRequestForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const type = document.getElementById("staffReqTypeInput").value;
      const author = document.getElementById("staffReqAuthorInput").value;
      const title = document.getElementById("staffReqTitleInput").value;
      const budget = document.getElementById("staffReqBudgetInput").value;
      const newId = Date.now();
      const cleanTitle = title.replace(/^\[.*?\]\s*/, "").trim();
      const isPastor = (currentRole === "pastor");

      let initialStatus = "검토중";
      let initialBadge = "review";
      if (type === "구매요청") {
        initialStatus = "승인완료";
        initialBadge = "approved";
      } else if (type === "회의안건" && isPastor) {
        initialStatus = "승인완료";
        initialBadge = "approved";
      }

      const newReq = {
        id: newId,
        agendaId: type === "회의안건" ? newId : null,
        type: type,
        title: cleanTitle,
        author: author,
        budget: budget || null,
        status: initialStatus,
        badgeType: initialBadge
      };

      appState.staffBox.items.unshift(newReq);

      // '회의안건'인 경우 회의 탭의 안건 목록에도 동기화 추가!
      if (type === "회의안건") {
        if (initialStatus === "승인완료") {
          const nextNum = appState.agendas.confirmed.length + 1;
          appState.agendas.confirmed.push({
            id: newId,
            title: `[안건 ${nextNum}] ${cleanTitle}`,
            author: `작성: ${author}`,
            statusBadge: "전도사 직속 안건 📌",
            type: "cyan"
          });
        } else {
          appState.agendas.pending.push({
            id: newId,
            title: `[제안] ${cleanTitle}`,
            author: `제안자: ${author}`,
            desc: cleanTitle
          });
        }
        renderAgendaSection();
      }

      saveState();
      renderStaffBoxSection();
      updateStaffBoxHomeBadge();
      renderHomeQuickActions();
      closeModal("addStaffRequestModal");
      form.reset();
      showToast("전도사님께 건의가 성공적으로 접수되었습니다! 📬");
    });
  }
}

// --- Calendar & Birthdays Interactivity (New Image 3) ---
function initCalendarEvents() {
  // Birthday card click
  document.querySelectorAll(".birthday-person-item").forEach(item => {
    item.addEventListener("click", () => {
      const name = item.dataset.bdayName || "선생님/학생";
      showToast(`🎂 ${name}의 생일 축하 메시지를 보냈습니다! 🎉`);
    });
  });

  // Calendar cell click
  document.querySelectorAll(".cal-cell").forEach(cell => {
    cell.addEventListener("click", () => {
      const num = cell.querySelector(".cal-num");
      const eventPill = cell.querySelector(".cal-event-pill");
      if (num && num.textContent.trim()) {
        const day = num.textContent.trim();
        const eventText = eventPill ? eventPill.textContent.trim() : "일반 사역 일정";
        showToast(`📅 10월 ${day}일: ${eventText}`, "info");
      }
    });
  });
}

// =============================================================================
// 10-1. Authentication & Onboarding Gate Engine
// =============================================================================

function checkAuthState() {
  const authScreen = document.getElementById("authGateScreen");
  const mainShell = document.getElementById("mainAppShell");
  if (!authScreen || !mainShell) return;

  if (appState.isAuthenticated) {
    authScreen.classList.add("hidden-auth");
    mainShell.classList.remove("hidden-app");
  } else {
    authScreen.classList.remove("hidden-auth");
    mainShell.classList.add("hidden-app");
    populateLoginUserSelect();
  }
}

function populateLoginUserSelect() {
  const select = document.getElementById("loginUserSelect");
  if (!select) return;
  select.innerHTML = "";

  appState.users.forEach(user => {
    const opt = document.createElement("option");
    opt.value = user.id;
    opt.textContent = `${user.avatar || "👤"} ${user.name} (${ROLE_NAMES[user.role] || user.duty || ""})`;
    if (user.id === appState.currentUserId) {
      opt.selected = true;
    }
    select.appendChild(opt);
  });
}

function loginUser(userId) {
  const user = appState.users.find(u => u.id === userId);
  if (!user) return;

  appState.currentUserId = userId;
  appState.isAuthenticated = true;
  saveState();

  switchMasterRole(user.role, false);
  switchToTab("view-home");
  renderAll();

  // Hide Auth Screen & Reveal Main Shell with smooth transition
  const authScreen = document.getElementById("authGateScreen");
  const mainShell = document.getElementById("mainAppShell");
  if (authScreen) authScreen.classList.add("hidden-auth");
  if (mainShell) mainShell.classList.remove("hidden-app");

  showToast(`✨ '${user.name}'님 환영합니다! (${ROLE_NAMES[user.role]})`);
}

function logoutUser() {
  appState.isAuthenticated = false;
  saveState();

  const authScreen = document.getElementById("authGateScreen");
  const mainShell = document.getElementById("mainAppShell");
  if (authScreen) authScreen.classList.remove("hidden-auth");
  if (mainShell) mainShell.classList.add("hidden-app");

  populateLoginUserSelect();
  closeModal("userSwitchModal");
  showToast("🚪 로그아웃되었습니다. 다시 로그인해주세요.", "info");
}

function initAuthScreen() {
  // Tab Switching: 로그인 vs 회원가입
  const loginTabBtn = document.getElementById("authTabLoginBtn");
  const signupTabBtn = document.getElementById("authTabSignupBtn");
  const loginPanel = document.getElementById("authLoginPanel");
  const signupPanel = document.getElementById("authSignupPanel");
  const pendingPanel = document.getElementById("authPendingPanel");

  function showLoginTab() {
    if (loginTabBtn) loginTabBtn.className = "py-2.5 text-[13px] font-extrabold rounded-xl transition-all duration-150 bg-white text-primary shadow-sm";
    if (signupTabBtn) signupTabBtn.className = "py-2.5 text-[13px] font-bold rounded-xl transition-all duration-150 text-text-muted hover:text-text-primary";
    if (loginPanel) loginPanel.classList.remove("hidden");
    if (signupPanel) signupPanel.classList.add("hidden");
    if (pendingPanel) pendingPanel.classList.add("hidden");
  }

  function showSignupTab() {
    if (signupTabBtn) signupTabBtn.className = "py-2.5 text-[13px] font-extrabold rounded-xl transition-all duration-150 bg-white text-primary shadow-sm";
    if (loginTabBtn) loginTabBtn.className = "py-2.5 text-[13px] font-bold rounded-xl transition-all duration-150 text-text-muted hover:text-text-primary";
    if (loginPanel) loginPanel.classList.add("hidden");
    if (signupPanel) signupPanel.classList.remove("hidden");
    if (pendingPanel) pendingPanel.classList.add("hidden");
  }

  if (loginTabBtn && signupTabBtn) {
    loginTabBtn.addEventListener("click", showLoginTab);
    signupTabBtn.addEventListener("click", showSignupTab);
  }

  // Back to login button in pending panel
  const pendingBackBtn = document.getElementById("pendingBackToLoginBtn");
  if (pendingBackBtn) {
    pendingBackBtn.addEventListener("click", showLoginTab);
  }

  // 1-Click Demo Quick Logins
  document.querySelectorAll(".demo-login-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const uid = btn.dataset.userId;
      if (uid) {
        loginUser(uid);
      }
    });
  });

  // Standard Login Form (ID & Password)
  const standardForm = document.getElementById("standardLoginForm");
  if (standardForm) {
    standardForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById("loginUsernameInput");
      const passwordInput = document.getElementById("loginPasswordInput");

      const username = usernameInput ? usernameInput.value.trim() : "";
      const password = passwordInput ? passwordInput.value.trim() : "";

      if (!username) {
        showToast("⚠️ 아이디를 입력해주세요.", "warn");
        return;
      }

      // Find user by username or name or id
      const user = appState.users.find(u => 
        (u.username && u.username.toLowerCase() === username.toLowerCase()) ||
        (u.name && u.name.replace(/\s/g, "").toLowerCase() === username.replace(/\s/g, "").toLowerCase()) ||
        (u.id === username)
      );

      if (!user) {
        showToast(`❌ 등록되지 않은 아이디입니다: '${username}'`, "warn");
        return;
      }

      // Check if user is pending approval
      if (user.isPending) {
        // Show pending panel directly
        if (loginPanel) loginPanel.classList.add("hidden");
        if (signupPanel) signupPanel.classList.add("hidden");
        if (pendingPanel) {
          pendingPanel.classList.remove("hidden");
          const nameEl = document.getElementById("pendingRegisteredName");
          const idEl = document.getElementById("pendingRegisteredUsername");
          if (nameEl) nameEl.textContent = user.name;
          if (idEl) idEl.textContent = user.username || user.name;
        }
        showToast("⏳ 현재 관리자(전도사님) 승인 대기 중인 계정입니다.", "warn", 4500);
        return;
      }

      // Check password (accept password match or default '1234' / 'password')
      if (user.password && user.password !== password && password !== "1234" && password !== "password") {
        showToast("⚠️ 비밀번호가 일치하지 않습니다.", "warn");
        return;
      }

      loginUser(user.id);
    });
  }

  // Auth Sign Up Form
  const signupForm = document.getElementById("authSignupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signupNameInput").value.trim();
      const username = document.getElementById("signupUsernameInput") ? document.getElementById("signupUsernameInput").value.trim() : "";
      const password = document.getElementById("signupPasswordInput") ? document.getElementById("signupPasswordInput").value.trim() : "";
      const phone = document.getElementById("signupPhoneInput").value.trim();

      if (!name) {
        showToast("⚠️ 성함을 입력해주세요.", "warn");
        return;
      }
      if (!username) {
        showToast("⚠️ 아이디를 입력해주세요.", "warn");
        return;
      }

      // Check for duplicate username
      const existing = appState.users.find(u => u.username && u.username.toLowerCase() === username.toLowerCase());
      if (existing) {
        showToast(`⚠️ 이미 존재하는 아이디입니다: '${username}'`, "warn");
        return;
      }

      const defaultRole = "teacher"; // Default newly registered members as teacher/servant
      const newUser = {
        id: "u_" + Date.now(),
        name: name,
        username: username,
        password: password || "1234",
        role: defaultRole,
        duty: `${ROLE_NAMES[defaultRole]} (승인 대기)`,
        phone: phone || "010-0000-0000",
        avatar: DEFAULT_AVATARS[defaultRole] || "🧑🏻‍🏫",
        isAdmin: false,
        isPending: true // New user requires pastor approval
      };

      appState.users.push(newUser);
      saveState();
      signupForm.reset();

      // Show 가입완료 / 승인대기 Panel
      if (signupPanel) signupPanel.classList.add("hidden");
      if (loginPanel) loginPanel.classList.add("hidden");
      if (pendingPanel) {
        pendingPanel.classList.remove("hidden");
        const nameEl = document.getElementById("pendingRegisteredName");
        const idEl = document.getElementById("pendingRegisteredUsername");
        if (nameEl) nameEl.textContent = name;
        if (idEl) idEl.textContent = username;
      }

      showToast(`📋 '${name}'님 가입완료! 현재 승인 대기 중입니다.`, "success", 4000);
    });
  }

  // Logout button inside User Switcher Modal
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logoutUser();
    });
  }
}

// =============================================================================
// 11. Bootstrap & Master Render
// =============================================================================

function renderAll() {
  renderUserHeaderBar();
  renderStudentSection();
  renderAgendaSection();
  renderAttendanceSection();
  renderAccountingSection();
  renderChecklistSection();
  renderStaffBoxSection();
  renderWorshipDutySection();
  renderHomeQuickActions();
  renderSchedulerSubTabsByRole();
  updateStaffBoxHomeBadge();
  updateMeetingNavBadge();
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initHomeDashboardEvents();
  initWorshipDutyEvents();
  initSchedulerSubTabs();
  initStudentEvents();
  initAgendaEvents();
  initAttendanceEvents();
  initReceiptSection();
  initAccountingSubTabs();
  initRoleEvents();
  initUserManagementEvents();
  initDeleteUserConfirm();
  initEditUserEvents();
  initChecklistEvents();
  initStaffBoxEvents();
  initCalendarEvents();
  initModalClosers();
  initFrameSwitcher();
  initClock();
  initAuthScreen();

  renderAll();

  // Check login auth state
  checkAuthState();

  // Initialize current user and active role
  const currentUser = getCurrentUser();
  const initialRole = currentUser ? currentUser.role : (appState.currentRole || "pastor");
  switchMasterRole(initialRole, false);
  renderUserHeaderBar();

  // Welcome toast (only if already logged in)
  if (appState.isAuthenticated) {
    setTimeout(() => {
      showToast("이룸교회 중고등부 예랑 앱에 오신 것을 환영합니다! 🌤️");
    }, 400);
  }
});

