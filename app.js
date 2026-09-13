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
  notices: [
    {
      id: "notice_1",
      tag: "금주 공지",
      time: "12시",
      title: "전 학년 간식 타임! (식당 3층 모임)",
      content: "이번 주일 예배 후 3층 식당에서 전 학년 간식 타임(피자 & 음료)이 진행됩니다. 공과 공부를 마친 후 각 반 담임 선생님의 인솔 하에 3층 식당으로 이동해 주세요.",
      author: "정하람 전도사",
      date: "2026.09.13 (주일)",
      isCurrent: true
    },
    {
      id: "notice_2",
      tag: "행사 공지",
      time: "16:00",
      title: "중고등부 찬양팀 토요 정기 합주 연습 안내",
      content: "이번 주 토요일 오후 4시 본당 예루살렘홀에서 주일 예배 찬양팀 합주 연습이 있습니다. 세션 및 싱어팀 학생들은 악보와 개인 악기를 지참하여 10분 전까지 도착해 주세요.",
      author: "소예진 선생님",
      date: "2026.09.12 (토)",
      isCurrent: false
    },
    {
      id: "notice_3",
      tag: "예배 공지",
      time: "11:00",
      title: "9월 친구초청주일 및 웰컴 페스티벌 안내",
      content: "새학기를 맞아 믿지 않는 친구들을 초청하는 '예랑 프렌즈 데이'가 열립니다. 친구를 위한 기도와 초청장 전달에 함께 동참해 주세요. 풍성한 웰컴 선물과 레크리에이션이 준비되어 있습니다.",
      author: "정하람 전도사",
      date: "2026.09.06 (주일)",
      isCurrent: false
    },
    {
      id: "notice_4",
      tag: "안내",
      time: "20:00",
      title: "예랑 스카(자습실) 중간고사 시험기간 24시간 특별 개방",
      content: "중간고사를 준비하는 학생들을 위해 교육관 2층 스터디카페를 24시간 특별 개방합니다. 지정 좌석제 및 야간 간식(토스트/음료)이 제공되오니 많은 이용 바랍니다.",
      author: "김대한 선생님",
      date: "2026.08.30",
      isCurrent: false
    },
    {
      id: "notice_5",
      tag: "사역 공지",
      time: "13:30",
      title: "3분기 교사 기도회 및 월례회",
      content: "주일 3부 예배 후 소예배실에서 교사 월례회가 진행됩니다. 분반별 심방 현황 및 하반기 사역 기획 안건을 함께 나눕니다.",
      author: "김희순 부장집사",
      date: "2026.08.23",
      isCurrent: false
    }
  ],
  currentSelectedClassId: "class_high3",
  gradeClasses: [
    {
      id: "class_high3",
      grade: "고3반",
      teacherName: "김대한 선생님",
      teacherDuty: "고3 담임 / 방송실 자막 & 미디어",
      teacherPhone: "010-3456-7890",
      teacherAvatar: "🧑🏻‍🏫",
      color: "#9a3412",
      badgeColor: "#fef5ea",
      students: [
        { id: "s_high3_1", name: "양형모", roleInfo: "예랑 찬양팀 (드럼)", grade: "고3", avatar: "👦🏻", attendance: "출석", recentVisit: "9/5 카톡 심방 완료 · 수시 진로 집중 기도 중", phone: "010-3849-2918" },
        { id: "s_high3_2", name: "이유리", roleInfo: "예배 헌금위원", grade: "고3", avatar: "👧🏻", attendance: "출석", recentVisit: "금주 헌금위원 순서 배정 · 공과 참석률 100%", phone: "010-9876-5432" },
        { id: "s_high3_3", name: "박성준", roleInfo: "고3 수험생", grade: "고3", avatar: "👦🏻", attendance: "출석", recentVisit: "수험생 격려 간식 전달 예정 · 수시 진로 집중 기도", phone: "010-5555-1234" }
      ]
    },
    {
      id: "class_high2",
      grade: "고2반",
      teacherName: "이은혜 선생님",
      teacherDuty: "고2 담임 / 예배 안내팀 지도",
      teacherPhone: "010-7788-9900",
      teacherAvatar: "👩🏻‍🏫",
      color: "#0369a1",
      badgeColor: "#f0f9ff",
      students: [
        { id: "s_high2_1", name: "최민서", roleInfo: "고2 / 방송실 음향", grade: "고2", avatar: "👧🏻", attendance: "출석", recentVisit: "중간고사 내신 준비 심방 격려 완료", phone: "010-4444-2222" },
        { id: "s_high2_2", name: "정도윤", roleInfo: "고2 / 찬양팀 베이스", grade: "고2", avatar: "👦🏻", attendance: "출석", recentVisit: "예배 반주 연습 및 1:1 진로 상담", phone: "010-3333-1111" }
      ]
    },
    {
      id: "class_mid",
      grade: "중등부반",
      teacherName: "박진우 선생님",
      teacherDuty: "중등부 담임 / 새친구 사역 멘토",
      teacherPhone: "010-8899-0011",
      teacherAvatar: "🧑🏻‍🏫",
      color: "#0f766e",
      badgeColor: "#f0fdfa",
      students: [
        { id: "s_mid_1", name: "김하람", roleInfo: "중2 / 새친구반 정착 학생", grade: "중2", avatar: "👧🏻", attendance: "출석", recentVisit: "새친구 4주 수료 후 중등부 적응 완료", phone: "010-5678-9012" },
        { id: "s_mid_2", name: "강태우", roleInfo: "중3 / 중등부 회장", grade: "중3", avatar: "👦🏻", attendance: "출석", recentVisit: "친구초청주일 레크리에이션 준비 나눔", phone: "010-6666-7777" }
      ]
    }
  ],
  newcomerMinistry: {
    teacherName: "소예진 선생님",
    teacherDuty: "새친구반 전담 담임 / 찬양팀 멘토",
    teacherPhone: "010-4567-8901",
    teacherAvatar: "🌱",
    students: [
      {
        id: "new_1",
        name: "한민준",
        grade: "고1",
        avatar: "👦🏻",
        registeredDate: "2026.09.01 (9월 1주)",
        interests: "농구, 찬양팀 드럼",
        prayerTopic: "교회 처음인데 또래 친구들과 잘 어울리고 적응하도록",
        currentStep: 3,
        progressPercent: 75,
        targetClass: "고1 남학생반",
        steps: [
          { week: 1, title: "새친구 등록 & 환영 선물 증정", desc: "예랑 웰컴 키트 및 말씀 다이어리 전달 완료 ✓", completed: true },
          { week: 2, title: "소예진 담임교사 1:1 카톡 인사 & 기도제목 나눔", desc: "학교 적응 및 첫 신앙생활 상담 완료 ✓", completed: true },
          { week: 3, title: "분반 또래 친구 소개 & 간식 교제", desc: "이번 주일 점심 시간 떡볶이 파티 예정 ⏳", completed: true },
          { week: 4, title: "새친구반 수료 축하 & 정규 분반 등반", desc: "수료패 증정 및 고1 남학생반 정규 편성 예정", completed: false }
        ]
      },
      {
        id: "new_2",
        name: "김하람",
        grade: "중2",
        avatar: "👧🏻",
        registeredDate: "2026.08.10 (8월 2주)",
        interests: "피아노, 독서",
        prayerTopic: "믿음 안에서 흔들리지 않고 바르게 자라가도록",
        currentStep: 4,
        progressPercent: 100,
        targetClass: "중2 여학생반",
        graduated: true,
        steps: [
          { week: 1, title: "새친구 등록 & 환영 선물 증정", desc: "웰컴 키트 전달 완료 ✓", completed: true },
          { week: 2, title: "담임교사 1:1 카톡 인사 & 심방", desc: "신앙 상담 및 기도제목 나눔 완료 ✓", completed: true },
          { week: 3, title: "또래 친구 소개 & 간식 교제", desc: "중2 친구들과 교제 모임 완료 ✓", completed: true },
          { week: 4, title: "새친구반 수료 축하 & 정규 등반", desc: "수료 완료 및 중2 여학생반 등반 완료 ✓", completed: true }
        ]
      }
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
        statusBadge: null,
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
  events: [
    {
      id: "event_1",
      title: "예랑 스카",
      subTitle: "중간고사 집중 스터디 카페",
      dday: "D-12",
      date: "10월 25일 (토) 10:00",
      location: "예랑실 및 비전홀",
      manager: "김대한 선생님",
      tag: "Focus Study Cafe",
      theme: "terracotta",
      icon: "menu_book",
      items: [
        { id: 1, title: "멀티탭 및 고속 충전기 10구 구매 (김대한T)", manager: "김대한T", checked: true, color: "green" },
        { id: 2, title: "야간 집중 간식(토스트/음료) 주문 (양선아T)", manager: "양선아T", checked: false, color: "default" },
        { id: 3, title: "스카 홍보 포스터 인쇄 및 게시 (정하람 전도사)", manager: "정하람 전도사", checked: true, color: "yellow" },
        { id: 4, title: "10분 말씀 큐티지 인쇄 (소예진T)", manager: "소예진T", checked: false, color: "default" },
        { id: 5, title: "자습실 좌석 배치 및 청소 당번표 확정 (정하람 전도사)", manager: "정하람 전도사", checked: true, color: "green" }
      ]
    },
    {
      id: "event_2",
      title: "10월 생일파티",
      subTitle: "10월 생일자 축복의 시간",
      dday: "D-26",
      date: "11월 08일 (토) 14:00",
      location: "중고등부실 본당",
      manager: "김희순 집사",
      tag: "Blessing Day",
      theme: "butter",
      icon: "cake",
      items: [
        { id: 201, title: "생일 선물 포장 및 롤링페이퍼 준비 (소예진T)", manager: "소예진T", checked: false, color: "default" },
        { id: 202, title: "생일 케이크 및 다과 주문 (김희순 집사)", manager: "김희순 집사", checked: true, color: "green" },
        { id: 203, title: "축복 찬양 및 특별 축하 영상 제작 (양선아T)", manager: "양선아T", checked: false, color: "default" }
      ]
    },
    {
      id: "event_3",
      title: "친구초청예배",
      subTitle: "친구와 함께하는 열린 예배",
      dday: "D-12",
      date: "10월 25일 (일) 11:00",
      location: "이룸교회 대예배실",
      manager: "정하람 전도사",
      tag: "Open Sunday",
      theme: "sage",
      icon: "volunteer_activism",
      items: [
        { id: 301, title: "초청 선물 키트 준비 (정하람 전도사)", manager: "정하람 전도사", checked: true, color: "green" },
        { id: 302, title: "환영 찬양 및 특별 순서 연습 (소예진T)", manager: "소예진T", checked: false, color: "default" },
        { id: 303, title: "새친구 환영 만찬 테이블 세팅 (김대한T)", manager: "김대한T", checked: false, color: "default" }
      ]
    }
  ],
  currentChecklistEventId: "event_1",
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
  calendarEvents: [
    // 10월
    { id: "evt_1", date: "2026-10-25", title: "🎉 친구초청", type: "event", color: "orange" },
    // 과거 일정 (8월, 9월)
    { id: "evt_2", date: "2026-08-15", title: "🏕️ 여름수련회", type: "event", color: "mint" },
    { id: "evt_3", date: "2026-09-06", title: "💻 스카준비", type: "event", color: "yellow" },
    { id: "evt_4", date: "2026-09-20", title: "🍂 2학기 개강예배", type: "event", color: "orange" },
    // 향후 일정 (11월, 12월)
    { id: "evt_5", date: "2026-11-15", title: "🌾 추수감사주일", type: "event", color: "yellow" },
    { id: "evt_6", date: "2026-12-25", title: "🎄 성탄축하예배", type: "event", color: "pink" }
  ],
  birthdays: [
    // 10월 생일 주인공 5명
    { id: "bday_1", month: 10, day: 1, name: "소예진T", roleDesc: "선생님", avatar: "👩🏻‍🏫" },
    { id: "bday_2", month: 10, day: 13, name: "김예원", roleDesc: "학생", avatar: "👧🏻" },
    { id: "bday_3", month: 10, day: 13, name: "김재원", roleDesc: "학생", avatar: "👦🏻" },
    { id: "bday_4", month: 10, day: 15, name: "양형모", roleDesc: "학생", avatar: "👦🏻" },
    { id: "bday_5", month: 10, day: 22, name: "김하람", roleDesc: "학생", avatar: "👧🏻" },
    // 과거 및 다른 월 생일 주인공
    { id: "bday_6", month: 8, day: 30, name: "김희순 집사", roleDesc: "부장집사님", avatar: "👔" },
    { id: "bday_7", month: 9, day: 10, name: "김대한T", roleDesc: "선생님", avatar: "🧑🏻‍🏫" },
    { id: "bday_8", month: 11, day: 7, name: "나하은T", roleDesc: "선생님(회계)", avatar: "💼" },
    { id: "bday_9", month: 12, day: 19, name: "정하람 전도사", roleDesc: "전도사", avatar: "✝️" }
  ],
  users: [
    {
      id: "u1",
      name: "정하람 전도사",
      username: "pastor",
      password: "password",
      role: "pastor",
      duty: "중고등부 총괄 사역 & 설교",
      birthday: "1994-05-12",
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
      birthday: "1997-08-20",
      phone: "010-2345-6789",
      avatar: "💼",
      isAdmin: false
    },
    {
      id: "u3",
      name: "김대한 선생님",
      username: "teacher",
      password: "password",
      role: "teacher_grade",
      duty: "고3 담임 / 방송실 자막 & 미디어",
      birthday: "1995-11-03",
      phone: "010-3456-7890",
      avatar: "🧑🏻‍🏫",
      isAdmin: false
    },
    {
      id: "u4",
      name: "소예진 선생님",
      username: "teacher2",
      password: "password",
      role: "teacher_new",
      duty: "새친구반 담임 / 찬양팀 멘토",
      birthday: "1998-03-15",
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
      birthday: "2008-04-22",
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
      birthday: "2012-09-18",
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
      if (!parsed.calendarEvents || parsed.calendarEvents.length === 0) {
        parsed.calendarEvents = JSON.parse(JSON.stringify(INITIAL_DATA.calendarEvents));
      }
      if (!parsed.birthdays || parsed.birthdays.length === 0) {
        parsed.birthdays = JSON.parse(JSON.stringify(INITIAL_DATA.birthdays));
      }
      if (!parsed.events || parsed.events.length === 0) {
        parsed.events = JSON.parse(JSON.stringify(INITIAL_DATA.events));
        // If there was legacy checklist, migrate it to events[0]
        if (parsed.checklist && parsed.checklist.items) {
          parsed.events[0].items = parsed.checklist.items;
          if (parsed.checklist.eventName) parsed.events[0].title = parsed.checklist.eventName;
          if (parsed.checklist.dday) parsed.events[0].dday = parsed.checklist.dday;
          if (parsed.checklist.manager) parsed.events[0].manager = parsed.checklist.manager;
        }
      }
      if (!parsed.currentChecklistEventId) {
        parsed.currentChecklistEventId = parsed.events[0] ? parsed.events[0].id : "event_1";
      }
      if (parsed.agendas && parsed.agendas.pending && parsed.staffBox && parsed.staffBox.items) {
        parsed.agendas.pending.forEach(pa => {
          const matched = parsed.staffBox.items.find(si => si.type === "회의안건" && (si.agendaId === pa.id || si.title.includes(pa.title.replace("[제안]", "").trim())));
          if (matched) {
            matched.agendaId = pa.id;
          }
        });
      }
      // Clear '전도사 승인완료' badges from confirmed agendas
      if (parsed.agendas && parsed.agendas.confirmed) {
        parsed.agendas.confirmed.forEach(a => {
          if (a.statusBadge && a.statusBadge.includes("전도사 승인완료")) {
            a.statusBadge = null;
          }
        });
      }
      // Upgrade teacher roles to teacher_grade or teacher_new
      if (parsed.users && Array.isArray(parsed.users)) {
        parsed.users.forEach(u => {
          if (u.id === "u3" || (u.duty && u.duty.includes("고3") && u.role === "teacher")) {
            u.role = "teacher_grade";
          }
          if (u.id === "u4" || (u.duty && u.duty.includes("새친구") && u.role === "teacher")) {
            u.role = "teacher_new";
          }
        });
      }
      // Ensure gradeClasses and newcomerMinistry exist
      if (!parsed.gradeClasses || parsed.gradeClasses.length === 0) {
        parsed.gradeClasses = JSON.parse(JSON.stringify(INITIAL_DATA.gradeClasses));
      }
      if (!parsed.newcomerMinistry) {
        parsed.newcomerMinistry = JSON.parse(JSON.stringify(INITIAL_DATA.newcomerMinistry));
      }
      if (!parsed.currentSelectedClassId) {
        parsed.currentSelectedClassId = "class_high3";
      }
      if (!parsed.notices || !Array.isArray(parsed.notices) || parsed.notices.length === 0) {
        parsed.notices = JSON.parse(JSON.stringify(INITIAL_DATA.notices));
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

      // 스케줄 서브탭 권한 및 캘린더 화면 갱신
      if (targetId === "view-scheduler") {
        if (typeof renderSchedulerSubTabsByRole === "function") renderSchedulerSubTabsByRole();
        if (typeof renderCalendarSection === "function") renderCalendarSection();
      }

      // Scroll top
      const container = document.getElementById("screensContainer");
      if (container) container.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// Switch to specific tab programmatically
function switchToTab(viewId) {
  // Enforce role-based access control for segregated class views
  const currentUser = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
  const userRole = currentUser ? currentUser.role : currentRole;

  if (viewId === "view-teacher-new") {
    if (userRole === "teacher_grade" || (userRole === "teacher" && (!currentUser || !currentUser.duty || !currentUser.duty.includes("새친구")))) {
      showToast("공과 선생님은 공과반 메뉴만 열람할 수 있습니다 🔒", "warning");
      return;
    }
    if (userRole === "student") {
      showToast("선생님 전용 메뉴입니다 🔒", "warning");
      return;
    }
  }

  if (viewId === "view-teacher-grade") {
    if (userRole === "teacher_new" || (currentUser && currentUser.duty && currentUser.duty.includes("새친구") && userRole !== "pastor" && userRole !== "deacon")) {
      showToast("새친구반 선생님은 새친구반 메뉴만 열람할 수 있습니다 🔒", "warning");
      return;
    }
    if (userRole === "student") {
      showToast("선생님 전용 메뉴입니다 🔒", "warning");
      return;
    }
  }

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

    // Update class switcher active buttons if present
    document.querySelectorAll(".admin-class-switcher").forEach(switcher => {
      const btns = switcher.querySelectorAll(".btn-class-switch");
      if (viewId === "view-teacher-grade" && btns.length >= 2) {
        btns[0].classList.add("active");
        btns[0].style.background = "#fff";
        btns[0].style.color = "#9a3412";
        btns[1].classList.remove("active");
        btns[1].style.background = "transparent";
        btns[1].style.color = "#78716c";
      } else if (viewId === "view-teacher-new" && btns.length >= 2) {
        btns[1].classList.add("active");
        btns[1].style.background = "#fff";
        btns[1].style.color = "#15803d";
        btns[0].classList.remove("active");
        btns[0].style.background = "transparent";
        btns[0].style.color = "#78716c";
      }
    });

    const container = document.getElementById("screensContainer");
    if (container) container.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// =============================================================================
// 4. Screen 1: 공과·새친구반 & 학생부 목양종합 Rendering & Events
// =============================================================================

function switchClassMinistrySubTab(tabKey) {
  const panelGrade = document.getElementById("panel-ministry-grade");
  const panelNewcomer = document.getElementById("panel-ministry-newcomer");
  const panelStudents = document.getElementById("panel-ministry-students");

  if (panelGrade) panelGrade.style.display = (tabKey === "grade") ? "block" : "none";
  if (panelNewcomer) panelNewcomer.style.display = (tabKey === "newcomer") ? "block" : "none";
  if (panelStudents) panelStudents.style.display = (tabKey === "students") ? "block" : "none";

  const subTabContainer = document.getElementById("classMinistrySubTabs");
  if (subTabContainer) {
    const btns = subTabContainer.querySelectorAll(".sub-tab-btn");
    btns.forEach(btn => {
      const isTarget = (btn.dataset.subtab === tabKey);
      btn.classList.toggle("active", isTarget);
      if (isTarget) {
        btn.style.background = "#fff";
        btn.style.fontWeight = "800";
        btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.06)";
        if (tabKey === "grade") btn.style.color = "#9a3412";
        else if (tabKey === "newcomer") btn.style.color = "#15803d";
        else btn.style.color = "#2563eb";
      } else {
        btn.style.background = "transparent";
        btn.style.fontWeight = "700";
        btn.style.boxShadow = "none";
        btn.style.color = "#78716c";
      }
    });
  }

  // Update screen header title/subtitle dynamically
  const titleEl = document.getElementById("screenTitle");
  const subtitleEl = document.getElementById("screenSubtitle");
  if (tabKey === "grade") {
    if (titleEl) titleEl.textContent = "공과공부 & 분반 목양";
    if (subtitleEl) subtitleEl.textContent = "고3 분반 학생 출결 및 심방 지도";
    renderClassMinistrySection();
  } else if (tabKey === "newcomer") {
    if (titleEl) titleEl.textContent = "새친구반 적응 & 정착";
    if (subtitleEl) subtitleEl.textContent = "새친구반 4주 체크리스트 & 등반 관리";
    renderNewcomerMinistrySection();
  } else if (tabKey === "students") {
    if (titleEl) titleEl.textContent = "학생 심방 & 기도제목";
    if (subtitleEl) subtitleEl.textContent = "청소년부 학생 돌봄 & 신앙 관리";
    renderStudentSection();
  }
}

function selectGradeClass(classId) {
  appState.currentSelectedClassId = classId;
  saveState();
  renderClassMinistrySection();
}

function toggleStudentAttendance(classId, studentId) {
  const classes = appState.gradeClasses || INITIAL_DATA.gradeClasses;
  const cls = classes.find(c => c.id === classId);
  if (cls) {
    const student = cls.students.find(s => s.id === studentId);
    if (student) {
      student.attendance = (student.attendance === "출석") ? "결석" : "출석";
      saveState();
      renderClassMinistrySection();
      showToast(`${student.name} 학생의 출결 상태가 '${student.attendance}'으로 변경되었습니다. 👍`);
    }
  }
}

function addNewStudentToClass(classId) {
  const name = prompt("추가할 분반 학생의 이름을 입력하세요 (예: 이민호):");
  if (!name || !name.trim()) return;
  const roleInfo = prompt("학생의 분반/역할 정보를 입력하세요 (예: 고3 / 찬양팀):") || "학생";

  const classes = appState.gradeClasses || INITIAL_DATA.gradeClasses;
  const cls = classes.find(c => c.id === classId);
  if (cls) {
    cls.students.push({
      id: "s_" + Date.now(),
      name: name.trim(),
      roleInfo: roleInfo.trim(),
      grade: cls.grade,
      avatar: "👦🏻",
      attendance: "출석",
      recentVisit: "신규 등록됨 · 첫 분반 모임 진행 예정",
      phone: "010-0000-0000"
    });
    saveState();
    renderClassMinistrySection();
    showToast(`${name.trim()} 학생이 ${cls.grade}에 등록되었습니다! 🎉`);
  }
}

function toggleNewcomerStep(studentId, week) {
  const data = appState.newcomerMinistry || INITIAL_DATA.newcomerMinistry;
  const student = data.students.find(s => s.id === studentId);
  if (!student) return;

  const step = student.steps.find(st => st.week === week);
  if (!step) return;

  step.completed = !step.completed;
  const completedCount = student.steps.filter(st => st.completed).length;
  student.progressPercent = Math.round((completedCount / student.steps.length) * 100);
  student.graduated = (student.progressPercent === 100);

  saveState();
  renderNewcomerMinistrySection();

  if (student.graduated) {
    showToast(`🎉 축하합니다! ${student.name} 학생이 4주 전 과정을 수료하여 ${student.targetClass} 등반 대상이 되었습니다! 🎓`);
  } else {
    showToast(`${student.name} 학생의 ${week}주차 과정이 '${step.completed ? '완료 ✓' : '진행전'}'으로 변경되었습니다.`);
  }
}

function addNewcomerStudent() {
  const name = prompt("새친구 학생의 이름을 입력하세요 (예: 송하은):");
  if (!name || !name.trim()) return;
  const grade = prompt("새친구의 학년을 입력하세요 (예: 고1):") || "고1";
  const interests = prompt("새친구의 관심사나 특기를 입력하세요 (예: 축구, 보컬):") || "새 신앙생활";

  const data = appState.newcomerMinistry || INITIAL_DATA.newcomerMinistry;
  data.students.unshift({
    id: "new_" + Date.now(),
    name: name.trim(),
    grade: grade.trim(),
    avatar: "👧🏻",
    registeredDate: new Date().toLocaleDateString("ko-KR"),
    interests: interests.trim(),
    prayerTopic: "교회에 잘 적응하고 좋은 믿음의 친구들을 만나도록",
    currentStep: 1,
    progressPercent: 25,
    targetClass: `${grade.trim()} 분반`,
    graduated: false,
    steps: [
      { week: 1, title: "새친구 등록 & 환영 선물 증정", desc: "예랑 웰컴 키트 전달 완료 ✓", completed: true },
      { week: 2, title: "소예진 담임교사 1:1 카톡 인사 & 기도나눔", desc: "학교 적응 및 첫 신앙생활 상담 예정", completed: false },
      { week: 3, title: "분반 또래 친구 소개 & 간식 교제", desc: "주일 점심 시간 또래 친구 교제 예정", completed: false },
      { week: 4, title: "새친구반 수료 축하 & 정규 분반 등반", desc: "수료패 증정 및 정규 분반 편성 예정", completed: false }
    ]
  });
  saveState();
  renderNewcomerMinistrySection();
  showToast(`🌱 ${name.trim()} 학생이 새친구반에 새로 등록되었습니다! 환영합니다!`);
}

function renderClassMinistrySection() {
  const containers = [
    document.getElementById("pastorClassMinistryRoot"),
    document.getElementById("teacherGradeClassRoot")
  ].filter(Boolean);

  if (containers.length === 0) return;

  const classes = appState.gradeClasses || INITIAL_DATA.gradeClasses;
  const currentClassId = appState.currentSelectedClassId || "class_high3";
  const activeClass = classes.find(c => c.id === currentClassId) || classes[0];

  const currentUser = (typeof getCurrentUser === "function") ? getCurrentUser() : null;
  const isPastorOrDeacon = !currentUser || currentUser.role === "pastor" || currentUser.role === "deacon";

  containers.forEach(container => {
    let chipsHtml = "";
    if (isPastorOrDeacon) {
      chipsHtml = `
        <div style="display:flex; gap:6px; overflow-x:auto; padding-bottom:8px; margin-bottom:12px; scrollbar-width:none;">
          ${classes.map(c => {
            const isSel = c.id === activeClass.id;
            return `
              <button type="button" class="class-chip-btn" onclick="selectGradeClass('${c.id}')" style="padding:7px 12px; font-size:12px; font-weight:${isSel ? '800' : '600'}; border-radius:12px; border:1.5px solid ${isSel ? c.color : '#e2d9cf'}; background:${isSel ? c.color : '#fff'}; color:${isSel ? '#fff' : '#57534e'}; white-space:nowrap; cursor:pointer; display:flex; align-items:center; gap:4px; box-shadow:${isSel ? '0 3px 8px rgba(0,0,0,0.12)' : 'none'}; transition:all 0.15s ease;">
                <span>${c.teacherAvatar}</span>
                <span>${c.grade} (${c.teacherName.split(' ')[0]})</span>
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="agenda-date-badge" style="background:#fef5ea; border-color:#fad5b6; color:#ad551b; margin-bottom:12px;">
        📖 5주차 공과: '믿음의 기초와 말씀 묵상'
      </div>

      ${chipsHtml}

      <!-- 담임 선생님 프로필 카드 -->
      <div class="teacher-profile-banner" style="background:linear-gradient(135deg, #fffcf9 0%, #fff7ed 100%); border:1.5px solid #fed7aa; border-radius:20px; padding:15px; margin-bottom:18px; box-shadow:0 4px 14px rgba(234,88,12,0.06);">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
          <div style="font-size:11px; font-weight:800; color:#ea580c; background:#ffedd5; padding:2px 8px; border-radius:6px; letter-spacing:-0.2px;">
            🏷️ ${activeClass.grade} 담당 교사
          </div>
          <span style="font-size:11px; color:#9a3412; font-weight:700;">재적 ${activeClass.students.length}명 관리</span>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:48px; height:48px; border-radius:16px; background:#ffedd5; display:flex; align-items:center; justify-content:center; font-size:24px; border:1px solid #fdba74; flex-shrink:0;">
            ${activeClass.teacherAvatar}
          </div>
          <div style="flex:1; min-width:0;">
            <div style="font-size:15px; font-weight:800; color:#2d261e; display:flex; align-items:center; gap:6px;">
              <span>${activeClass.teacherName}</span>
              <span class="role-identity-tag tag-teacher" style="font-size:9.5px; padding:1px 5px;">공과담임</span>
            </div>
            <div style="font-size:11.5px; color:#78716c; margin-top:1px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
              ${activeClass.teacherDuty}
            </div>
            <div style="font-size:11px; color:#ea580c; font-weight:600; margin-top:2px;">
              📞 ${activeClass.teacherPhone}
            </div>
          </div>
          <div style="display:flex; gap:6px;">
            <a href="tel:${activeClass.teacherPhone}" class="btn-icon" style="width:36px; height:36px; border-radius:12px; background:#fff; border:1px solid #fed7aa; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:16px;" title="전화걸기">📞</a>
            <button type="button" class="btn-icon" onclick="showToast('${activeClass.teacherName} 선생님과의 1:1 카톡 상담창을 엽니다 💬', 'info')" style="width:36px; height:36px; border-radius:12px; background:#fff; border:1px solid #fed7aa; display:flex; align-items:center; justify-content:center; font-size:16px;" title="카톡 대화">💬</button>
          </div>
        </div>
      </div>

      <!-- 해당 분반 학생 출결 & 목양 관리 -->
      <div class="section-label" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span>👥 ${activeClass.grade} 학생 관리 & 출결</span>
        <button type="button" onclick="addNewStudentToClass('${activeClass.id}')" style="font-size:11.5px; font-weight:800; color:#ea580c; background:none; border:none; cursor:pointer; padding:2px 6px;">
          ＋ 학생 추가
        </button>
      </div>

      <div class="timeline-list" style="display:flex; flex-direction:column; gap:8px;">
        ${activeClass.students.map(s => {
          const isAttended = (s.attendance === "출석");
          return `
            <div class="timeline-item" style="background:#fff; border:1px solid #f1e9e0; border-radius:16px; padding:12px; display:flex; align-items:center; gap:10px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
              <div style="width:38px; height:38px; border-radius:12px; background:${isAttended ? '#e0f2fe' : '#fef2f2'}; display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0;">
                ${s.avatar || '👦🏻'}
              </div>
              <div class="timeline-content" style="flex:1; min-width:0;">
                <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                  <span style="font-size:13.5px; font-weight:800; color:#2d261e;">${s.name}</span>
                  <span style="font-size:11px; color:#78716c;">(${s.roleInfo || s.grade})</span>
                </div>
                <div style="font-size:11.5px; color:#8c827a; line-height:1.4; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                  ${s.recentVisit}
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:6px;">
                <button type="button" onclick="toggleStudentAttendance('${activeClass.id}', '${s.id}')" style="padding:4px 8px; font-size:11px; font-weight:800; border-radius:8px; border:none; cursor:pointer; background:${isAttended ? '#dcfce7' : '#fee2e2'}; color:${isAttended ? '#166534' : '#991b1b'}; transition:all 0.15s ease;">
                  ${isAttended ? '출석 ✓' : '결석 ✕'}
                </button>
                <button class="timeline-icon-btn" onclick="showToast('${s.name} 학생에게 1:1 응원 톡을 보냅니다 💬', 'info')" style="width:32px; height:32px; border-radius:10px; background:#f8fafc; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; font-size:14px; cursor:pointer;">
                  💬
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Section 2: 이번 주 공과 교재 요약 -->
      <div class="section-label" style="margin-top:20px;">
        <span>📑 금주 공과 나눔 핵심 가이드</span>
        <span style="font-size:11px; font-weight:700; color:#888;">시편 119:105</span>
      </div>
      <div class="card p-4" style="background:#faf8f5; border:1px solid #ebd9c8; border-radius:18px;">
        <div style="font-size:12.5px; font-weight:800; color:#9a3412; margin-bottom:4px;">💡 교사 나눔 팁</div>
        <p style="font-size:12px; color:#57534e; line-height:1.6; margin:0;">
          수험생 아이들이 진로에 대한 불안감 대신 하나님의 말씀을 발의 등불 삼을 수 있도록 격려해주세요. 말씀 묵상 나눔 후 함께 손잡고 축복 기도하는 시간을 갖습니다.
        </p>
      </div>

      <div style="display:flex; gap:8px; margin-top:16px;">
        <button class="btn-primary" style="flex:1; background:#e67e22;" onclick="openModal('visitModal')">
          <span>＋</span> <span>새 심방 일지 등록</span>
        </button>
        <button class="btn-secondary" style="flex:1; border-color:#fad5b6; color:#9a3412; font-size:13px; font-weight:800;" onclick="addNewStudentToClass('${activeClass.id}')">
          <span>👤</span> <span>학생 추가</span>
        </button>
      </div>
    `;
  });
}

function renderNewcomerMinistrySection() {
  const containers = [
    document.getElementById("pastorNewcomerRoot"),
    document.getElementById("teacherNewcomerRoot")
  ].filter(Boolean);

  if (containers.length === 0) return;

  const data = appState.newcomerMinistry || INITIAL_DATA.newcomerMinistry;

  containers.forEach(container => {
    container.innerHTML = `
      <div class="agenda-date-badge" style="background:#f0fdf4; border-color:#bbf7d0; color:#166534; margin-bottom:12px;">
        🌱 새친구반 4주 적응 & 등반 관리
      </div>

      <!-- 새친구반 전담 교사 프로필 카드 -->
      <div class="teacher-profile-banner" style="background:linear-gradient(135deg, #f0fdf4 0%, #f7fee7 100%); border:1.5px solid #bbf7d0; border-radius:20px; padding:15px; margin-bottom:18px; box-shadow:0 4px 14px rgba(22,163,74,0.06);">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
          <div style="font-size:11px; font-weight:800; color:#15803d; background:#dcfce7; padding:2px 8px; border-radius:6px; letter-spacing:-0.2px;">
            🌱 새친구반 전담 멘토 교사
          </div>
          <span style="font-size:11px; color:#166534; font-weight:700;">새친구 ${data.students.length}명 관리 중</span>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:48px; height:48px; border-radius:16px; background:#dcfce7; display:flex; align-items:center; justify-content:center; font-size:24px; border:1px solid #86efac; flex-shrink:0;">
            ${data.teacherAvatar}
          </div>
          <div style="flex:1; min-width:0;">
            <div style="font-size:15px; font-weight:800; color:#14532d; display:flex; align-items:center; gap:6px;">
              <span>${data.teacherName}</span>
              <span class="role-identity-tag tag-teacher" style="font-size:9.5px; padding:1px 5px; background:#dcfce7; color:#166534;">새친구멘토</span>
            </div>
            <div style="font-size:11.5px; color:#4b7a5a; margin-top:1px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
              ${data.teacherDuty}
            </div>
            <div style="font-size:11px; color:#16a34a; font-weight:600; margin-top:2px;">
              📞 ${data.teacherPhone}
            </div>
          </div>
          <div style="display:flex; gap:6px;">
            <a href="tel:${data.teacherPhone}" class="btn-icon" style="width:36px; height:36px; border-radius:12px; background:#fff; border:1px solid #bbf7d0; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:16px;" title="전화걸기">📞</a>
            <button type="button" class="btn-icon" onclick="showToast('${data.teacherName} 선생님과의 1:1 대화방을 엽니다 💬', 'info')" style="width:36px; height:36px; border-radius:12px; background:#fff; border:1px solid #bbf7d0; display:flex; align-items:center; justify-content:center; font-size:16px;" title="카톡 대화">💬</button>
          </div>
        </div>
      </div>

      <!-- 새친구 학생별 4주 정착 과정 트래커 -->
      <div class="section-label" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span>🌱 새친구 4주 적응 & 등반 로드맵</span>
        <button type="button" onclick="addNewcomerStudent()" style="font-size:11.5px; font-weight:800; color:#16a34a; background:none; border:none; cursor:pointer; padding:2px 6px;">
          ＋ 새친구 등록
        </button>
      </div>

      <div style="display:flex; flex-direction:column; gap:16px;">
        ${data.students.map(s => {
          const completedCount = s.steps.filter(st => st.completed).length;
          const percent = Math.round((completedCount / s.steps.length) * 100);
          const isDone = percent === 100;
          return `
            <div class="newcomer-student-card" style="background:#fff; border:1.5px solid ${isDone ? '#bbf7d0' : '#fed7aa'}; border-radius:18px; padding:16px; box-shadow:0 3px 10px rgba(0,0,0,0.03);">
              <!-- Top Row: Avatar, Name, Grade, Target Class -->
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <div style="width:36px; height:36px; border-radius:12px; background:${isDone ? '#dcfce7' : '#ffedd5'}; display:flex; align-items:center; justify-content:center; font-size:18px;">
                    ${s.avatar || '👦🏻'}
                  </div>
                  <div>
                    <div style="font-size:14px; font-weight:800; color:#1f2937; display:flex; align-items:center; gap:6px;">
                      <span>${s.name} (${s.grade})</span>
                      <span style="font-size:10px; font-weight:800; padding:1px 6px; border-radius:6px; background:${isDone ? '#dcfce7' : '#fef3c7'}; color:${isDone ? '#166534' : '#92400e'};">
                        ${isDone ? '등반 수료 🎓' : `${completedCount}/4주 진행중 ⏳`}
                      </span>
                    </div>
                    <div style="font-size:11px; color:#6b7280; margin-top:1px;">
                      등록: ${s.registeredDate} · 배정 예정: <strong style="color:#0369a1;">${s.targetClass}</strong>
                    </div>
                  </div>
                </div>
                <button type="button" onclick="showToast('${s.name} 학생에게 환영 응원 톡을 보냅니다 💬', 'info')" style="width:32px; height:32px; border-radius:10px; background:#f8fafc; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; font-size:14px; cursor:pointer;">
                  💬
                </button>
              </div>

              <!-- Progress Bar -->
              <div style="margin-bottom:12px;">
                <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:700; margin-bottom:4px; color:${isDone ? '#166534' : '#ea580c'};">
                  <span>정착 진행도</span>
                  <span>${percent}%</span>
                </div>
                <div style="width:100%; height:7px; background:#f3f4f6; border-radius:10px; overflow:hidden;">
                  <div style="width:${percent}%; height:100%; background:${isDone ? 'linear-gradient(90deg, #22c55e, #16a34a)' : 'linear-gradient(90deg, #f97316, #ea580c)'}; border-radius:10px; transition:width 0.3s ease;"></div>
                </div>
              </div>

              <!-- 4-Week Milestone Steps (Interactive) -->
              <div style="display:flex; flex-direction:column; gap:6px; background:#fafaf9; padding:10px; border-radius:14px; border:1px solid #f5f5f4;">
                ${s.steps.map(step => {
                  return `
                    <div onclick="toggleNewcomerStep('${s.id}', ${step.week})" style="display:flex; align-items:center; gap:8px; padding:6px 8px; border-radius:10px; background:${step.completed ? '#f0fdf4' : '#fff'}; border:1px solid ${step.completed ? '#bbf7d0' : '#e7e5e4'}; cursor:pointer; transition:all 0.15s ease;">
                      <div style="width:24px; height:24px; border-radius:8px; background:${step.completed ? '#22c55e' : '#e5e7eb'}; color:${step.completed ? '#fff' : '#6b7280'}; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; flex-shrink:0;">
                        ${step.completed ? '✓' : step.week}
                      </div>
                      <div style="flex:1; min-width:0;">
                        <div style="font-size:12px; font-weight:700; color:${step.completed ? '#166534' : '#374151'};">
                          ${step.title}
                        </div>
                        <div style="font-size:10.5px; color:#78716c; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                          ${step.desc}
                        </div>
                      </div>
                      <span style="font-size:11px; color:${step.completed ? '#16a34a' : '#9ca3af'}; font-weight:700;">
                        ${step.completed ? '완료' : '진행전'}
                      </span>
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Interest & Prayer -->
              ${s.interests ? `
                <div style="margin-top:10px; font-size:11px; color:#57534e; background:#fff; padding:6px 10px; border-radius:8px; border:1px dashed #d6d3d1;">
                  💡 <strong>관심사:</strong> ${s.interests} | <strong>기도제목:</strong> ${s.prayerTopic}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>

      <div style="display:flex; gap:8px; margin-top:16px;">
        <button class="btn-primary" style="flex:1; background:#16a34a;" onclick="openModal('visitModal')">
          <span>＋</span> <span>새친구 심방/상담 일지</span>
        </button>
        <button class="btn-secondary" style="flex:1; border-color:#bbf7d0; color:#166534; font-size:13px; font-weight:800;" onclick="addNewcomerStudent()">
          <span>🌱</span> <span>새친구 등록</span>
        </button>
      </div>
    `;
  });
}

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
  appState.agendas.confirmed.forEach((agenda, index) => {
    const card = document.createElement("div");
    card.className = "agenda-card default-border";
    if (agenda.type === "cyan") card.classList.add("cyan-border");
    if (agenda.type === "yellow") card.classList.add("yellow-border");

    let badgeHtml = "";
    if (agenda.statusBadge) {
      badgeHtml = `<span class="approval-badge">${agenda.statusBadge}</span>`;
    }

    // 전도사(pastor)인 경우 순서 변경(위/아래) 버튼 + 수정/삭제 버튼 제공
    let actionButtonsHtml = "";
    if (isPastor) {
      const isFirst = (index === 0);
      const isLast = (index === appState.agendas.confirmed.length - 1);
      actionButtonsHtml = `
        <div style="display:flex; align-items:center; gap:4px; margin-left:auto;">
          <!-- 순서 이동 버튼 -->
          <div style="display:flex; align-items:center; gap:2px; margin-right:4px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:2px;">
            <button type="button" class="move-up-agenda-btn" data-agenda-id="${agenda.id}" ${isFirst ? "disabled" : ""} style="width:26px; height:24px; font-size:11px; font-weight:800; border-radius:6px; border:none; background:${isFirst ? "transparent" : "#ffffff"}; color:${isFirst ? "#cbd5e1" : "#475569"}; cursor:${isFirst ? "default" : "pointer"}; box-shadow:${isFirst ? "none" : "0 1px 2px rgba(0,0,0,0.05)"}; display:flex; align-items:center; justify-content:center;" title="위로 이동">
              ▲
            </button>
            <button type="button" class="move-down-agenda-btn" data-agenda-id="${agenda.id}" ${isLast ? "disabled" : ""} style="width:26px; height:24px; font-size:11px; font-weight:800; border-radius:6px; border:none; background:${isLast ? "transparent" : "#ffffff"}; color:${isLast ? "#cbd5e1" : "#475569"}; cursor:${isLast ? "default" : "pointer"}; box-shadow:${isLast ? "none" : "0 1px 2px rgba(0,0,0,0.05)"}; display:flex; align-items:center; justify-content:center;" title="아래로 이동">
              ▼
            </button>
          </div>
          <button type="button" class="edit-confirmed-agenda-btn" data-agenda-id="${agenda.id}" style="padding:4px 8px; font-size:11px; font-weight:700; background:#f5efff; color:#6c35c4; border-radius:6px; border:1px solid #e0c8ff; cursor:pointer;" title="안건 수정">
            ✏️ 수정
          </button>
          <button type="button" class="delete-confirmed-agenda-btn" data-agenda-id="${agenda.id}" style="padding:4px 7px; font-size:11px; background:#fff0f0; color:#ef4444; border-radius:6px; border:1px solid #fecaca; cursor:pointer;" title="안건 삭제">
            🗑️
          </button>
        </div>
      `;
    }

    card.dataset.agendaId = agenda.id;
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

    // 위로 이동 버튼 이벤트
    const moveUpBtn = card.querySelector(".move-up-agenda-btn");
    if (moveUpBtn && !moveUpBtn.disabled) {
      moveUpBtn.addEventListener("click", () => {
        moveConfirmedAgenda(agenda.id, -1);
      });
    }

    // 아래로 이동 버튼 이벤트
    const moveDownBtn = card.querySelector(".move-down-agenda-btn");
    if (moveDownBtn && !moveDownBtn.disabled) {
      moveDownBtn.addEventListener("click", () => {
        moveConfirmedAgenda(agenda.id, 1);
      });
    }

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
          renumberConfirmedAgendas();
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

// 안건 순서 변경 시 [안건 1], [안건 2] 번호 자동 재정렬
function renumberConfirmedAgendas() {
  if (!appState.agendas || !appState.agendas.confirmed) return;
  appState.agendas.confirmed.forEach((agenda, idx) => {
    const cleanTitle = agenda.title.replace(/\[안건 \d+\]\s*/, "").trim();
    agenda.title = `[안건 ${idx + 1}] ${cleanTitle}`;
  });
}

// 확정 안건 위/아래 순서 이동 (▲/▼ 버튼)
function moveConfirmedAgenda(agendaId, direction) {
  if (!appState.agendas || !appState.agendas.confirmed) return;
  const fromIndex = appState.agendas.confirmed.findIndex(a => a.id === agendaId);
  if (fromIndex === -1) return;

  const toIndex = fromIndex + direction;
  if (toIndex < 0 || toIndex >= appState.agendas.confirmed.length) return;

  const [movedItem] = appState.agendas.confirmed.splice(fromIndex, 1);
  appState.agendas.confirmed.splice(toIndex, 0, movedItem);

  renumberConfirmedAgendas();
  saveState();
  renderAgendaSection();
  showToast("안건 순서가 변경되었습니다! 📋", "success");
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
    statusBadge: null,
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

// 출결 작성자 판별 헬퍼 (ID 또는 이름 비교)
function isAttendanceAuthor(att, user) {
  if (!att || !user) return false;
  if (att.userId && user.id && att.userId === user.id) return true;
  const cleanAttName = (att.name || "").replace(/선생님|집사님|전도사님|교사|T|쌤/gi, "").replace(/\s+/g, "");
  const cleanUserName = (user.name || "").replace(/선생님|집사님|전도사님|교사|T|쌤/gi, "").replace(/\s+/g, "");
  return !!(cleanAttName && cleanUserName && (cleanAttName === cleanUserName || cleanAttName.includes(cleanUserName) || cleanUserName.includes(cleanAttName)));
}

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
    : appState.attendance.filter(att => isAttendanceAuthor(att, currentUser));

  // 3. 나의 예배 불참/지각 등록 버튼: 전도사에게만 비노출 (선생님+학생 모두 노출)
  const openAbsentBtn = document.getElementById("openAbsentModalBtn");
  if (openAbsentBtn) {
    openAbsentBtn.style.display = isPastor ? "none" : "";
  }

  if (filteredAttendance.length === 0) {
    const emptyEl = document.createElement("div");
    emptyEl.style.cssText = "padding: 36px 16px; text-align: center; background: #ffffff; border-radius: 16px; border: 1.5px dashed #f1ddd2; color: #94a3b8; margin: 12px 0;";
    emptyEl.innerHTML = isPastor ? `
      <div style="font-size: 32px; margin-bottom: 8px;">📋</div>
      <div style="font-size: 14px; font-weight: 800; color: #475569; margin-bottom: 4px;">등록된 교사 출결 특이사항이 없습니다</div>
      <div style="font-size: 12px; color: #94a3b8; line-height: 1.5;">이번 주 모든 선생님이 정상 출석 예정입니다. 🌤️</div>
    ` : `
      <div style="font-size: 32px; margin-bottom: 8px;">📋</div>
      <div style="font-size: 14px; font-weight: 800; color: #475569; margin-bottom: 4px;">등록된 나의 예배 출결 내역이 없습니다</div>
      <div style="font-size: 12px; color: #94a3b8; line-height: 1.5;">이번 주 주일 예배에 사전 결석 또는 지각 예정이실 경우<br>아래 버튼을 눌러 등록해주세요.</div>
    `;
    listEl.appendChild(emptyEl);
    return;
  }

  filteredAttendance.forEach(att => {
    const isLate = att.status === "지각";
    const isAuthor = isAttendanceAuthor(att, currentUser);
    const canEdit = isPastor || isAuthor;
    const canDelete = isPastor;

    const card = document.createElement("div");
    card.className = `teacher-att-card ${isLate ? "late-card" : ""}`;

    card.innerHTML = `
      <div class="teacher-card-top">
        <div class="teacher-profile">
          <div class="teacher-avatar-sm">${att.avatar || "👤"}</div>
          <div>
            <div class="teacher-name-txt">${att.name}</div>
            <div class="teacher-reason-pill">${att.role}</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <div class="${isLate ? "badge-late" : "badge-absent"}">
            ${att.status} ${isLate ? "⏰" : "✕"}
          </div>
          ${canEdit ? `
            <button class="att-action-btn edit-att-btn" title="출결 수정" style="background:#f1f5f9; border:1px solid #e2e8f0; color:#475569; width:28px; height:28px; border-radius:8px; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; font-size:12px; padding:0; transition:all 0.15s ease;" data-att-id="${att.id}">
              ✏️
            </button>
          ` : ''}
          ${canDelete ? `
            <button class="att-action-btn delete-att-btn" title="출결 삭제" style="background:#fef2f2; border:1px solid #fee2e2; color:#ef4444; width:28px; height:28px; border-radius:8px; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; font-size:12px; padding:0; transition:all 0.15s ease;" data-att-id="${att.id}">
              🗑️
            </button>
          ` : ''}
        </div>
      </div>

      <div class="teacher-memo-box">
        ${att.memo}
        ${att.eta ? `<div style="margin-top:6px; font-weight:700; color:#d97706; font-size:12px; display:flex; align-items:center; gap:4px;"><span>⏰ 도착 예정:</span> <span>${att.eta}</span></div>` : ''}
      </div>
    `;

    // 이벤트 바인딩
    const editBtn = card.querySelector(".edit-att-btn");
    if (editBtn) {
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openEditAbsentModal(att.id);
      });
    }

    const deleteBtn = card.querySelector(".delete-att-btn");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        handleDeleteAttendance(att.id);
      });
    }

    listEl.appendChild(card);
  });
}

function openEditAbsentModal(attId) {
  const att = appState.attendance.find(a => String(a.id) === String(attId));
  if (!att) return;

  const currentUser = getCurrentUser();
  const isPastor = (currentRole === "pastor" && (!currentUser || currentUser.role === "pastor"));

  const idInput = document.getElementById("editAttIdInput");
  const nameInput = document.getElementById("editAttNameInput");
  const statusInput = document.getElementById("editAttStatusInput");
  const reasonInput = document.getElementById("editAttReasonCategory");
  const memoInput = document.getElementById("editAttMemoInput");
  const etaInput = document.getElementById("editAttEtaInput");
  const deleteBtn = document.getElementById("deleteAttBtnInModal");

  if (idInput) idInput.value = att.id;
  if (nameInput) nameInput.value = att.name;
  if (statusInput) statusInput.value = att.status;
  if (reasonInput) reasonInput.value = att.role;
  if (memoInput) memoInput.value = att.memo || "";
  if (etaInput) etaInput.value = att.eta || "";

  // 모달 내 삭제 버튼: 전도사에게만 표시
  if (deleteBtn) {
    deleteBtn.style.display = isPastor ? "block" : "none";
    deleteBtn.onclick = () => {
      handleDeleteAttendance(att.id, true);
    };
  }

  openModal("editAbsentModal");
}

function handleDeleteAttendance(attId, closeModAfter = false) {
  const att = appState.attendance.find(a => String(a.id) === String(attId));
  const attName = att ? att.name : "선생님";

  if (confirm(`'${attName}'의 출결 등록 내역을 삭제하시겠습니까?`)) {
    appState.attendance = appState.attendance.filter(a => String(a.id) !== String(attId));
    saveState();
    renderAttendanceSection();
    if (closeModAfter) {
      closeModal("editAbsentModal");
    }
    showToast(`출결 내역이 삭제되었습니다. 🗑️`);
  }
}

function initAttendanceEvents() {
  document.getElementById("openAbsentModalBtn").addEventListener("click", () => {
    const currentUser = getCurrentUser();
    const isStudent = (currentRole === "student" || (currentUser && currentUser.role === "student"));
    const nameInput = document.getElementById("absentTeacherInput");
    if (nameInput) {
      nameInput.value = currentUser ? currentUser.name : (isStudent ? "학생" : "선생님");
    }
    // 라벨 동적 변경: 학생이면 '이름', 선생님/집사이면 '성함'
    const nameLabel = document.getElementById("absentNameLabel");
    if (nameLabel) {
      nameLabel.textContent = isStudent ? "이름" : "성함";
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
      userId: currentUser?.id || null,
      name: name,
      role: reason,
      status: status,
      memo: memo,
      eta: eta,
      duty: duty,
      avatar: currentUser?.avatar || (currentRole === "student" ? "👦🏻" : "🧑🏻‍🏫")
    };

    appState.attendance.unshift(newAtt);
    saveState();
    renderAttendanceSection();
    closeModal("absentModal");
    showToast(`예배 ${status} 등록이 완료되었습니다! ✅`);
  });

  // 출결 수정 폼 제출 핸들러
  const editAbsentForm = document.getElementById("editAbsentForm");
  if (editAbsentForm) {
    editAbsentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const attId = document.getElementById("editAttIdInput").value;
      const status = document.getElementById("editAttStatusInput").value;
      const reason = document.getElementById("editAttReasonCategory").value;
      const memo = document.getElementById("editAttMemoInput").value;
      const eta = document.getElementById("editAttEtaInput")?.value?.trim() || "";

      const attIndex = appState.attendance.findIndex(a => String(a.id) === String(attId));
      if (attIndex !== -1) {
        appState.attendance[attIndex].status = status;
        appState.attendance[attIndex].role = reason;
        appState.attendance[attIndex].memo = memo;
        appState.attendance[attIndex].eta = eta;

        saveState();
        renderAttendanceSection();
        closeModal("editAbsentModal");
        showToast("출결 내역이 성공적으로 수정되었습니다! ✏️");
      }
    });
  }
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
      { target: "view-scheduler", icon: "calendar_today", label: "캘린더", title: "예랑 스마트 스케줄러", subtitle: "사역 캘린더 · 생일 · 행사 D-Day · 예배 출결" },
      { target: "view-students", icon: "menu_book", label: "공과/새친구반", title: "공과·새친구반 & 학생부 목양", subtitle: "공과반 지도 · 새친구반 정착 · 학생 심방" },
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
      { target: "view-scheduler", icon: "calendar_today", label: "캘린더", title: "예랑 스마트 스케줄러", subtitle: "사역 캘린더 · 생일 · 행사 D-Day · 예배 출결" },
      { target: "view-agenda", icon: "diversity_3", label: "회의", title: "이번 주 교사 회의 안건", subtitle: "2026.09.13 주일 교사 회의 안건" },
      { target: "view-accounting", icon: "account_balance_wallet", label: "회계장부", title: "부서 전체 실잔액 & 장부", subtitle: "영수증 정산 승인 및 구글 시트 연동" }
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
      { target: "view-students", icon: "menu_book", label: "공과/새친구반", title: "공과·새친구반 & 학생부 목양", subtitle: "공과반 지도 · 새친구반 정착 · 학생 심방" },
      { target: "view-scheduler", icon: "calendar_today", label: "캘린더", title: "예랑 캘린더 & 예배 출결", subtitle: "사역 캘린더 · 생일 · 주일 예배 출결" },
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
      { target: "view-teacher-grade", icon: "menu_book", label: "공과반", title: "공과공부 & 분반 목양", subtitle: "고3 분반 학생 출결 및 심방 지도" },
      { target: "view-scheduler", icon: "calendar_today", label: "캘린더", title: "예랑 캘린더 & 예배 출결", subtitle: "사역 캘린더 · 생일 · 주일 예배 출결" },
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
      { target: "view-teacher-new", icon: "spa", label: "새친구반", title: "새친구반 적응 & 정착", subtitle: "새친구반 4주 체크리스트 & 등반 관리" },
      { target: "view-scheduler", icon: "calendar_today", label: "캘린더", title: "예랑 캘린더 & 예배 출결", subtitle: "사역 캘린더 · 생일 · 주일 예배 출결" },
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
      { target: "view-teacher-grade", icon: "menu_book", label: "공과반", title: "공과공부 & 분반 목양", subtitle: "분반 학생 출결 및 심방 지도" },
      { target: "view-scheduler", icon: "calendar_today", label: "캘린더", title: "예랑 캘린더 & 예배 출결", subtitle: "사역 캘린더 · 생일 · 주일 예배 출결" },
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
      { target: "view-scheduler", icon: "calendar_today", label: "캘린더", title: "예랑 스케줄 & 예배 출결", subtitle: "행사 D-Day · 생일 · 예배 출결 등록" },
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

function isCurrentRolePastor() {
  const currentUser = getCurrentUser();
  return currentRole === "pastor" || (currentUser && currentUser.role === "pastor");
}

// 행사 체크리스트 접근 권한 확인: 전도사, 선생님(공과반/새친구반/회계), 부장집사만 허용 (학생 제외)
function canAccessChecklist() {
  const currentUser = getCurrentUser();
  const role = (currentUser && currentUser.role) ? currentUser.role : currentRole;
  return ["pastor", "teacher", "teacher_grade", "teacher_new", "accountant", "deacon"].includes(role);
}

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
          <div class="user-mgmt-duty">${user.duty || ""}</div>
          <div style="font-size:11px; color:#888; display:flex; gap:8px; flex-wrap:wrap; margin-top:2px;">
            <span>📞 ${user.phone || "-"}</span>
            ${user.birthday ? `<span style="color:#d97706; font-weight:700;">🎂 ${user.birthday}</span>` : ''}
          </div>
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
          <div style="font-size:11px; color:#888; display:flex; gap:8px; flex-wrap:wrap; margin-top:2px;">
            ${user.username ? `<span>ID: ${user.username}</span>` : ''}
            ${user.birthday ? `<span style="color:#d97706; font-weight:700;">🎂 생일: ${user.birthday}</span>` : ''}
          </div>
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
          <option value="deacon" ${user.role === "deacon" ? "selected" : ""}>👔 부장집사님</option>
          <option value="accountant" ${user.role === "accountant" ? "selected" : ""}>💼 선생님(회계)</option>
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
  const bdayInput = document.getElementById("editUserBirthdayInput");
  if (bdayInput) bdayInput.value = user.birthday || "";
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
      const birthday = document.getElementById("editUserBirthdayInput") ? document.getElementById("editUserBirthdayInput").value.trim() : "";
      const phone = document.getElementById("editUserPhoneInput").value.trim();

      if (!name) {
        showToast("⚠️ 이름을 입력해주세요.", "warn");
        return;
      }

      user.name = name;
      user.duty = duty;
      user.birthday = birthday;
      user.phone = phone;

      saveState();
      closeModal("editUserModal");
      renderUserManagerSection();
      renderUserSwitchGrid();
      renderUserHeaderBar();
      if (typeof renderCalendarSection === "function") {
        renderCalendarSection();
      }

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

  // 6-3. 공과반/새친구반 전환 바: 전도사 & 부장집사님에게만 노출
  const canSwitchClasses = (roleKey === "pastor" || roleKey === "deacon");
  document.querySelectorAll(".admin-class-switcher").forEach(el => {
    el.style.display = canSwitchClasses ? "flex" : "none";
  });

  // 역할에 따른 안건/소통함 및 배지 상태 즉시 갱신
  renderAgendaSection();
  renderStaffBoxSection();
  renderWorshipDutySection();
  renderHomeQuickActions();
  renderSchedulerSubTabsByRole();
  renderChecklistSection();
  renderAttendanceSection();
  renderCalendarSection();
  renderClassMinistrySection();
  renderNewcomerMinistrySection();
  renderUpcomingEventsSection();
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

      // 스케줄 서브탭 권한 및 캘린더 화면 갱신
      if (tab.target === "view-scheduler") {
        if (typeof renderSchedulerSubTabsByRole === "function") renderSchedulerSubTabsByRole();
        if (typeof renderCalendarSection === "function") renderCalendarSection();
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
  if (!modal) {
    console.warn("[openModal] Modal not found:", modalId);
    return;
  }
  const sheet = modal.querySelector(".bottom-sheet");
  if (sheet) {
    sheet.style.transition = "transform var(--duration-drawer) var(--ease-out)";
    sheet.style.transform = "translateY(0)";
  }
  modal.classList.add("open");
  modal.style.display = "flex";
  modal.style.opacity = "1";
  modal.style.pointerEvents = "auto";
}

window.openModal = openModal;
window.closeModal = closeModal;
window.openNoticesModal = function(tag) {
  if (typeof openNoticesModalImpl === "function") {
    openNoticesModalImpl(tag);
  } else {
    openModal("noticesHistoryModal");
  }
};

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  const sheet = modal.querySelector(".bottom-sheet");
  if (sheet) {
    sheet.style.transition = "transform var(--duration-drawer) var(--ease-out)";
    sheet.style.transform = "translateY(100%)";
    setTimeout(() => {
      modal.classList.remove("open");
      modal.style.display = "";
      modal.style.opacity = "";
      sheet.style.transform = "";
      sheet.style.transition = "";
    }, 280);
  } else {
    modal.classList.remove("open");
    modal.style.display = "";
    modal.style.opacity = "";
  }
}

function initModalClosers() {
  // Close buttons with data-close attribute
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.close;
      closeModal(modalId);
    });
  });

  // Click .sheet-handle (가운데 있는 ㅡ 가로 바) to close
  document.querySelectorAll(".sheet-handle").forEach(handle => {
    handle.setAttribute("title", "누르거나 아래로 끌어내리면 닫힙니다");
    handle.addEventListener("click", (e) => {
      e.stopPropagation();
      const modalBackdrop = handle.closest(".modal-backdrop");
      if (modalBackdrop && modalBackdrop.id) {
        closeModal(modalBackdrop.id);
      }
    });
  });

  // Click backdrop (윗쪽 흐릿한 배경 부분) to close
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop.id);
      }
    });
  });

  // Swipe / Drag down on bottom-sheet or handle to dismiss
  initSheetDragToDismiss();
}

function initSheetDragToDismiss() {
  const sheets = document.querySelectorAll(".bottom-sheet");

  sheets.forEach(sheet => {
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let isHandleDrag = false;
    const DISMISS_THRESHOLD = 80; // drag distance in px to dismiss

    function onPointerDown(e) {
      // Only drag if scrolled to top (scrollTop <= 0) or dragging directly from handle
      const isHandle = e.target.closest(".sheet-handle");
      if (!isHandle && sheet.scrollTop > 5) return;

      startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      currentY = startY;
      isDragging = true;
      isHandleDrag = !!isHandle;
      sheet.style.transition = "none"; // instant response during drag
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const diffY = clientY - startY;

      // Only allow downward drag
      if (diffY > 0) {
        if (e.cancelable) e.preventDefault();
        currentY = clientY;
        sheet.style.transform = `translateY(${diffY}px)`;
      } else {
        // Resistance when pulling up
        if (isHandleDrag) {
          sheet.style.transform = `translateY(${diffY * 0.15}px)`;
        }
      }
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      const diffY = currentY - startY;
      const modalBackdrop = sheet.closest(".modal-backdrop");

      sheet.style.transition = "transform 0.24s cubic-bezier(0.32, 0.72, 0, 1)";

      if (diffY > DISMISS_THRESHOLD && modalBackdrop && modalBackdrop.id) {
        // Dismiss sheet
        closeModal(modalBackdrop.id);
      } else {
        // Spring back to original position
        sheet.style.transform = "translateY(0)";
      }
    }

    // Touch events for smartphone
    sheet.addEventListener("touchstart", onPointerDown, { passive: true });
    sheet.addEventListener("touchmove", onPointerMove, { passive: false });
    sheet.addEventListener("touchend", onPointerUp);
    sheet.addEventListener("touchcancel", onPointerUp);

    // Mouse drag support for desktop/mockup testing
    sheet.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
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

  // 수정 버튼: 전도사에게만 보이도록 권한 제어
  const openBtn = document.getElementById("openEditWorshipDutyBtn");
  const isPastor = isCurrentRolePastor();
  if (openBtn) {
    openBtn.style.display = isPastor ? "inline-flex" : "none";
  }
}

window.openEditWorshipDutyModalDirect = function() {
  const isPastor = isCurrentRolePastor();
  if (!isPastor) {
    if (typeof showToast === "function") {
      showToast("⚠️ '이번 주 예배 섬김' 수정은 전도사님만 가능합니다.", "warning");
    } else {
      alert("⚠️ '이번 주 예배 섬김' 수정은 전도사님만 가능합니다.");
    }
    return;
  }

  const duty = appState.worshipDuty || (typeof INITIAL_DATA !== 'undefined' ? INITIAL_DATA.worshipDuty : {}) || {};
  const activeUsers = (appState.users || []).filter(u => !u.isPending);

  // Helper to build options for select dropdown
  function buildOptions(selectEl, customInputEl, roleInputEl, currentName, currentRoleText, defaultRoleHint) {
    if (!selectEl) return;
    selectEl.innerHTML = "";

    // 1. Placeholder / default option
    const defOpt = document.createElement("option");
    defOpt.value = "";
    defOpt.textContent = "== 선택해주세요 ==";
    selectEl.appendChild(defOpt);

    // Group users into Teachers/Leaders and Students
    const teachers = activeUsers.filter(u => u.role !== "student");
    const students = activeUsers.filter(u => u.role === "student");

    if (teachers.length > 0) {
      const optGroupT = document.createElement("optgroup");
      optGroupT.label = "🧑🏻‍🏫 교사 및 교역자";
      teachers.forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.name;
        opt.dataset.role = u.duty || ROLE_NAMES[u.role] || "교사";
        opt.textContent = `${u.name} (${opt.dataset.role})`;
        optGroupT.appendChild(opt);
      });
      selectEl.appendChild(optGroupT);
    }

    if (students.length > 0) {
      const optGroupS = document.createElement("optgroup");
      optGroupS.label = "👦🏻 학생";
      students.forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.name;
        opt.dataset.role = u.duty || "학생";
        opt.textContent = `${u.name} (${opt.dataset.role})`;
        optGroupS.appendChild(opt);
      });
      selectEl.appendChild(optGroupS);
    }

    // Common group presets (e.g. "교사 & 리더", "전체")
    const optGroupEtc = document.createElement("optgroup");
    optGroupEtc.label = "📌 기타 / 그룹";
    const groupPresets = ["교사 & 리더", "예랑 찬양팀", "임원단", "새친구반 섬김이"];
    groupPresets.forEach(preset => {
      const opt = document.createElement("option");
      opt.value = preset;
      opt.dataset.role = defaultRoleHint || "본당";
      opt.textContent = preset;
      optGroupEtc.appendChild(opt);
    });
    selectEl.appendChild(optGroupEtc);

    // Custom input option
    const optCustom = document.createElement("option");
    optCustom.value = "__custom__";
    optCustom.textContent = "✏️ 직접 입력하기...";
    selectEl.appendChild(optCustom);

    // Set initial selection
    let matched = false;
    for (let i = 0; i < selectEl.options.length; i++) {
      if (selectEl.options[i].value === currentName) {
        selectEl.selectedIndex = i;
        matched = true;
        break;
      }
    }

    if (!matched && currentName) {
      selectEl.value = "__custom__";
      if (customInputEl) {
        customInputEl.style.display = "block";
        customInputEl.value = currentName;
      }
    } else {
      if (customInputEl) {
        customInputEl.style.display = "none";
        customInputEl.value = currentName || "";
      }
    }

    // Role text
    if (roleInputEl) {
      roleInputEl.value = currentRoleText || "";
    }

    // Change listener
    selectEl.onchange = function() {
      if (selectEl.value === "__custom__") {
        if (customInputEl) {
          customInputEl.style.display = "block";
          customInputEl.value = "";
          customInputEl.focus();
        }
      } else {
        if (customInputEl) {
          customInputEl.style.display = "none";
          customInputEl.value = selectEl.value;
        }
        const selectedOpt = selectEl.options[selectEl.selectedIndex];
        if (selectedOpt && selectedOpt.dataset.role && roleInputEl) {
          roleInputEl.value = selectedOpt.dataset.role;
        }
      }
    };
  }

  const dateInput = document.getElementById("dutyDateInput");
  if (dateInput) dateInput.value = duty.date || "10/18";

  // 1) 예배 전 기도회
  buildOptions(
    document.getElementById("dutyPrePrayerNameSelect"),
    document.getElementById("dutyPrePrayerNameInput"),
    document.getElementById("dutyPrePrayerRoleInput"),
    duty.prePrayer ? duty.prePrayer.name : "교사 & 리더",
    duty.prePrayer ? duty.prePrayer.role : "예배 10분 전 본당",
    "예배 10분 전 본당"
  );

  // 2) 대표기도
  buildOptions(
    document.getElementById("dutyPrayerNameSelect"),
    document.getElementById("dutyPrayerNameInput"),
    document.getElementById("dutyPrayerRoleInput"),
    duty.prayer ? duty.prayer.name : "",
    duty.prayer ? duty.prayer.role : "",
    "학생"
  );

  // 3) 말씀봉독
  buildOptions(
    document.getElementById("dutyScriptureNameSelect"),
    document.getElementById("dutyScriptureNameInput"),
    document.getElementById("dutyScriptureRoleInput"),
    duty.scripture ? duty.scripture.name : "",
    duty.scripture ? duty.scripture.role : "",
    "학생"
  );

  // 4) 광고
  buildOptions(
    document.getElementById("dutyAnnouncementNameSelect"),
    document.getElementById("dutyAnnouncementNameInput"),
    document.getElementById("dutyAnnouncementRoleInput"),
    duty.announcement ? duty.announcement.name : "",
    duty.announcement ? duty.announcement.role : "",
    "청소년부 담당"
  );

  if (typeof openModal === "function") {
    openModal("editWorshipDutyModal");
  } else {
    const modal = document.getElementById("editWorshipDutyModal");
    if (modal) modal.classList.remove("hidden");
  }
};

function initWorshipDutyEvents() {
  const openBtn = document.getElementById("openEditWorshipDutyBtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      window.openEditWorshipDutyModalDirect();
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

      function resolveName(selectId, inputId) {
        const select = document.getElementById(selectId);
        const input = document.getElementById(inputId);
        if (select && select.value && select.value !== "__custom__") {
          return select.value.trim();
        }
        return input ? input.value.trim() : "";
      }

      const date = document.getElementById("dutyDateInput").value.trim();
      const preName = resolveName("dutyPrePrayerNameSelect", "dutyPrePrayerNameInput");
      const preRole = document.getElementById("dutyPrePrayerRoleInput").value.trim();
      const pName = resolveName("dutyPrayerNameSelect", "dutyPrayerNameInput");
      const pRole = document.getElementById("dutyPrayerRoleInput").value.trim();
      const scripName = resolveName("dutyScriptureNameSelect", "dutyScriptureNameInput");
      const scripRole = document.getElementById("dutyScriptureRoleInput").value.trim();
      const annName = resolveName("dutyAnnouncementNameSelect", "dutyAnnouncementNameInput");
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
    const authorInput = document.getElementById("staffReqAuthorInput");
    if (authorInput && currentUser) {
      authorInput.value = currentUser.name;
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
      if (!canAccessChecklist()) {
        showToast("⚠️ 행사 체크리스트는 전도사, 선생님, 부장집사님 전용 메뉴입니다.", "warn");
        return;
      }
      switchToTab("view-scheduler");
      switchSchedulerSubTab("subTabChecklist");
      showToast("예랑 스카 행사 체크리스트 화면으로 이동했습니다. 📋", "info");
    });
  }

  // 다가오는 주요 행사 옆 '전체보기' 버튼 클릭 액션
  const viewAllEventsBtn = document.getElementById("viewAllEventsBtn");
  if (viewAllEventsBtn) {
    viewAllEventsBtn.addEventListener("click", () => {
      if (!canAccessChecklist()) {
        showToast("⚠️ 행사 체크리스트는 전도사, 선생님, 부장집사님 전용 메뉴입니다.", "warn");
        return;
      }
      switchToTab("view-scheduler");
      switchSchedulerSubTab("subTabChecklist");
      showToast("행사 체크리스트 전체보기로 이동했습니다! 📋", "info");
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
  // 학생 등 권한이 없는 경우 행사 체크리스트 접근 차단
  if (!canAccessChecklist() && activeSubTabId === "subTabChecklist") {
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

  if (activeSubTabId === "subTabCalendar" && typeof renderCalendarSection === "function") {
    renderCalendarSection();
  }
}

// --- Scheduler Sub-Tabs Role Permissions ---
// 예배 출결: 전도사, 선생님, 학생 모두 활성화
// 행사 체크리스트: 전도사, 선생님, 부장집사에게 활성화 (학생에게만 숨김)
function renderSchedulerSubTabsByRole() {
  const hasChecklistAuth = canAccessChecklist();

  const tabCal = document.getElementById("subTabCalendar");
  const tabChk = document.getElementById("subTabChecklist");
  const tabAtt = document.getElementById("subTabAttendance");

  const viewCal = document.getElementById("subViewCalendar");
  const viewChk = document.getElementById("subViewChecklist");
  const viewAtt = document.getElementById("subViewAttendance");

  if (!tabCal || !tabChk || !tabAtt) return;

  // 1. 예배 출결: 전도사, 선생님, 학생 모두 활성화
  tabAtt.style.display = "";

  // 2. 행사 체크리스트: 전도사, 선생님, 부장집사 열람 가능 (학생 등 권한 외 숨김)
  if (!hasChecklistAuth) {
    tabChk.style.display = "none";
    if (viewChk) viewChk.style.display = "none";
  } else {
    tabChk.style.display = "";
  }

  // 3. 사역 캘린더 & 생일: 모두에게 노출
  tabCal.style.display = "";

  // 4. 현재 활성화된 서브탭이 비노출 대상인 경우 '사역 캘린더 & 생일'로 안전 전환
  if (!hasChecklistAuth && tabChk.classList.contains("active")) {
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

  const cleanUser = userName.replace(/선생님|전도사|목사|집사|교사|T|쌤|간사/gi, "").replace(/\s+/g, "");
  if (!cleanUser) return false;

  // Split multiple managers by comma or slash
  const managerList = managerName.split(/[,/]/).map(m => m.trim()).filter(Boolean);
  for (let mgr of managerList) {
    const cleanManager = mgr.replace(/선생님|전도사|목사|집사|교사|T|쌤|간사/gi, "").replace(/\s+/g, "");
    if (cleanManager && (cleanManager === cleanUser || cleanManager.includes(cleanUser) || cleanUser.includes(cleanManager))) {
      return true;
    }
  }

  return false;
}

// 행사 일시 문자열로부터 D-Day 자동 계산 헬퍼 함수
function calculateDdayFromDateString(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return "";
  const trimmed = dateStr.trim();
  if (!trimmed) return "";

  const now = new Date();
  const currentYear = now.getFullYear();
  const today = new Date(currentYear, now.getMonth(), now.getDate());

  let targetDate = null;

  // 1) YYYY-MM-DD 또는 YYYY.MM.DD 또는 YYYY/MM/DD
  const fullMatch = trimmed.match(/^(\d{4})[-./](\d{1,2})[-./](\d{1,2})/);
  if (fullMatch) {
    const y = parseInt(fullMatch[1], 10);
    const m = parseInt(fullMatch[2], 10) - 1;
    const d = parseInt(fullMatch[3], 10);
    targetDate = new Date(y, m, d);
  } else {
    // 2) MM.DD 또는 M.D 또는 MM-DD 또는 MM/DD (예: 12.25, 10.25, 11/8)
    const dotMatch = trimmed.match(/^(\d{1,2})[-./](\d{1,2})/);
    if (dotMatch) {
      const m = parseInt(dotMatch[1], 10) - 1;
      const d = parseInt(dotMatch[2], 10);
      targetDate = new Date(currentYear, m, d);
      // 만약 이미 지난 날짜라면 다음 해로 간주 (단, 90일 이상 이전인 경우에 한함)
      const diffDays = Math.round((targetDate - today) / (1000 * 60 * 60 * 24));
      if (diffDays < -90) {
        targetDate = new Date(currentYear + 1, m, d);
      }
    } else {
      // 3) "10월 25일" 또는 "12월 24일" 형태
      const korMatch = trimmed.match(/(\d{1,2})\s*월\s*(\d{1,2})\s*일?/);
      if (korMatch) {
        const m = parseInt(korMatch[1], 10) - 1;
        const d = parseInt(korMatch[2], 10);
        targetDate = new Date(currentYear, m, d);
        const diffDays = Math.round((targetDate - today) / (1000 * 60 * 60 * 24));
        if (diffDays < -90) {
          targetDate = new Date(currentYear + 1, m, d);
        }
      }
    }
  }

  if (!targetDate || isNaN(targetDate.getTime())) {
    return "";
  }

  const diffTime = targetDate - today;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "D-Day";
  } else if (diffDays > 0) {
    return `D-${diffDays}`;
  } else {
    return `D+${Math.abs(diffDays)}`;
  }
}

function getActiveChecklistEvent() {
  if (!appState.events || appState.events.length === 0) {
    appState.events = JSON.parse(JSON.stringify(INITIAL_DATA.events));
  }
  let event = appState.events.find(e => e.id === appState.currentChecklistEventId);
  if (!event) {
    event = appState.events[0];
    appState.currentChecklistEventId = event.id;
  }
  // Keep appState.checklist in sync for backward compatibility
  appState.checklist = {
    eventName: event.title,
    dday: event.dday,
    manager: event.manager,
    items: event.items
  };
  return event;
}

function renderUpcomingEventsSection() {
  const container = document.getElementById("upcomingEventsContainer");
  const countBadge = document.getElementById("upcomingEventsCountBadge");
  const viewAllEventsBtn = document.getElementById("viewAllEventsBtn");
  if (!container || !appState.events) return;

  if (countBadge) {
    countBadge.textContent = `${appState.events.length}개`;
  }

  const currentUser = getCurrentUser();
  const role = (currentUser && currentUser.role) ? currentUser.role : currentRole;
  const isStudent = (role === "student" || currentRole === "student");

  if (viewAllEventsBtn) {
    viewAllEventsBtn.style.display = isStudent ? "none" : "";
  }

  container.innerHTML = "";

  appState.events.forEach((event, index) => {
    const totalItems = event.items ? event.items.length : 0;
    const checkedItems = event.items ? event.items.filter(i => i.checked).length : 0;
    const pct = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

    const article = document.createElement("article");

    if (event.theme === "terracotta" || (!event.theme && index === 0)) {
      // Hero Terracotta Gradient Card
      article.className = "flex-shrink-0 w-[265px] snap-start bg-gradient-to-br from-[#9E4830] via-[#8B3B24] to-[#712D19] rounded-3xl p-4 text-white shadow-[0_12px_30px_rgba(150,67,43,0.28)] flex flex-col justify-between relative overflow-hidden group transition-all duration-200 cursor-pointer active:scale-98";
      article.innerHTML = `
        <div class="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
        <div class="absolute right-3 bottom-2 text-white/[0.07] pointer-events-none select-none">
          <span class="material-symbols-outlined text-[90px]">${event.icon || "menu_book"}</span>
        </div>
        <div class="space-y-3 z-10">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 shadow-inner">
              <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span class="text-white text-label-sm font-extrabold tracking-tight">${event.dday || "D-Day"}</span>
              ${!isStudent ? `<span class="text-[10px] text-white/80 font-bold ml-1">· 준비 ${pct}%</span>` : ''}
            </div>
            <span class="w-8 h-8 rounded-xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center border border-white/20">
              <span class="material-symbols-outlined text-[19px]">${event.icon || "menu_book"}</span>
            </span>
          </div>
          <div>
            <span class="text-[11px] font-semibold text-white/75 tracking-wider uppercase">${event.tag || "Special Event"}</span>
            <h3 class="text-headline-md font-bold text-white tracking-tight mt-0.5">${event.title}</h3>
            <p class="text-body-sm font-body-sm text-white/85 mt-0.5 line-clamp-1">${event.subTitle || ""}</p>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-white/15 z-10 space-y-1.5 text-[12px]">
          <div class="flex items-center gap-2 text-white font-semibold">
            <div class="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
              <span class="material-symbols-outlined text-[13px] text-white">event</span>
            </div>
            <span>${event.date || ""}</span>
          </div>
          <div class="flex items-center gap-2 text-white/80 font-medium">
            <div class="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-[13px] text-white/80">location_on</span>
            </div>
            <span>${event.location || "이룸교회"}</span>
          </div>
        </div>
      `;
    } else if (event.theme === "butter") {
      // Warm Butter Card
      article.className = "flex-shrink-0 w-[245px] snap-start bg-surface-card rounded-3xl p-4 border border-outline-variant/30 shadow-[0_8px_24px_rgba(60,50,40,0.06)] flex flex-col justify-between relative overflow-hidden group hover:border-accent-butter-text/50 transition-all cursor-pointer active:scale-98";
      article.innerHTML = `
        <div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-accent-butter/80 -z-0 pointer-events-none"></div>
        <div class="space-y-3 z-10">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <span class="px-2.5 py-1 rounded-full bg-accent-butter text-accent-butter-text text-label-sm font-bold tracking-tight border border-accent-butter-text/20">
                ${event.dday || "D-Day"}
              </span>
              ${!isStudent ? `<span class="text-[10.5px] font-bold text-accent-butter-text bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">준비 ${pct}%</span>` : ''}
            </div>
            <span class="w-8 h-8 rounded-xl bg-amber-50 text-accent-butter-text flex items-center justify-center border border-amber-200/50">
              <span class="material-symbols-outlined text-[19px]">${event.icon || "cake"}</span>
            </span>
          </div>
          <div>
            <span class="text-[11px] font-semibold text-accent-butter-text tracking-wider uppercase">${event.tag || "Blessing"}</span>
            <h3 class="text-headline-sm font-bold text-text-primary group-hover:text-accent-butter-text transition-colors">${event.title}</h3>
            <p class="text-body-sm font-body-sm text-text-muted mt-0.5">${event.subTitle || ""}</p>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container z-10 space-y-1.5 text-[12px]">
          <div class="flex items-center gap-2 font-semibold text-text-secondary">
            <span class="material-symbols-outlined text-[15px] text-accent-butter-text">event</span>
            <span>${event.date || ""}</span>
          </div>
          <div class="flex items-center gap-2 text-text-muted font-medium">
            <span class="material-symbols-outlined text-[15px]">location_on</span>
            <span>${event.location || "이룸교회"}</span>
          </div>
        </div>
      `;
    } else {
      // Sage Green or Default Card
      article.className = "flex-shrink-0 w-[245px] snap-start bg-surface-card rounded-3xl p-4 border border-outline-variant/30 shadow-[0_8px_24px_rgba(60,50,40,0.06)] flex flex-col justify-between relative overflow-hidden group hover:border-secondary/50 transition-all cursor-pointer active:scale-98";
      article.innerHTML = `
        <div class="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-secondary/8 -z-0 pointer-events-none"></div>
        <div class="space-y-3 z-10">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <span class="px-2.5 py-1 rounded-full bg-badge-sage-bg text-badge-sage-text text-label-sm font-bold tracking-tight border border-secondary/20">
                ${event.dday || "D-Day"}
              </span>
              ${!isStudent ? `<span class="text-[10.5px] font-bold text-secondary bg-emerald-50 px-2 py-0.5 rounded-full border border-secondary/20">준비 ${pct}%</span>` : ''}
            </div>
            <span class="w-8 h-8 rounded-xl bg-badge-sage-bg text-secondary flex items-center justify-center border border-secondary/20">
              <span class="material-symbols-outlined text-[19px]">${event.icon || "volunteer_activism"}</span>
            </span>
          </div>
          <div>
            <span class="text-[11px] font-semibold text-secondary tracking-wider uppercase">${event.tag || "Open Sunday"}</span>
            <h3 class="text-headline-sm font-bold text-text-primary group-hover:text-secondary transition-colors">${event.title}</h3>
            <p class="text-body-sm font-body-sm text-text-muted mt-0.5">${event.subTitle || ""}</p>
          </div>
        </div>
        <div class="mt-4 pt-3 border-t border-surface-container z-10 space-y-1.5 text-[12px]">
          <div class="flex items-center gap-2 font-semibold text-text-secondary">
            <span class="material-symbols-outlined text-[15px] text-secondary">event</span>
            <span>${event.date || ""}</span>
          </div>
          <div class="flex items-center gap-2 text-text-muted font-medium">
            <span class="material-symbols-outlined text-[15px]">location_on</span>
            <span>${event.location || "이룸교회"}</span>
          </div>
        </div>
      `;
    }

    // 카드 클릭 시 해당 행사 체크리스트로 이동 (학생인 경우 친절한 안내 토스트)
    article.addEventListener("click", () => {
      if (isStudent || !canAccessChecklist()) {
        showToast(`🎉 ${event.title}: 기도로 함께 준비해요!`, "info");
        return;
      }
      appState.currentChecklistEventId = event.id;
      saveState();
      switchToTab("view-scheduler");
      switchSchedulerSubTab("subTabChecklist");
      renderChecklistSection();
      showToast(`'${event.title}' 행사 체크리스트로 이동했습니다. 📋`, "info");
    });

    container.appendChild(article);
  });
}

// --- 행사 총괄 담당자 & 체크리스트 담당자 후보 리스트 및 칩 UI 헬퍼 ---
function getAvailableLeaders() {
  const defaultLeaders = [
    "정하람 전도사",
    "김대한 선생님",
    "소예진 선생님",
    "양선아 선생님",
    "나하은 선생님",
    "김희순 집사"
  ];
  const leaderSet = new Set(defaultLeaders);
  if (appState.users && Array.isArray(appState.users)) {
    appState.users.forEach(u => {
      if (u.role !== "student" && u.name) {
        leaderSet.add(u.name);
      }
    });
  }
  return Array.from(leaderSet);
}

// 담당자 칩 렌더링 및 다중 선택 상태 관리
function setupManagerChipsSelector({
  containerId,
  countId,
  valueInputId,
  customInputId,
  addCustomBtnId,
  initialManagers = []
}) {
  const container = document.getElementById(containerId);
  const countEl = document.getElementById(countId);
  const valueInput = document.getElementById(valueInputId);
  const customInput = document.getElementById(customInputId);
  const addCustomBtn = document.getElementById(addCustomBtnId);

  if (!container || !valueInput) return;

  let selectedSet = new Set(
    (initialManagers || [])
      .map(m => (m || "").trim())
      .filter(Boolean)
  );

  // 최소 후보 목록 준비
  const available = getAvailableLeaders();
  selectedSet.forEach(m => {
    if (!available.includes(m)) available.push(m);
  });

  function updateView() {
    container.innerHTML = "";
    available.forEach(leader => {
      const isSelected = selectedSet.has(leader);
      const chip = document.createElement("button");
      chip.type = "button";
      chip.style.cssText = isSelected
        ? "display:inline-flex; align-items:center; gap:5px; padding:6px 12px; border-radius:999px; font-size:12px; font-weight:800; cursor:pointer; transition:all 0.15s ease; background:#ea580c; color:#ffffff; border:1.5px solid #ea580c; box-shadow:0 2px 6px rgba(234,88,12,0.25);"
        : "display:inline-flex; align-items:center; gap:5px; padding:6px 12px; border-radius:999px; font-size:12px; font-weight:700; cursor:pointer; transition:all 0.15s ease; background:#ffffff; color:#475569; border:1.5px solid #cbd5e1;";

      chip.innerHTML = isSelected
        ? `<span>✓</span><span>${leader}</span>`
        : `<span>＋</span><span>${leader}</span>`;

      chip.onclick = (e) => {
        e.preventDefault();
        if (selectedSet.has(leader)) {
          if (selectedSet.size <= 1) {
            showToast("담당자는 최소 1명 이상 선택되어야 합니다.", "warn");
            return;
          }
          selectedSet.delete(leader);
        } else {
          selectedSet.add(leader);
        }
        syncState();
      };

      container.appendChild(chip);
    });

    const selectedArray = Array.from(selectedSet);
    valueInput.value = selectedArray.join(", ");
    if (countEl) {
      countEl.textContent = `${selectedArray.length}명 선택됨`;
    }
  }

  function syncState() {
    updateView();
  }

  if (addCustomBtn && customInput) {
    addCustomBtn.onclick = (e) => {
      e.preventDefault();
      const customName = customInput.value.trim();
      if (!customName) return;
      if (!available.includes(customName)) {
        available.push(customName);
      }
      selectedSet.add(customName);
      customInput.value = "";
      syncState();
      showToast(`'${customName}' 님이 담당자로 추가되었습니다. 👤✓`);
    };

    customInput.onkeydown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addCustomBtn.click();
      }
    };
  }

  updateView();
}

function openEditChecklistModal(item) {
  const modal = document.getElementById("editChecklistModal");
  if (!modal) return;
  const currentEvent = getActiveChecklistEvent();
  const idInput = document.getElementById("editChkIdInput");
  const titleInput = document.getElementById("editChkTitleInput");
  const checkedInput = document.getElementById("editChkCheckedInput");
  const eventTargetDisplay = document.getElementById("editChkEventTargetDisplay");

  if (idInput) idInput.value = item.id;
  if (eventTargetDisplay) {
    eventTargetDisplay.value = `${currentEvent.title} (${currentEvent.dday})`;
  }
  // Clean raw title from parenthesis manager if present
  let cleanTitle = item.title || "";
  cleanTitle = cleanTitle.replace(/\s*\([^)]+\)\s*$/, "").trim();
  if (titleInput) titleInput.value = cleanTitle;
  if (checkedInput) checkedInput.checked = !!item.checked;

  // 복수 담당자 칩 선택기 구성
  const existingManagers = (item.manager || "정하람 전도사")
    .split(/[,/]/)
    .map(s => s.trim())
    .filter(Boolean);

  setupManagerChipsSelector({
    containerId: "editChkManagerChipsContainer",
    countId: "editChkManagerCount",
    valueInputId: "editChkManagerValue",
    customInputId: "editChkCustomManagerInput",
    addCustomBtnId: "editChkAddCustomManagerBtn",
    initialManagers: existingManagers.length > 0 ? existingManagers : ["정하람 전도사"]
  });

  openModal("editChecklistModal");
}

function deleteChecklistItem(itemId, itemTitle) {
  if (!confirm(`'${itemTitle}' 체크리스트 항목을 정말 삭제하시겠습니까?`)) {
    return;
  }
  const currentEvent = getActiveChecklistEvent();
  currentEvent.items = currentEvent.items.filter(i => i.id !== itemId);
  saveState();
  renderChecklistSection();
  renderUpcomingEventsSection();
  closeModal("editChecklistModal");
  showToast("체크리스트 항목이 삭제되었습니다. 🗑️");
}

function renderChecklistSection() {
  const container = document.getElementById("checklistItemsContainer");
  const progressFill = document.getElementById("checklistProgressFill");
  const progressText = document.getElementById("checklistProgressText");
  const openAddBtn = document.getElementById("openAddChecklistBtn");
  const openAddEventBtn = document.getElementById("openAddEventBtn");
  const openAddEventHomeBtn = document.getElementById("openAddEventHomeBtn");
  const selectorContainer = document.getElementById("checklistEventSelector");

  const currentEvent = getActiveChecklistEvent();
  if (!container || !currentEvent) return;

  const currentUser = getCurrentUser();
  const isPastor = (currentRole === "pastor" && (!currentUser || currentUser.role === "pastor"));

  // 전도사에게만 '새 체크리스트 추가' 및 '새 행사 추가' 버튼 노출
  if (openAddBtn) {
    openAddBtn.style.display = isPastor ? "" : "none";
  }
  if (openAddEventBtn) {
    openAddEventBtn.style.display = isPastor ? "" : "none";
  }
  if (openAddEventHomeBtn) {
    openAddEventHomeBtn.style.display = isPastor ? "" : "none";
  }

  // 행사 전환 탭/알약 (Event Selector Pills)
  if (selectorContainer && appState.events) {
    selectorContainer.innerHTML = "";
    appState.events.forEach(ev => {
      const isSelected = ev.id === currentEvent.id;
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = `px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 ${
        isSelected
          ? "bg-[#9E4830] text-white shadow-sm ring-1 ring-[#9E4830]"
          : "bg-surface-card text-text-secondary border border-outline-variant/40 hover:border-[#9E4830]/40"
      }`;
      pill.innerHTML = `<span>${ev.title}</span><span class="text-[10px] opacity-80">(${ev.dday})</span>`;
      pill.addEventListener("click", () => {
        appState.currentChecklistEventId = ev.id;
        saveState();
        renderChecklistSection();
        renderUpcomingEventsSection();
      });
      selectorContainer.appendChild(pill);
    });

    // 전도사인 경우 알약 목록 끝에 "+ 행사 추가" 퀵 버튼 추가
    if (isPastor) {
      const addEventPill = document.createElement("button");
      addEventPill.type = "button";
      addEventPill.className = "px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 flex-shrink-0 bg-amber-50 text-[#8B3B24] border border-[#d4a373]/60 hover:bg-amber-100/70";
      addEventPill.innerHTML = `<span>＋</span> <span>행사 추가</span>`;
      addEventPill.addEventListener("click", () => {
        openModal("addEventModal");
      });
      selectorContainer.appendChild(addEventPill);
    }
  }

  // Hero Card 동적 텍스트 갱신
  const mainTitleEl = document.getElementById("chkEventMainTitle");
  const subTitleEl = document.getElementById("chkEventSubTitle");
  const ddayBadgeEl = document.getElementById("chkEventDdayBadge");
  const managerTextEl = document.getElementById("chkEventManagerText");
  const managerPillEl = document.getElementById("chkEventManagerPill");

  if (mainTitleEl) mainTitleEl.textContent = currentEvent.title;
  if (subTitleEl) subTitleEl.textContent = currentEvent.subTitle ? `(${currentEvent.subTitle})` : "";
  if (ddayBadgeEl) ddayBadgeEl.textContent = currentEvent.dday;
  if (managerTextEl) managerTextEl.textContent = `담당: ${currentEvent.manager || "미정"}`;

  if (managerPillEl) {
    const editIcon = managerPillEl.querySelector(".chk-mgr-edit-icon");
    if (editIcon) {
      editIcon.style.display = isPastor ? "inline-block" : "none";
    }
    if (isPastor) {
      managerPillEl.style.cursor = "pointer";
      managerPillEl.title = "클릭하여 총괄 담당자 및 행사 정보 수정";
    } else {
      managerPillEl.style.cursor = "default";
      managerPillEl.title = "";
    }
  }

  const items = currentEvent.items || [];
  const total = items.length;
  const checkedCount = items.filter(i => i.checked).length;
  const percentage = total > 0 ? Math.round((checkedCount / total) * 100) : 0;

  if (progressFill) progressFill.style.width = `${percentage}%`;
  if (progressText) {
    progressText.textContent = `준비 진행상황 ${percentage}% 완료 (${total}개 중 ${checkedCount}개)`;
  }

  container.innerHTML = "";
  if (items.length === 0) {
    container.innerHTML = `
      <div style="padding: 24px 12px; text-align: center; color: #94a3b8; font-size: 13px;">
        등록된 체크리스트 항목이 없습니다.<br>
        ${isPastor ? "하단의 '+ 새 체크리스트 추가' 버튼을 눌러 항목을 등록하세요." : ""}
      </div>
    `;
    return;
  }

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

    // 전도사 전용 수정/삭제 버튼
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
      if (e.target.closest(".chk-item-actions")) return;

      if (!canCheck) {
        showToast("⚠️ 본인이 담당한 항목만 체크할 수 있습니다.", "warn");
        return;
      }

      item.checked = !item.checked;
      saveState();
      renderChecklistSection();
      renderUpcomingEventsSection(); // 홈 화면 주요 행사 카드 진행률 실시간 연동
      const statusWord = item.checked ? "완료 처리됨 ✓" : "진행중으로 변경됨";
      showToast(`'${item.title.split("(")[0].trim()}' ${statusWord}`);
    });

    container.appendChild(el);
  });
}

function initChecklistEvents() {
  const openBtn = document.getElementById("openAddChecklistBtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      // populate event select in add modal
      const eventSelect = document.getElementById("chkEventSelectInput");
      if (eventSelect && appState.events) {
        eventSelect.innerHTML = "";
        appState.events.forEach(ev => {
          const opt = document.createElement("option");
          opt.value = ev.id;
          opt.textContent = `${ev.title} (${ev.dday})`;
          if (ev.id === appState.currentChecklistEventId) {
            opt.selected = true;
          }
          eventSelect.appendChild(opt);
        });
      }

      // 담당자 복수 선택 칩 초기화 (기본: 정하람 전도사)
      setupManagerChipsSelector({
        containerId: "newChkManagerChipsContainer",
        countId: "newChkManagerCount",
        valueInputId: "chkManagerValue",
        customInputId: "newChkCustomManagerInput",
        addCustomBtnId: "newChkAddCustomManagerBtn",
        initialManagers: ["정하람 전도사"]
      });

      openModal("addChecklistModal");
    });
  }

  // 추가 폼 리스너
  const form = document.getElementById("checklistForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const eventSelect = document.getElementById("chkEventSelectInput");
      const targetEventId = eventSelect ? eventSelect.value : appState.currentChecklistEventId;
      const targetEvent = appState.events.find(ev => ev.id === targetEventId) || getActiveChecklistEvent();

      const title = document.getElementById("chkTitleInput").value.trim();
      const managerVal = document.getElementById("chkManagerValue")?.value || "";
      const manager = managerVal.trim() || "정하람 전도사";

      const newItem = {
        id: Date.now(),
        title: `${title} (${manager})`,
        manager: manager,
        checked: false,
        color: "green"
      };

      if (!targetEvent.items) targetEvent.items = [];
      targetEvent.items.push(newItem);

      // 만약 다른 행사에 추가한 경우 해당 행사로 활성화
      appState.currentChecklistEventId = targetEvent.id;

      saveState();
      renderChecklistSection();
      renderUpcomingEventsSection();
      closeModal("addChecklistModal");
      form.reset();
      showToast(`'${targetEvent.title}'에 새 체크리스트 항목이 추가되었습니다! 📋`);
    });
  }

  // 전도사 수정 폼 리스너
  const editForm = document.getElementById("editChecklistForm");
  if (editForm) {
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const itemId = Number(document.getElementById("editChkIdInput").value);
      const title = document.getElementById("editChkTitleInput").value.trim();
      const managerVal = document.getElementById("editChkManagerValue")?.value || "";
      const isChecked = document.getElementById("editChkCheckedInput").checked;

      const currentEvent = getActiveChecklistEvent();
      const target = currentEvent.items ? currentEvent.items.find(i => i.id === itemId) : null;
      if (target) {
        const manager = managerVal.trim() || target.manager || "정하람 전도사";
        target.title = `${title} (${manager})`;
        target.manager = manager;
        target.checked = isChecked;
        saveState();
        renderChecklistSection();
        renderUpcomingEventsSection();
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

  // --- 새 행사 추가 (Add Event) 모달 열기 버튼들 ---
  const openAddEventBtn = document.getElementById("openAddEventBtn");
  if (openAddEventBtn) {
    openAddEventBtn.addEventListener("click", () => {
      setupManagerChipsSelector({
        containerId: "newEventManagerChipsContainer",
        countId: "newEventManagerCount",
        valueInputId: "newEventManagerValue",
        customInputId: "newEventCustomManagerInput",
        addCustomBtnId: "newEventAddCustomManagerBtn",
        initialManagers: ["정하람 전도사"]
      });
      openModal("addEventModal");
    });
  }

  const openAddEventHomeBtn = document.getElementById("openAddEventHomeBtn");
  if (openAddEventHomeBtn) {
    openAddEventHomeBtn.addEventListener("click", () => {
      setupManagerChipsSelector({
        containerId: "newEventManagerChipsContainer",
        countId: "newEventManagerCount",
        valueInputId: "newEventManagerValue",
        customInputId: "newEventCustomManagerInput",
        addCustomBtnId: "newEventAddCustomManagerBtn",
        initialManagers: ["정하람 전도사"]
      });
      openModal("addEventModal");
    });
  }

  // 행사 일시 입력 시 D-Day 실시간 자동 계산 리스너 (추가 모달)
  const newEventDateInput = document.getElementById("newEventDateInput");
  const newEventDdayInput = document.getElementById("newEventDdayInput");
  if (newEventDateInput && newEventDdayInput) {
    newEventDateInput.addEventListener("input", () => {
      const calculated = calculateDdayFromDateString(newEventDateInput.value);
      if (calculated) {
        newEventDdayInput.value = calculated;
      }
    });
  }

  // 새 행사 추가 폼 제출 리스너
  const addEventForm = document.getElementById("addEventForm");
  if (addEventForm) {
    addEventForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("newEventTitleInput").value.trim();
      const subTitle = document.getElementById("newEventSubTitleInput").value.trim();
      const date = document.getElementById("newEventDateInput").value.trim() || "일정 미정";
      let dday = document.getElementById("newEventDdayInput").value.trim();
      
      // 만약 D-Day가 비어있거나 직접 입력되지 않은 경우 자동 계산값 적용
      if (!dday) {
        dday = calculateDdayFromDateString(date) || "D-Day";
      }

      const managerVal = document.getElementById("newEventManagerValue")?.value || "정하람 전도사";
      const manager = managerVal.trim() || "정하람 전도사";
      const location = document.getElementById("newEventLocationInput").value.trim() || "이룸교회";
      const theme = document.getElementById("newEventThemeInput").value;
      const icon = document.getElementById("newEventIconInput").value;
      const firstChecklist = document.getElementById("newEventFirstChecklistInput").value.trim();

      const newEventId = "event_" + Date.now();
      const items = [];
      if (firstChecklist) {
        items.push({
          id: Date.now(),
          title: `${firstChecklist} (${manager})`,
          manager: manager,
          checked: false,
          color: "green"
        });
      }

      const newEvent = {
        id: newEventId,
        title: title,
        subTitle: subTitle,
        dday: dday,
        date: date,
        location: location,
        manager: manager,
        tag: "Special Event",
        theme: theme,
        icon: icon,
        items: items
      };

      if (!appState.events) appState.events = [];
      appState.events.push(newEvent);
      appState.currentChecklistEventId = newEventId;

      saveState();
      renderUpcomingEventsSection();
      renderChecklistSection();
      closeModal("addEventModal");
      addEventForm.reset();
      showToast(`'${title}' 행사가 성공적으로 추가되었습니다! 🎉 (${dday})`);
    });
  }

  // --- 행사 정보 & 총괄 담당자 수정 모달 (Edit Event & General Manager) ---
  function openEditEventModal(event) {
    if (!event) event = getActiveChecklistEvent();
    if (!event) return;

    const idInput = document.getElementById("editEventIdInput");
    const titleInput = document.getElementById("editEventTitleInput");
    const subTitleInput = document.getElementById("editEventSubTitleInput");
    const ddayInput = document.getElementById("editEventDdayInput");
    const themeSelect = document.getElementById("editEventThemeSelect");
    const dateInput = document.getElementById("editEventDateInput");
    const locationInput = document.getElementById("editEventLocationInput");

    if (idInput) idInput.value = event.id;
    if (titleInput) titleInput.value = event.title || "";
    if (subTitleInput) subTitleInput.value = event.subTitle || "";
    if (ddayInput) ddayInput.value = event.dday || "";
    if (dateInput) dateInput.value = event.date || "";
    if (locationInput) locationInput.value = event.location || "";
    if (themeSelect) themeSelect.value = event.theme || "sage";

    // 총괄 담당자 복수 선택 칩 시스템 구성
    const existingManagers = (event.manager || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    setupManagerChipsSelector({
      containerId: "editEventManagerChipsContainer",
      countId: "editEventManagerCount",
      valueInputId: "editEventManagerValue",
      customInputId: "editEventCustomManagerInput",
      addCustomBtnId: "editEventAddCustomManagerBtn",
      initialManagers: existingManagers.length > 0 ? existingManagers : ["정하람 전도사"]
    });

    // 수정 모달: 행사 일시 입력 시 D-Day 실시간 자동 계산 리스너
    const editEventDateInput = document.getElementById("editEventDateInput");
    const editEventDdayInput = document.getElementById("editEventDdayInput");
    if (editEventDateInput && editEventDdayInput) {
      editEventDateInput.oninput = () => {
        const calculated = calculateDdayFromDateString(editEventDateInput.value);
        if (calculated) {
          editEventDdayInput.value = calculated;
        }
      };
    }

    openModal("editEventModal");
  }

  // 총괄 담당자 알약 클릭 시 수정 모달 열기 (전도사 전용)
  const managerPill = document.getElementById("chkEventManagerPill");
  if (managerPill) {
    managerPill.addEventListener("click", () => {
      if (!isCurrentRolePastor()) {
        showToast("ℹ️ 총괄 담당자 수정은 전도사님만 가능합니다.", "info");
        return;
      }
      const currentEvent = getActiveChecklistEvent();
      openEditEventModal(currentEvent);
    });
  }

  // 행사 수정 폼 제출 리스너
  const editEventForm = document.getElementById("editEventForm");
  if (editEventForm) {
    editEventForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const eventId = document.getElementById("editEventIdInput").value;
      const targetEvent = appState.events.find(ev => ev.id === eventId);
      if (!targetEvent) return;

      const newTitle = document.getElementById("editEventTitleInput").value.trim();
      const newSubTitle = document.getElementById("editEventSubTitleInput").value.trim();
      const newDate = document.getElementById("editEventDateInput").value.trim();
      let newDday = document.getElementById("editEventDdayInput").value.trim();

      if (!newDday && newDate) {
        newDday = calculateDdayFromDateString(newDate) || targetEvent.dday || "D-Day";
      }

      const managerVal = document.getElementById("editEventManagerValue")?.value || "";
      const newManager = managerVal.trim() || targetEvent.manager || "정하람 전도사";
      const newTheme = document.getElementById("editEventThemeSelect").value;
      const newLocation = document.getElementById("editEventLocationInput").value.trim();

      targetEvent.title = newTitle;
      targetEvent.subTitle = newSubTitle;
      targetEvent.dday = newDday;
      targetEvent.manager = newManager;
      targetEvent.theme = newTheme;
      if (newDate) targetEvent.date = newDate;
      if (newLocation) targetEvent.location = newLocation;

      saveState();
      renderUpcomingEventsSection();
      renderChecklistSection();
      closeModal("editEventModal");
      showToast(`'${newTitle}' 행사의 총괄 담당자가 [${newManager}](으)로 수정되었습니다! 👤✓`);
    });
  }

  // 행사 삭제 버튼 리스너
  const deleteEventBtn = document.getElementById("deleteEventModalBtn");
  if (deleteEventBtn) {
    deleteEventBtn.addEventListener("click", () => {
      const eventId = document.getElementById("editEventIdInput").value;
      const targetEvent = appState.events.find(ev => ev.id === eventId);
      if (!targetEvent) return;

      if (!confirm(`'${targetEvent.title}' 행사를 정말 삭제하시겠습니까?\n(해당 행사의 체크리스트 항목도 함께 삭제됩니다)`)) {
        return;
      }

      appState.events = appState.events.filter(ev => ev.id !== eventId);
      if (appState.events.length > 0) {
        appState.currentChecklistEventId = appState.events[0].id;
      } else {
        appState.currentChecklistEventId = null;
      }

      saveState();
      renderUpcomingEventsSection();
      renderChecklistSection();
      closeModal("editEventModal");
      showToast(`'${targetEvent.title}' 행사가 삭제되었습니다. 🗑️`);
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
    // 전도사: 전체 열람 / 선생님·학생: 본인이 작성한 건의만 표시
    if (!isPastor) {
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
        <div style="font-size:13px; font-weight:700; color:#64748b; margin-top:6px;">${isPastor ? "해당 상태의 소통함 항목이 없습니다." : "아직 등록한 건의/요청 내역이 없습니다."}</div>
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
                statusBadge: null,
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
                  statusBadge: null,
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
    openAddBtn.addEventListener("click", () => {
      const currentUser = getCurrentUser();
      const authorInput = document.getElementById("staffReqAuthorInput");
      if (authorInput && currentUser) {
        authorInput.value = currentUser.name;
      }
      openModal("addStaffRequestModal");
    });
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

// --- Dynamic Calendar & Birthdays Engine (Real Month Navigation & Pastor CRUD) ---
const _initialCalDate = new Date();
let currentCalendarYear = _initialCalDate.getFullYear() || 2026;
let currentCalendarMonth = (_initialCalDate.getMonth() + 1) || 9; // Real-time month (1-12)
let selectedCalendarItem = null; // currently viewed item in manage modal

// 회원가입 및 사용자 계정의 생일과 캘린더 생일을 실시간 통합/동기화하는 함수
function getAllCalendarBirthdays() {
  const baseBirthdays = (appState.birthdays && appState.birthdays.length > 0)
    ? JSON.parse(JSON.stringify(appState.birthdays))
    : JSON.parse(JSON.stringify(INITIAL_DATA.birthdays));

  // appState.users 중 birthday가 등록된 회원 동기화
  if (appState.users && Array.isArray(appState.users)) {
    appState.users.forEach(user => {
      if (!user.birthday || !user.name) return;
      const bdayParts = user.birthday.split("-");
      if (bdayParts.length < 3) return;
      const m = parseInt(bdayParts[1], 10);
      const d = parseInt(bdayParts[2], 10);
      if (isNaN(m) || isNaN(d)) return;

      const cleanUserName = user.name.replace(/선생님|집사님|전도사님|교사|T|쌤/gi, "").replace(/\s+/g, "");

      // 기존 캘린더 생일 항목 중 매칭되는 항목 찾기
      const existingIdx = baseBirthdays.findIndex(b => {
        if (b.userId && b.userId === user.id) return true;
        const cleanBdayName = (b.name || "").replace(/선생님|집사님|전도사님|교사|T|쌤/gi, "").replace(/\s+/g, "");
        if (cleanBdayName && cleanUserName) {
          if (cleanBdayName === cleanUserName) return true;
          // 성(1자) 제외 이름이 같은 경우 매칭 (예: 김하람 <-> 하람) 단, 이름이 최소 2글자 이상일 때만
          if (cleanBdayName.length >= 2 && cleanUserName.length >= 2) {
            if (cleanBdayName.length === cleanUserName.length + 1 && cleanBdayName.endsWith(cleanUserName)) return true;
            if (cleanUserName.length === cleanBdayName.length + 1 && cleanUserName.endsWith(cleanBdayName)) return true;
          }
        }
        return false;
      });

      const roleDesc = (user.role === "pastor") ? "전도사"
        : (user.role === "accountant") ? "선생님(회계)"
        : (user.role === "deacon") ? "부장집사님"
        : (user.role === "student") ? "학생" : "선생님";

      if (existingIdx !== -1) {
        // 이미 캘린더에 항목이 있으면 사용자의 최신 생일(월/일), 역할, 아바타로 동기화
        baseBirthdays[existingIdx].month = m;
        baseBirthdays[existingIdx].day = d;
        baseBirthdays[existingIdx].userId = user.id;
        baseBirthdays[existingIdx].avatar = user.avatar || baseBirthdays[existingIdx].avatar;
        baseBirthdays[existingIdx].roleDesc = roleDesc;
      } else {
        // 새로운 가입자 생일이면 캘린더에 자동 추가
        baseBirthdays.push({
          id: `bday_user_${user.id}`,
          userId: user.id,
          month: m,
          day: d,
          name: user.name,
          roleDesc: roleDesc,
          avatar: user.avatar || (user.role === "student" ? "👦🏻" : "🧑🏻‍🏫")
        });
      }
    });
  }

  return baseBirthdays;
}

function renderCalendarSection() {
  const isPastor = isCurrentRolePastor();
  const yearTitleEl = document.getElementById("calYearDisplay");
  const currentTitleEl = document.getElementById("calCurrentMonthTitle");
  const addBtn = document.getElementById("openAddCalendarEventBtn");
  const grid = document.getElementById("calendarGrid");
  const showcase = document.getElementById("birthdayShowcaseCard");

  if (!grid || !showcase) return;

  // 1. Update Navigation Titles & Add Button Visibility (Pastor Only)
  if (yearTitleEl) yearTitleEl.textContent = `${currentCalendarYear}년 ${currentCalendarMonth}월`;
  if (currentTitleEl) currentTitleEl.textContent = `📅 ${currentCalendarMonth}월 사역 & 생일`;
  if (addBtn) {
    addBtn.style.display = isPastor ? "inline-flex" : "none";
  }

  // 2. Build Calendar Day Names Header
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  let gridHtml = dayNames.map(d => `<div class="cal-day-name">${d}</div>`).join("");

  // 3. Calculate Real Calendar Days for currentCalendarYear, currentCalendarMonth
  const firstDayOfWeek = new Date(currentCalendarYear, currentCalendarMonth - 1, 1).getDay();
  const lastDate = new Date(currentCalendarYear, currentCalendarMonth, 0).getDate();
  const prevMonthLastDate = new Date(currentCalendarYear, currentCalendarMonth - 1, 0).getDate();

  // Today marker (2026-09-09 or local real today)
  const now = new Date();
  const isCurrentRealMonth = (now.getFullYear() === currentCalendarYear && (now.getMonth() + 1) === currentCalendarMonth);
  const realTodayDate = now.getDate();

  // Current month's birthdays (회원가입/사용자 프로필 생일 자동 동기화) & events
  const allBirthdays = getAllCalendarBirthdays();
  const allEvents = (appState.calendarEvents && appState.calendarEvents.length > 0) ? appState.calendarEvents : INITIAL_DATA.calendarEvents;

  const curBirthdays = allBirthdays.filter(b => Number(b.month) === Number(currentCalendarMonth));
  const curEvents = allEvents.filter(e => {
    if (!e.date) return false;
    const parts = e.date.split("-");
    return Number(parts[0]) === Number(currentCalendarYear) && Number(parts[1]) === Number(currentCalendarMonth);
  });

  // Previous Month Leading Cells (Padding)
  for (let i = 0; i < firstDayOfWeek; i++) {
    const prevDate = prevMonthLastDate - firstDayOfWeek + i + 1;
    gridHtml += `<div class="cal-cell other-month"><span class="cal-num">${prevDate}</span></div>`;
  }

  // Current Month Cells
  for (let d = 1; d <= lastDate; d++) {
    const isToday = isCurrentRealMonth && (d === realTodayDate);
    const dayBirthdays = curBirthdays.filter(b => Number(b.day) === d);
    const dayEvents = curEvents.filter(e => {
      const dayPart = parseInt(e.date.split("-")[2], 10);
      return dayPart === d;
    });

    let pillsHtml = "";

    // Render Birthday Pills
    dayBirthdays.forEach(b => {
      const pillColor = (b.roleDesc === "선생님" || b.roleDesc === "전도사") ? "pill-pink" : "pill-mint";
      pillsHtml += `<span class="cal-event-pill ${pillColor}" data-item-type="birthday" data-item-id="${b.id}">🎂 ${b.name}</span>`;
    });

    // Render Event Pills
    dayEvents.forEach(e => {
      const pillColor = e.color ? `pill-${e.color}` : "pill-orange";
      pillsHtml += `<span class="cal-event-pill ${pillColor}" data-item-type="event" data-item-id="${e.id}">${e.title}</span>`;
    });

    gridHtml += `
      <div class="cal-cell ${isToday ? 'is-today' : ''}" data-day="${d}">
        <span class="cal-num">${d}</span>
        ${pillsHtml}
      </div>
    `;
  }

  // Next Month Trailing Cells to complete 7-column grid
  const totalCells = firstDayOfWeek + lastDate;
  const trailingCells = (7 - (totalCells % 7)) % 7;
  for (let i = 1; i <= trailingCells; i++) {
    gridHtml += `<div class="cal-cell other-month"><span class="cal-num">${i}</span></div>`;
  }

  grid.innerHTML = gridHtml;

  // 4. Render Dynamic Birthday Showcase Card for Current Month
  let bdayCardHtml = `
    <div class="birthday-title" style="display:flex; justify-content:space-between; align-items:center;">
      <div style="display:flex; align-items:center; gap:6px;">
        <span>🎂</span> <span>${currentCalendarMonth}월 생일 주인공 (${curBirthdays.length}명)</span>
      </div>
    </div>
  `;

  if (curBirthdays.length === 0) {
    bdayCardHtml += `
      <div style="text-align:center; padding:18px 0; color:#888; font-size:12.5px;">
        <span>🎈</span> ${currentCalendarMonth}월 생일 주인공이 없습니다.
      </div>
    `;
  } else {
    bdayCardHtml += `<div class="birthday-grid">`;
    curBirthdays.forEach(b => {
      bdayCardHtml += `
        <div class="birthday-person-item" data-item-type="birthday" data-item-id="${b.id}" data-bday-name="${b.name}">
          <div class="birthday-avatar-wrap">
            ${b.avatar || "🎂"} <span class="birthday-badge-mini">🎂</span>
          </div>
          <div style="flex:1; min-width:0;">
            <div class="birthday-date">${currentCalendarYear}.${currentCalendarMonth}.${b.day}</div>
            <div class="birthday-name" style="display:flex; align-items:center; justify-content:space-between;">
              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${b.name}</span>
            </div>
          </div>
        </div>
      `;
    });
    bdayCardHtml += `</div>`;
  }

  showcase.innerHTML = bdayCardHtml;

  // 5. Attach Click Events to Interactive Elements
  bindCalendarDynamicEvents();
}

function bindCalendarDynamicEvents() {
  const isPastor = isCurrentRolePastor();
  const allBirthdays = getAllCalendarBirthdays();

  // A. Birthday Person Item Click (opens modal)
  document.querySelectorAll(".birthday-person-item").forEach(item => {
    item.addEventListener("click", () => {
      const bdayId = item.dataset.itemId;
      const bday = allBirthdays.find(b => String(b.id) === String(bdayId));
      if (bday) {
        openManageCalendarItemModal("birthday", bday);
      }
    });
  });

  // B. Event / Birthday Pill Click inside Calendar Grid
  document.querySelectorAll(".cal-event-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent triggering parent cell click
      const itemType = pill.dataset.itemType;
      const itemId = pill.dataset.itemId;
      if (itemType === "birthday") {
        const bday = allBirthdays.find(b => String(b.id) === String(itemId));
        if (bday) openManageCalendarItemModal("birthday", bday);
      } else if (itemType === "event") {
        const evt = (appState.calendarEvents || []).find(ev => String(ev.id) === String(itemId));
        if (evt) openManageCalendarItemModal("event", evt);
      }
    });
  });

  // C. Empty Calendar Cell Click
  document.querySelectorAll(".cal-cell:not(.other-month)").forEach(cell => {
    cell.addEventListener("click", () => {
      const day = cell.dataset.day;
      if (!day) return;
      if (isPastor) {
        // 전도사는 해당 날짜를 기본값으로 하여 일정/생일 등록 모달 오픈
        openAddCalendarItemModal(currentCalendarYear, currentCalendarMonth, parseInt(day, 10));
      } else {
        showToast(`📅 ${currentCalendarMonth}월 ${day}일 사역 캘린더`, "info");
      }
    });
  });

  // D. Quick Add Birthday Button in showcase card
  const quickAddBtn = document.getElementById("openAddBdayQuickBtn");
  if (quickAddBtn) {
    quickAddBtn.addEventListener("click", () => {
      openAddCalendarItemModal(currentCalendarYear, currentCalendarMonth, 1, "birthday");
    });
  }
}

function openManageCalendarItemModal(kind, item) {
  selectedCalendarItem = { kind, data: item };
  const isPastor = isCurrentRolePastor();

  const modalTitle = document.getElementById("manageCalModalTitle");
  const modalSub = document.getElementById("manageCalModalSubtitle");
  const contentEl = document.getElementById("manageCalDetailContent");
  const pastorActions = document.getElementById("manageCalPastorActions");
  const generalActions = document.getElementById("manageCalGeneralActions");

  if (kind === "birthday") {
    if (modalTitle) modalTitle.textContent = `🎂 ${item.name} 생일`;
    if (modalSub) modalSub.textContent = `${item.roleDesc || "예랑 지체"} · ${currentCalendarYear}년 ${item.month}월 ${item.day}일`;
    if (contentEl) {
      contentEl.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="font-size:36px; width:52px; height:52px; border-radius:50%; background:#fff0f4; border:2px solid #fecdd3; display:flex; align-items:center; justify-content:center;">
            ${item.avatar || "🎂"}
          </div>
          <div>
            <div style="font-size:16px; font-weight:800; color:#1e293b;">${item.name} (${item.roleDesc || "지체"})</div>
            <div style="font-size:13px; color:#be123c; font-weight:700; margin-top:3px;">🎂 ${item.month}월 ${item.day}일 생일</div>
          </div>
        </div>
        <div style="margin-top:14px; padding:10px 12px; background:#fff1f2; border-radius:10px; font-size:12px; color:#9f1239; line-height:1.4;">
          예랑 청소년부 공동체에서 함께 사랑과 축복의 마음을 담아 축하합니다! 🎉
        </div>
      `;
    }
  } else {
    // Event
    const dateParts = item.date.split("-");
    const formattedDate = `${dateParts[0]}년 ${parseInt(dateParts[1], 10)}월 ${parseInt(dateParts[2], 10)}일`;
    if (modalTitle) modalTitle.textContent = `📅 ${item.title}`;
    if (modalSub) modalSub.textContent = `사역 일정 · ${formattedDate}`;
    if (contentEl) {
      contentEl.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="font-size:32px; width:52px; height:52px; border-radius:12px; background:#fff7ed; border:2px solid #fed7aa; display:flex; align-items:center; justify-content:center;">
            📅
          </div>
          <div>
            <div style="font-size:16px; font-weight:800; color:#1e293b;">${item.title}</div>
            <div style="font-size:13px; color:#c2410c; font-weight:700; margin-top:3px;">일시: ${formattedDate}</div>
          </div>
        </div>
        <div style="margin-top:14px; padding:10px 12px; background:#fff7ed; border-radius:10px; font-size:12px; color:#9a3412; line-height:1.4;">
          이룸교회 청소년부 공식 사역 행사 일정입니다.
        </div>
      `;
    }
  }

  // Pastor management buttons vs general user celebration
  if (pastorActions) {
    pastorActions.style.display = isPastor ? "flex" : "none";
  }
  if (generalActions) {
    generalActions.style.display = isPastor ? "none" : "block";
  }

  openModal("manageCalendarItemModal");
}

function openAddCalendarItemModal(year, month, day = 1, defaultType = "birthday") {
  const form = document.getElementById("addCalendarItemForm");
  if (form) form.reset();

  const safeYear = Number(year) || currentCalendarYear || new Date().getFullYear();
  const safeMonth = Number(month) || currentCalendarMonth || (new Date().getMonth() + 1);
  const safeDay = Number(day) || 1;

  const pad = (n) => String(n).padStart(2, "0");
  const dateInput = document.getElementById("calItemDateInput");
  if (dateInput) {
    dateInput.value = `${safeYear}-${pad(safeMonth)}-${pad(safeDay)}`;
  }

  // Set default radio selection
  const radio = form ? form.querySelector(`input[name="calItemType"][value="${defaultType}"]`) : null;
  if (radio) {
    radio.checked = true;
  }
  toggleAddModalFields(defaultType);

  openModal("addCalendarItemModal");
}
window.openAddCalendarItemModal = openAddCalendarItemModal;

function toggleAddModalFields(type) {
  const bdayGroup = document.getElementById("calBirthdayFieldsGroup");
  const eventGroup = document.getElementById("calEventFieldsGroup");
  const nameInput = document.getElementById("calBdayNameInput");
  const eventTitleInput = document.getElementById("calEventTitleInput");

  if (type === "birthday") {
    if (bdayGroup) bdayGroup.style.display = "block";
    if (eventGroup) eventGroup.style.display = "none";
    if (nameInput) nameInput.required = true;
    if (eventTitleInput) eventTitleInput.required = false;
  } else {
    if (bdayGroup) bdayGroup.style.display = "none";
    if (eventGroup) eventGroup.style.display = "block";
    if (nameInput) nameInput.required = false;
    if (eventTitleInput) eventTitleInput.required = true;
  }
}

function openEditCalendarItemModal(kind, item) {
  const form = document.getElementById("editCalendarItemForm");
  if (!form) return;

  const idInput = document.getElementById("editCalItemId");
  const kindInput = document.getElementById("editCalItemKind");
  const titleInput = document.getElementById("editCalTitleInput");
  const dateInput = document.getElementById("editCalDateInput");
  const nameLabel = document.getElementById("editCalNameLabel");
  const bdayFields = document.getElementById("editCalBdayFieldsGroup");
  const eventFields = document.getElementById("editCalEventFieldsGroup");

  if (idInput) idInput.value = item.id;
  if (kindInput) kindInput.value = kind;

  const pad = (n) => String(n).padStart(2, "0");

  if (kind === "birthday") {
    if (nameLabel) nameLabel.textContent = "주인공 이름";
    if (titleInput) titleInput.value = item.name;
    if (dateInput) dateInput.value = `${currentCalendarYear}-${pad(item.month)}-${pad(item.day)}`;
    if (bdayFields) bdayFields.style.display = "block";
    if (eventFields) eventFields.style.display = "none";

    const roleSelect = document.getElementById("editCalRoleSelect");
    const avatarSelect = document.getElementById("editCalAvatarSelect");
    if (roleSelect && item.roleDesc) roleSelect.value = item.roleDesc;
    if (avatarSelect && item.avatar) avatarSelect.value = item.avatar;
  } else {
    // Event
    if (nameLabel) nameLabel.textContent = "행사/사역명";
    if (titleInput) titleInput.value = item.title;
    if (dateInput) dateInput.value = item.date;
    if (bdayFields) bdayFields.style.display = "none";
    if (eventFields) eventFields.style.display = "block";

    const colorSelect = document.getElementById("editCalColorSelect");
    if (colorSelect && item.color) colorSelect.value = item.color;
  }

  closeModal("manageCalendarItemModal");
  openModal("editCalendarItemModal");
}

function initCalendarEvents() {
  // 1. Prev & Next Month Navigation Buttons
  const prevBtn = document.getElementById("calPrevMonthBtn");
  const nextBtn = document.getElementById("calNextMonthBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentCalendarMonth--;
      if (currentCalendarMonth < 1) {
        currentCalendarMonth = 12;
        currentCalendarYear--;
      }
      renderCalendarSection();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentCalendarMonth++;
      if (currentCalendarMonth > 12) {
        currentCalendarMonth = 1;
        currentCalendarYear++;
      }
      renderCalendarSection();
    });
  }

  // 2. Open Add Modal Button in Header (Pastor)
  const openAddBtn = document.getElementById("openAddCalendarEventBtn");
  if (openAddBtn) {
    openAddBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openAddCalendarItemModal(currentCalendarYear, currentCalendarMonth, 1);
    });
  }

  // Global delegated click handler for calendar action buttons
  document.addEventListener("click", (e) => {
    const addEvtBtn = e.target.closest("#openAddCalendarEventBtn");
    if (addEvtBtn) {
      e.preventDefault();
      e.stopPropagation();
      openAddCalendarItemModal(currentCalendarYear, currentCalendarMonth, 1);
      return;
    }
    const bdayQuickBtn = e.target.closest("#openAddBdayQuickBtn");
    if (bdayQuickBtn) {
      e.preventDefault();
      e.stopPropagation();
      openAddCalendarItemModal(currentCalendarYear, currentCalendarMonth, 1, "birthday");
      return;
    }
  });

  // 3. Add Modal Radio Switch (Birthday vs Event)
  document.querySelectorAll('input[name="calItemType"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
      toggleAddModalFields(e.target.value);
    });
  });

  // 4. Add Calendar Item Form Submit
  const addForm = document.getElementById("addCalendarItemForm");
  if (addForm) {
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const type = addForm.querySelector('input[name="calItemType"]:checked')?.value || "birthday";
      const dateVal = document.getElementById("calItemDateInput").value;
      if (!dateVal) {
        showToast("⚠️ 날짜를 선택해주세요.", "warn");
        return;
      }

      const [y, m, d] = dateVal.split("-").map(n => parseInt(n, 10));

      if (type === "birthday") {
        const name = document.getElementById("calBdayNameInput").value.trim();
        const roleDesc = document.getElementById("calBdayRoleSelect").value;
        const avatar = document.getElementById("calBdayAvatarSelect").value;

        if (!name) {
          showToast("⚠️ 이름을 입력해주세요.", "warn");
          return;
        }

        const newBday = {
          id: `bday_${Date.now()}`,
          month: m,
          day: d,
          name,
          roleDesc,
          avatar
        };

        if (!appState.birthdays) appState.birthdays = [];
        appState.birthdays.push(newBday);
        saveState();

        currentCalendarYear = y;
        currentCalendarMonth = m;
        renderCalendarSection();
        closeModal("addCalendarItemModal");
        addForm.reset();
        showToast(`🎉 ${name}님의 생일(${m}월 ${d}일)이 등록되었습니다!`);
      } else {
        // Event
        const title = document.getElementById("calEventTitleInput").value.trim();
        const color = document.getElementById("calEventColorSelect").value;

        if (!title) {
          showToast("⚠️ 행사명을 입력해주세요.", "warn");
          return;
        }

        const newEvent = {
          id: `evt_${Date.now()}`,
          date: dateVal,
          title,
          type: "event",
          color
        };

        if (!appState.calendarEvents) appState.calendarEvents = [];
        appState.calendarEvents.push(newEvent);
        saveState();

        currentCalendarYear = y;
        currentCalendarMonth = m;
        renderCalendarSection();
        closeModal("addCalendarItemModal");
        addForm.reset();
        showToast(`📅 '${title}' 사역 일정이 등록되었습니다!`);
      }
    });
  }

  // 5. Manage Modal - Edit Button Click (Pastor)
  const editCalItemBtn = document.getElementById("editCalItemBtn");
  if (editCalItemBtn) {
    editCalItemBtn.addEventListener("click", () => {
      if (!selectedCalendarItem) return;
      openEditCalendarItemModal(selectedCalendarItem.kind, selectedCalendarItem.data);
    });
  }

  // 6. Manage Modal - Delete Button Click (Pastor)
  const deleteCalItemBtn = document.getElementById("deleteCalItemBtn");
  if (deleteCalItemBtn) {
    deleteCalItemBtn.addEventListener("click", () => {
      if (!selectedCalendarItem) return;
      const { kind, data } = selectedCalendarItem;

      if (kind === "birthday") {
        if (!appState.birthdays || appState.birthdays.length === 0) {
          appState.birthdays = JSON.parse(JSON.stringify(INITIAL_DATA.birthdays));
        }
        appState.birthdays = appState.birthdays.filter(b => b.id !== data.id);

        // 연동된 회원의 생일 필드도 초기화
        if (data.userId && appState.users) {
          const matchedUser = appState.users.find(u => u.id === data.userId);
          if (matchedUser) {
            matchedUser.birthday = "";
          }
        }

        saveState();
        renderCalendarSection();
        renderUserManagerSection();
        renderUserSwitchGrid();
        closeModal("manageCalendarItemModal");
        showToast(`🗑️ ${data.name}님의 생일이 삭제되었습니다.`, "info");
      } else {
        if (!appState.calendarEvents || appState.calendarEvents.length === 0) {
          appState.calendarEvents = JSON.parse(JSON.stringify(INITIAL_DATA.calendarEvents));
        }
        appState.calendarEvents = appState.calendarEvents.filter(e => e.id !== data.id);
        saveState();
        renderCalendarSection();
        closeModal("manageCalendarItemModal");
        showToast(`🗑️ '${data.title}' 일정이 삭제되었습니다.`, "info");
      }
      selectedCalendarItem = null;
    });
  }

  // 7. Manage Modal - Celebrate Button Click (General User)
  const celebrateBtn = document.getElementById("celebrateCalItemBtn");
  if (celebrateBtn) {
    celebrateBtn.addEventListener("click", () => {
      if (!selectedCalendarItem) return;
      const { kind, data } = selectedCalendarItem;
      closeModal("manageCalendarItemModal");
      if (kind === "birthday") {
        showToast(`🎉 ${data.name}님에게 따뜻한 생일 축하 메시지를 전했습니다! 🎂`);
      } else {
        showToast(`📅 '${data.title}' 일정을 확인했습니다!`, "info");
      }
    });
  }

  // 8. Edit Modal Form Submit (Pastor)
  const editForm = document.getElementById("editCalendarItemForm");
  if (editForm) {
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("editCalItemId").value;
      const kind = document.getElementById("editCalItemKind").value;
      const titleVal = document.getElementById("editCalTitleInput").value.trim();
      const dateVal = document.getElementById("editCalDateInput").value;

      if (!dateVal || !titleVal) {
        showToast("⚠️ 필수 정보를 모두 입력해주세요.", "warn");
        return;
      }

      const [y, m, d] = dateVal.split("-").map(n => parseInt(n, 10));

      if (kind === "birthday") {
        const roleDesc = document.getElementById("editCalRoleSelect").value;
        const avatar = document.getElementById("editCalAvatarSelect").value;
        
        // 1. appState.birthdays 수정
        if (!appState.birthdays) appState.birthdays = JSON.parse(JSON.stringify(INITIAL_DATA.birthdays));
        let target = appState.birthdays.find(b => String(b.id) === String(id));
        if (target) {
          target.name = titleVal;
          target.month = m;
          target.day = d;
          target.roleDesc = roleDesc;
          target.avatar = avatar;
        }

        // 2. 만약 특정 사용자와 연동된 생일이면 해당 회원의 생일 데이터도 양방향 업데이트
        if (selectedCalendarItem && selectedCalendarItem.data && selectedCalendarItem.data.userId && appState.users) {
          const matchedUser = appState.users.find(u => u.id === selectedCalendarItem.data.userId);
          if (matchedUser) {
            matchedUser.birthday = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
          }
        }

        saveState();
        renderUserManagerSection();
        renderUserSwitchGrid();
        showToast(`✨ ${titleVal}님의 생일 정보가 수정되었습니다!`);
      } else {
        const color = document.getElementById("editCalColorSelect").value;
        const target = (appState.calendarEvents || []).find(e => e.id === id);
        if (target) {
          target.title = titleVal;
          target.date = dateVal;
          target.color = color;
          saveState();
          showToast(`✨ '${target.title}' 일정이 수정되었습니다!`);
        }
      }

      currentCalendarYear = y;
      currentCalendarMonth = m;
      renderCalendarSection();
      closeModal("editCalendarItemModal");
    });
  }
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
      const birthday = document.getElementById("signupBirthdayInput") ? document.getElementById("signupBirthdayInput").value.trim() : "";
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
        birthday: birthday || "",
        phone: phone || "010-0000-0000",
        avatar: DEFAULT_AVATARS[defaultRole] || "🧑🏻‍🏫",
        isAdmin: false,
        isPending: true // New user requires pastor approval
      };

      appState.users.push(newUser);
      saveState();
      signupForm.reset();

      if (typeof renderCalendarSection === "function") {
        renderCalendarSection();
      }

      // Show 가입완료 / 승인대기 Panel
      if (signupPanel) signupPanel.classList.add("hidden");
      if (loginPanel) loginPanel.classList.add("hidden");
      if (pendingPanel) {
        pendingPanel.classList.remove("hidden");
        const nameEl = document.getElementById("pendingRegisteredName");
        const idEl = document.getElementById("pendingRegisteredUsername");
        const bdayEl = document.getElementById("pendingRegisteredBirthday");
        if (nameEl) nameEl.textContent = name;
        if (idEl) idEl.textContent = username;
        if (bdayEl) bdayEl.textContent = birthday || "(미입력)";
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
  renderClassMinistrySection();
  renderNewcomerMinistrySection();
  renderAgendaSection();
  renderAttendanceSection();
  renderAccountingSection();
  renderNoticeBanner();
  renderUpcomingEventsSection();
  renderChecklistSection();
  renderStaffBoxSection();
  renderWorshipDutySection();
  renderHomeQuickActions();
  renderSchedulerSubTabsByRole();
  renderCalendarSection();
  updateStaffBoxHomeBadge();
  updateMeetingNavBadge();
}

// =============================================================================
// 12. Pull-to-Refresh Engine (Apple HIG & Emil Kowalski Fluid Physics)
// =============================================================================

function initPullToRefresh() {
  const container = document.getElementById("screensContainer");
  const indicator = document.getElementById("pullToRefreshIndicator");
  if (!container || !indicator) return;

  const icon = indicator.querySelector(".pull-refresh-icon");
  const text = indicator.querySelector(".pull-refresh-text");

  let startY = 0;
  let currentY = 0;
  let isPulling = false;
  let isRefreshing = false;
  const PULL_THRESHOLD = 70; // px to trigger refresh
  const MAX_PULL = 110;

  function onTouchStart(e) {
    if (isRefreshing) return;
    // Only allow pull-down if user is at the very top of the scroll container
    if (container.scrollTop > 2) return;

    startY = e.touches[0].clientY;
    currentY = startY;
    isPulling = true;
  }

  function onTouchMove(e) {
    if (!isPulling || isRefreshing) return;
    if (container.scrollTop > 2) {
      isPulling = false;
      resetPullUI();
      return;
    }

    currentY = e.touches[0].clientY;
    const diff = currentY - startY;

    if (diff > 0) {
      // Apply rubber-band damping
      const pullDistance = Math.min(diff * 0.45, MAX_PULL);

      indicator.style.height = `${pullDistance}px`;
      indicator.classList.add("pulling");

      // Rotate icon proportionally
      const rotation = (pullDistance / PULL_THRESHOLD) * 180;
      if (icon) {
        icon.style.transform = `rotate(${rotation}deg)`;
      }

      if (pullDistance >= PULL_THRESHOLD) {
        if (text) text.textContent = "놓으면 새로고침";
      } else {
        if (text) text.textContent = "당겨서 새로고침";
      }

      // Prevent native rubber-band bounce interfering
      if (e.cancelable && diff > 10) {
        e.preventDefault();
      }
    } else {
      resetPullUI();
    }
  }

  function onTouchEnd() {
    if (!isPulling || isRefreshing) return;
    isPulling = false;
    const diff = currentY - startY;
    const pullDistance = Math.min(diff * 0.45, MAX_PULL);

    if (pullDistance >= PULL_THRESHOLD) {
      triggerRefresh();
    } else {
      resetPullUI();
    }
  }

  function triggerRefresh() {
    isRefreshing = true;
    indicator.classList.remove("pulling");
    indicator.classList.add("refreshing");
    indicator.style.height = "52px";
    if (text) text.textContent = "최신 데이터 갱신 중...";
    if (icon) icon.style.transform = "";

    // Haptic feedback if available (Mobile Safari / Android)
    if (navigator.vibrate) {
      try { navigator.vibrate(15); } catch (err) {}
    }

    // Perform reload of all live data & Google Sheet sync
    const refreshTasks = [];

    // 1. Google Sheets sync if on accounting tab
    if (typeof syncFromGoogleSheet === "function") {
      refreshTasks.push(new Promise(resolve => {
        syncFromGoogleSheet(false);
        setTimeout(resolve, 600);
      }));
    }

    // 2. Reload state from localStorage (or merge)
    try {
      const saved = localStorage.getItem("yerang_app_state_v1");
      if (saved) {
        appState = JSON.parse(saved);
      }
    } catch (e) {
      console.warn("State reload warning:", e);
    }

    // Wait at least 650ms for satisfying visual feedback
    Promise.all([
      new Promise(r => setTimeout(r, 650)),
      ...refreshTasks
    ]).then(() => {
      renderAll();
      showToast("🔄 모든 사역 데이터가 최신으로 새로고침되었습니다!", "success");

      if (text) text.textContent = "완료!";
      setTimeout(() => {
        isRefreshing = false;
        resetPullUI();
      }, 300);
    }).catch(() => {
      renderAll();
      isRefreshing = false;
      resetPullUI();
    });
  }

  function resetPullUI() {
    indicator.style.height = "0px";
    indicator.classList.remove("pulling", "refreshing");
    if (icon) icon.style.transform = "";
    if (text) text.textContent = "당겨서 새로고침";
  }

  // Bind touch events on screensContainer
  container.addEventListener("touchstart", onTouchStart, { passive: true });
  container.addEventListener("touchmove", onTouchMove, { passive: false });
  container.addEventListener("touchend", onTouchEnd, { passive: true });
  container.addEventListener("touchcancel", onTouchEnd, { passive: true });
}

// =============================================================================
// 13. Notice System (Notice Strip Banner & Notice History Popup)
// =============================================================================

let currentNoticeFilterTag = "ALL";

function getActiveBannerNotice() {
  if (!appState.notices || appState.notices.length === 0) return null;
  const current = appState.notices.find(n => n.isCurrent);
  return current || appState.notices[0];
}

function renderNoticeBanner() {
  const banner = document.getElementById("noticeBanner");
  const tagEl = document.getElementById("noticeBannerTag");
  const timeEl = document.getElementById("noticeBannerTime");
  const titleEl = document.getElementById("noticeBannerTitle");
  if (!banner) return;

  const notice = getActiveBannerNotice();
  if (!notice) {
    if (tagEl) tagEl.textContent = "공지";
    if (timeEl) timeEl.textContent = "";
    if (titleEl) titleEl.textContent = "등록된 공지사항이 없습니다.";
    return;
  }

  if (tagEl) {
    tagEl.textContent = notice.tag || "공지";
    tagEl.className = "text-[11px] font-bold px-1.5 py-0.5 rounded bg-primary-fixed text-primary border border-primary/20 shrink-0";
  }
  if (timeEl) {
    timeEl.textContent = notice.time || "";
  }
  if (titleEl) {
    titleEl.textContent = notice.title || "";
  }
}

function getNoticeTagClass(tag) {
  if (!tag) return "notice-tag-this-week";
  if (tag.includes("금주")) return "notice-tag-this-week";
  if (tag.includes("행사")) return "notice-tag-event";
  if (tag.includes("예배")) return "notice-tag-worship";
  if (tag.includes("사역")) return "notice-tag-ministry";
  return "notice-tag-info";
}

function renderNoticesHistoryList(filterTag = currentNoticeFilterTag) {
  currentNoticeFilterTag = filterTag;
  const listContainer = document.getElementById("noticesListContainer");
  const countBadge = document.getElementById("noticesTotalCountBadge");
  if (!listContainer) return;

  const notices = appState.notices || [];
  const filtered = filterTag === "ALL" 
    ? notices 
    : notices.filter(n => n.tag === filterTag || (filterTag === "안내" && n.tag.includes("안내")));

  if (countBadge) {
    countBadge.textContent = `${notices.length}개`;
  }

  // Update active filter chip UI
  document.querySelectorAll("#noticeTagFilterBar .notice-filter-chip").forEach(chip => {
    if (chip.dataset.tag === filterTag) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div class="py-12 flex flex-col items-center justify-center text-center">
        <div class="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-text-muted mb-3">
          <span class="material-symbols-outlined text-[30px]">campaign</span>
        </div>
        <p class="text-sm font-bold text-text-primary">해당 카테고리의 공지사항이 없습니다.</p>
        <p class="text-xs text-text-muted mt-1">새 공지를 등록하거나 다른 탭을 선택해 보세요.</p>
      </div>
    `;
    return;
  }

  const currentUser = getCurrentUser();
  const canManage = currentUser && (currentUser.role !== "student");

  listContainer.innerHTML = filtered.map(notice => {
    const isCurrent = !!notice.isCurrent;
    const tagClass = getNoticeTagClass(notice.tag);

    return `
      <article class="notice-card ${isCurrent ? 'is-current-banner' : ''}" data-notice-id="${notice.id}">
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="notice-tag-badge ${tagClass}">${notice.tag || "공지"}</span>
            ${isCurrent ? `
              <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-primary text-white flex items-center gap-1 shadow-sm">
                <span class="material-symbols-outlined text-[12px]">check_circle</span>
                <span>현재 배너 공지</span>
              </span>
            ` : ''}
            <span class="text-[11px] font-semibold text-text-muted flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px]">schedule</span>
              <span>${notice.time || ''}</span>
            </span>
          </div>
          <span class="text-[11px] font-medium text-text-muted shrink-0">${notice.date || ''}</span>
        </div>

        <h4 class="text-[15px] font-extrabold text-text-primary leading-snug tracking-tight mb-2">
          ${notice.title || ''}
        </h4>

        <p class="text-[13px] text-text-secondary leading-relaxed font-normal whitespace-pre-line mb-3">
          ${notice.content || ''}
        </p>

        <div class="pt-2.5 border-t border-outline-variant/15 flex items-center justify-between gap-2">
          <div class="flex items-center gap-1.5 text-[11.5px] font-bold text-text-secondary">
            <span class="material-symbols-outlined text-[15px] text-primary">person</span>
            <span>${notice.author || '교역자'}</span>
          </div>

          ${canManage ? `
            <div class="flex items-center gap-1.5">
              ${!isCurrent ? `
                <button type="button" class="set-current-notice-btn text-[11px] font-bold text-primary bg-primary-fixed/40 hover:bg-primary-fixed px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors" data-id="${notice.id}" title="메인 배너로 지정">
                  <span class="material-symbols-outlined text-[13px]">push_pin</span>
                  <span>배너 지정</span>
                </button>
              ` : ''}
              <button type="button" class="edit-notice-btn text-[11px] font-bold text-text-secondary hover:text-primary bg-surface-container-low hover:bg-surface-container px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors" data-id="${notice.id}" title="공지 수정">
                <span class="material-symbols-outlined text-[13px]">edit</span>
                <span>수정</span>
              </button>
              <button type="button" class="delete-notice-btn text-[11px] font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-2 py-1 rounded-lg flex items-center gap-1 transition-colors" data-id="${notice.id}" title="공지 삭제">
                <span class="material-symbols-outlined text-[13px]">delete</span>
              </button>
            </div>
          ` : ''}
        </div>
      </article>
    `;
  }).join("");

  // Attach card event listeners
  listContainer.querySelectorAll(".set-current-notice-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      setNoticeAsCurrent(btn.dataset.id);
    });
  });

  listContainer.querySelectorAll(".edit-notice-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openEditNoticeModal(btn.dataset.id);
    });
  });

  listContainer.querySelectorAll(".delete-notice-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteNotice(btn.dataset.id);
    });
  });
}

function openNoticesModalImpl(filterTag = "ALL") {
  try {
    if (!appState.notices || !Array.isArray(appState.notices) || appState.notices.length === 0) {
      appState.notices = JSON.parse(JSON.stringify(INITIAL_DATA.notices || []));
      saveState();
    }
    renderNoticesHistoryList(filterTag);
    openModal("noticesHistoryModal");
  } catch (err) {
    console.error("[openNoticesModal] ERROR:", err);
    openModal("noticesHistoryModal");
  }
}

const openNoticesModal = openNoticesModalImpl;
window.openNoticesModal = openNoticesModalImpl;
window.openAddNoticeModal = openAddNoticeModal;

function setNoticeAsCurrent(noticeId) {
  if (!appState.notices) return;
  appState.notices.forEach(n => {
    n.isCurrent = (n.id === noticeId);
  });
  saveState();
  renderNoticeBanner();
  renderNoticesHistoryList();
  showToast("선택한 공지가 홈 화면 메인 배너로 지정되었습니다 📌", "success");
}

function deleteNotice(noticeId) {
  if (!appState.notices) return;
  const target = appState.notices.find(n => n.id === noticeId);
  if (!target) return;
  if (!confirm(`"${target.title}" 공지를 삭제하시겠습니까?`)) return;

  const wasCurrent = target.isCurrent;
  appState.notices = appState.notices.filter(n => n.id !== noticeId);

  if (wasCurrent && appState.notices.length > 0) {
    appState.notices[0].isCurrent = true;
  }

  saveState();
  renderNoticeBanner();
  renderNoticesHistoryList();
  showToast("공지가 삭제되었습니다 🗑️", "info");
}

function openAddNoticeModal() {
  const form = document.getElementById("noticeForm");
  if (!form) return;
  form.reset();
  document.getElementById("noticeEditId").value = "";
  document.getElementById("noticeFormModalTitle").textContent = "📢 새 공지 작성";
  document.getElementById("noticeFormModalSubtitle").textContent = "예랑 메인 공지 및 히스토리에 게시합니다";
  document.getElementById("noticeSubmitBtn").textContent = "공지 저장하기";

  const currentUser = getCurrentUser();
  if (currentUser) {
    document.getElementById("noticeAuthorInput").value = currentUser.name || "정하람 전도사";
  }

  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayStr = days[now.getDay()];
  document.getElementById("noticeDateInput").value = `${y}.${m}.${d} (${dayStr})`;
  document.getElementById("noticeIsCurrentInput").checked = true;

  openModal("addNoticeModal");
}

function openEditNoticeModal(noticeId) {
  if (!appState.notices) return;
  const notice = appState.notices.find(n => n.id === noticeId);
  if (!notice) return;

  document.getElementById("noticeEditId").value = notice.id;
  document.getElementById("noticeFormModalTitle").textContent = "✏️ 공지사항 수정";
  document.getElementById("noticeFormModalSubtitle").textContent = "공지 내용을 수정합니다";
  document.getElementById("noticeSubmitBtn").textContent = "수정사항 저장하기";

  document.getElementById("noticeTagInput").value = notice.tag || "금주 공지";
  document.getElementById("noticeTimeInput").value = notice.time || "";
  document.getElementById("noticeTitleInput").value = notice.title || "";
  document.getElementById("noticeContentInput").value = notice.content || "";
  document.getElementById("noticeAuthorInput").value = notice.author || "";
  document.getElementById("noticeDateInput").value = notice.date || "";
  document.getElementById("noticeIsCurrentInput").checked = !!notice.isCurrent;

  openModal("addNoticeModal");
}

function initNoticesEvents() {
  // Notice Banner click to open popup modal
  const banner = document.getElementById("noticeBanner");
  if (banner) {
    banner.addEventListener("click", () => {
      openNoticesModal();
    });
  }

  const arrowBtn = document.getElementById("noticeBannerArrowBtn");
  if (arrowBtn) {
    arrowBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openNoticesModal();
    });
  }

  // Filter chips
  document.querySelectorAll("#noticeTagFilterBar .notice-filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const tag = chip.dataset.tag;
      renderNoticesHistoryList(tag);
    });
  });

  // Open add notice modal button
  const openAddBtn = document.getElementById("openAddNoticeBtn");
  if (openAddBtn) {
    openAddBtn.addEventListener("click", () => {
      openAddNoticeModal();
    });
  }

  // Notice Form Submit
  const form = document.getElementById("noticeForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const editId = document.getElementById("noticeEditId").value;
      const tag = document.getElementById("noticeTagInput").value;
      const time = document.getElementById("noticeTimeInput").value.trim();
      const title = document.getElementById("noticeTitleInput").value.trim();
      const content = document.getElementById("noticeContentInput").value.trim();
      const author = document.getElementById("noticeAuthorInput").value.trim();
      const date = document.getElementById("noticeDateInput").value.trim();
      const isCurrent = document.getElementById("noticeIsCurrentInput").checked;

      if (!title) {
        showToast("공지 제목을 입력해주세요.", "warn");
        return;
      }

      if (!appState.notices) {
        appState.notices = [];
      }

      if (isCurrent) {
        appState.notices.forEach(n => { n.isCurrent = false; });
      }

      if (editId) {
        const existing = appState.notices.find(n => n.id === editId);
        if (existing) {
          existing.tag = tag;
          existing.time = time;
          existing.title = title;
          existing.content = content;
          existing.author = author;
          existing.date = date;
          if (isCurrent) existing.isCurrent = true;
        }
        showToast("공지사항이 수정되었습니다 ✏️", "success");
      } else {
        const newNotice = {
          id: `notice_${Date.now()}`,
          tag,
          time,
          title,
          content,
          author,
          date,
          isCurrent: isCurrent || appState.notices.length === 0
        };
        appState.notices.unshift(newNotice);
        showToast("새 공지가 등록되었습니다 📢", "success");
      }

      saveState();
      renderNoticeBanner();
      renderNoticesHistoryList();
      closeModal("addNoticeModal");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initHomeDashboardEvents();
  initNoticesEvents();
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
  initPullToRefresh();

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

