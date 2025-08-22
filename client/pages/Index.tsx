import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar, Map, Users, Flag, Archive, Target } from "lucide-react";

export default function Index() {
  const [activeTimelineItem, setActiveTimelineItem] = useState<string | null>(
    null,
  );
  const [activeMapPoint, setActiveMapPoint] = useState<string | null>(null);

  const timelineEvents = [
    {
      id: "congress-2",
      date: "Tháng 2/1951",
      title: "Đại hội II Đảng Lao động Việt Nam",
      description:
        "Tại Tuyên Quang, thông qua Chính cương, xác định nhiệm vụ đánh đuổi đế quốc, xóa bỏ phong kiến. Hồ Chí Minh làm Chủ tịch Đảng, Trường Chinh làm Tổng Bí thư.",
      significance:
        "Khẳng định đường lối kháng chiến toàn dân, toàn diện, trường kỳ",
    },
    {
      id: "navarre-plan",
      date: "Tháng 7/1953",
      title: "Kế hoạch Navarre",
      description:
        'Pháp tập trung "quả đấm thép" tại Điện Biên Phủ, biến thành "pháo đài bất khả xâm phạm"',
      significance:
        "Đảng chỉ đạo giữ chủ động, phân tán địch qua các chiến dịch",
    },
    {
      id: "decision",
      date: "Tháng 9/1953",
      title: "Quyết định mở Chiến dịch",
      description:
        'Bộ Chính trị quyết định mở Chiến dịch Đông Xuân 1953-1954, với Điện Biên Phủ làm điểm quyết chiến (mật danh "Trần Đình")',
      significance: 'Chủ tịch Hồ Chí Minh: "Đánh chắc thắng mới đánh"',
    },
  ];

  const battlePhases = [
    {
      id: "phase-1",
      name: "Đợt 1: Him Lam và Độc Lập",
      date: "13-17/3/1954",
      description: "Tấn công và tiêu diệt các cứ điểm phía Bắc",
      position: { x: 30, y: 20 },
    },
    {
      id: "phase-2",
      name: "Đợt 2: Đông Mường Thanh",
      date: "30/3-26/4/1954",
      description: "Tấn công Đông Mường Thanh, diệt đồi A1, C1",
      position: { x: 60, y: 40 },
    },
    {
      id: "phase-3",
      name: "Đợt 3: Tổng công kích",
      date: "1-7/5/1954",
      description: "Chiếm hầm De Castries lúc 17h30 ngày 7/5/1954",
      position: { x: 50, y: 70 },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Chiến Thắng Điện Biên Phủ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Nội Dung Chi Tiết Cho Sản Phẩm Trải Nghiệm Về Chiến Thắng Điện
              Biên Phủ
            </p>
            <p className="text-lg text-red-200 mb-8">
              Môn học: Lịch sử Đảng - Khám phá vai trò lãnh đạo của Đảng trong
              chiến thắng lịch sử
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-red-800 hover:bg-red-50"
              >
                <Flag className="mr-2" />
                Khám phá lịch sử
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Section 1: Strategic Preparation */}
        <section className="mb-16">
          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-100 to-red-50">
              <CardTitle className="text-3xl text-red-800 flex items-center">
                <Calendar className="mr-3 text-red-600" />
                1. Chuẩn Bị Chiến Lược
              </CardTitle>
              <CardDescription className="text-lg text-red-700">
                Sự lãnh đạo của Đảng trong việc lập kế hoạch, quyết định mở
                chiến dịch, và đối phó với kế hoạch Navarre của Pháp
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-red-800">
                    Timeline Tương Tác
                  </h4>
                  <div className="space-y-4">
                    {timelineEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`border-l-4 pl-4 cursor-pointer transition-all duration-300 ${
                          activeTimelineItem === event.id
                            ? "border-red-600 bg-red-50"
                            : "border-gray-300 hover:border-red-400"
                        }`}
                        onClick={() =>
                          setActiveTimelineItem(
                            activeTimelineItem === event.id ? null : event.id,
                          )
                        }
                      >
                        <div className="font-semibold text-red-700">
                          {event.date}
                        </div>
                        <div className="font-medium">{event.title}</div>
                        {activeTimelineItem === event.id && (
                          <div className="mt-2 p-3 bg-white rounded border">
                            <p className="text-sm mb-2">{event.description}</p>
                            <p className="text-sm font-medium text-red-600">
                              Ý nghĩa: {event.significance}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-red-800">
                    Ý nghĩa trong lãnh đạo Đảng
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Thể hiện quyết tâm chiến lược của Đảng
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Bài học về đường lối đúng đắn, sáng tạo
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Vận dụng sáng tạo chủ nghĩa Mác-Lênin
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Kết hợp kháng chiến-kiến quốc
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Logistics */}
        <section className="mb-16">
          <Card className="border-yellow-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-yellow-100 to-yellow-50">
              <CardTitle className="text-3xl text-yellow-800 flex items-center">
                <Archive className="mr-3 text-yellow-600" />
                2. Hậu Cần
              </CardTitle>
              <CardDescription className="text-lg text-yellow-700">
                Vai trò hậu phương nhân dân và ngành hậu cần trong việc cung cấp
                lương thực, vũ khí, vượt địa hình khó khăn
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="preparation">
                  <AccordionTrigger className="text-lg font-semibold text-yellow-800">
                    Chuẩn bị hậu cần (1953)
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2">
                          Cải cách ruộng đất
                        </h5>
                        <p className="text-sm mb-3">
                          Chia 180.000 ha đất, vận động gia tăng sản xuất, tự
                          túc lương thực, đạn dược
                        </p>
                        <h5 className="font-semibold mb-2">Tuyến hậu cần</h5>
                        <p className="text-sm">
                          Dài 350km với 4 binh trạm: Ba Khe, Sơn La, Tuần Giáo,
                          km 62
                        </p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded">
                        <h5 className="font-semibold mb-2 text-yellow-800">
                          Chỉ đạo của Đảng
                        </h5>
                        <p className="text-sm">
                          Hội nghị BCHTW Đảng từ đầu 1953 chỉ đạo toàn diện công
                          tác chuẩn bị
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scale">
                  <AccordionTrigger className="text-lg font-semibold text-yellow-800">
                    Quy mô đóng góp của nhân dân
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-yellow-50 rounded">
                        <div className="text-2xl font-bold text-yellow-800">
                          261,453
                        </div>
                        <div className="text-sm">Lượt dân công</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded">
                        <div className="text-2xl font-bold text-yellow-800">
                          25,056
                        </div>
                        <div className="text-sm">Tấn gạo</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded">
                        <div className="text-2xl font-bold text-yellow-800">
                          1,824
                        </div>
                        <div className="text-sm">Tấn thịt</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded">
                        <div className="text-2xl font-bold text-yellow-800">
                          1,200
                        </div>
                        <div className="text-sm">Tấn vũ khí</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="innovation">
                  <AccordionTrigger className="text-lg font-semibold text-yellow-800">
                    Sáng tạo và khắc phục thách thức
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Users
                          className="text-yellow-600 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <div>
                          <h5 className="font-semibold">Xe đạp thồ</h5>
                          <p className="text-sm">
                            Sử dụng hàng nghìn xe đạp thồ để vận chuyển qua địa
                            hình rừng núi
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Map
                          className="text-yellow-600 mt-1 flex-shrink-0"
                          size={20}
                        />
                        <div>
                          <h5 className="font-semibold">Vượt địa hình</h5>
                          <p className="text-sm">
                            Linh hoạt, chủ động vượt gian khổ mưa lũ, địa hình
                            hiểm trở
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
                <h4 className="font-semibold mb-2 text-yellow-800">
                  Ý nghĩa trong lãnh đạo Đảng
                </h4>
                <p className="text-sm">
                  Phát huy thế trận hậu cần nhân dân, kết hợp kháng chiến-kiến
                  quốc, chi viện tiền tuyến
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Attack */}
        <section className="mb-16">
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50">
              <CardTitle className="text-3xl text-green-800 flex items-center">
                <Target className="mr-3 text-green-600" />
                3. Tiến Công
              </CardTitle>
              <CardDescription className="text-lg text-green-700">
                Các đợt tấn công, chiến thuật "đánh chắc tiến chắc", dẫn đến
                thắng lợi 7/5/1954
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-green-800">
                    Bản đồ tương tác chiến trường
                  </h4>
                  <div className="relative bg-gradient-to-b from-green-100 to-green-200 rounded-lg p-6 h-80">
                    <div className="text-center text-green-800 font-semibold mb-4">
                      Điện Biên Phủ
                    </div>
                    {battlePhases.map((phase) => (
                      <div
                        key={phase.id}
                        className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                          activeMapPoint === phase.id
                            ? "bg-red-600 scale-150"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                        style={{
                          left: `${phase.position.x}%`,
                          top: `${phase.position.y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        onClick={() =>
                          setActiveMapPoint(
                            activeMapPoint === phase.id ? null : phase.id,
                          )
                        }
                      >
                        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-48 z-10">
                          {activeMapPoint === phase.id && (
                            <div className="bg-white p-3 rounded shadow-lg border text-sm">
                              <div className="font-semibold text-green-800">
                                {phase.name}
                              </div>
                              <div className="text-green-600">{phase.date}</div>
                              <div className="mt-1">{phase.description}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-green-800">
                    Chi tiết các đợt tấn công
                  </h4>
                  <div className="space-y-4">
                    {battlePhases.map((phase, index) => (
                      <div
                        key={phase.id}
                        className="border-l-4 border-green-500 pl-4"
                      >
                        <div className="font-semibold text-green-700">
                          {phase.name}
                        </div>
                        <div className="text-sm text-green-600">
                          {phase.date}
                        </div>
                        <div className="text-sm mt-1">{phase.description}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold mb-2 text-green-800">
                      Chiến thuật "Đánh chắc tiến chắc"
                    </h5>
                    <ul className="text-sm space-y-1">
                      <li>• Tiến công 4 hướng để phân tán địch</li>
                      <li>• Xây dựng trận địa vững chắc</li>
                      <li>• Kết hợp tác chiến du kích</li>
                      <li>• Điều động phân tán địch qua 5 chiến trường</li>
                    </ul>
                  </div>

                  <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                    <h5 className="font-semibold mb-2 text-green-800">
                      Kết quả chiến thắng
                    </h5>
                    <p className="text-sm">
                      Diệt 16.200 địch, bắt sống Tướng De Castries, dẫn đến Hiệp
                      định Geneva (21/7/1954)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-yellow-100 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-800">
                  Ý nghĩa trong lãnh đạo Đảng
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-1">
                      Đỉnh cao nghệ thuật quân sự
                    </h5>
                    <p>
                      Thể hiện bản lĩnh trí tuệ Việt Nam dưới sự lãnh đạo của
                      Đảng
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">
                      Bài học quyết chiến quyết thắng
                    </h5>
                    <p>
                      Ý nghĩa lan tỏa trong phong trào giải phóng dân tộc thế
                      giới
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">
            Sản phẩm trải nghiệm về Chiến thắng Điện Biên Phủ - Môn học Lịch sử
            Đảng
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Nội dung dựa trên Session 13, Session 14 và Giáo trình Lịch sử Đảng
            Cộng sản Việt Nam (trang 160-179)
          </p>
        </footer>
      </div>
    </div>
  );
}
