import { Component } from '@angular/core';

@Component({
  selector: 'page-tree-menu',
  templateUrl: 'tree-menu.html'
})
export class TreeMenuPage {
  treeMenu = [
    {
      "id": 1,
      "name": "Trang chủ",
      "description": "Trang hiển thị thông tin tùy chọn",
      "order_1": 1,
      "size": "1.3em",
      "click": 1,
      "next": "HomeMenuPage",
      "icon": "home",
      "status": 1
    },
    {
      "id": 2,
      "name": "Danh sách bảo dưỡng",
      "description": "Lọc theo quý, năm, theo tổ, theo tỉnh",
      "order_1": 2,
      "size": "1.3em",
      "click": 1,
      "next": "MaintenanecePage",
      "icon": "logo-buffer",
      "status": 1
    },
    {
      "id": 3,
      "name": "Thêm phiếu bảo dưỡng",
      "description": "Nhập vào site_id, chọn thời gian quý/năm sẽ tự động thêm vào bảng maintenance_sheet, (Yêu cầu, sử dụng ứng dụng, có location GPS, có token và có private_key trên máy đã được xác thực, chỉ có máy cá nhân mới thực hiện được)",
      "order_1": 3,
      "size": "1.3em",
      "click": 1,
      "next": "AddMaintenancePage",
      "icon": "book",
      "status": 1
    },
    {
      "id": 4,
      "name": "Trạm đang bảo dưỡng",
      "description": "Liệt kê danh sách trạm đang bảo dưỡng (chưa kết thúc - trạng thái đang bảo dưỡng - đã sinh phiếu bảo dưỡng nhưng chưa xong) - cho phép tìm kiếm một trạm hoặc liệt kê danh sách và chọn trạm đó",
      "order_1": 4,
      "size": "1.3em",
      "click": 1,
      "next": "ReviewMaintenancePage",
      "icon": "brush",
      "status": 1
    },
    {
      "id": 5,
      "name": "GoogleMap",
      "description": "hiển thị bản đồ google map, tìm kiếm trạm hiển thị trạm lên bản đồ (xem trạng thái bảo dưỡng hay chưa?, cho phép hiển thị vị trí location đang đứng và khoảng cách trạm với vị trí đang đứng?) cho phép gọi tính năng bảo dưỡng trên bản đồ luôn?",
      "order_1": 5,
      "size": "1.3em",
      "click": 1,
      "next": "GoogleMap",
      "icon": "globe",
      "status": 1
    },
    {
      "id": 6,
      "name": "Báo cáo tổng hợp",
      "description": "Liệt kê các danh mục báo cáo, các báo cáo sẽ hiển thị dạng table hoặc list item, sau đó người dùng có thể chọn các tiêu chí để gọi xem báo cáo dạng pdf hoặc excel tùy thuộc vào yêu cầu",
      "order_1": 6,
      "size": "1.3em",
      "click": 1,
      "next": "ReportPage",
      "icon": "list-box",
      "status": 1
    },
    {
      "id": 7,
      "name": "Tiêu chuẩn và quy định chấm điểm",
      "description": "Các tiều chuẩn được tạo ra bằng file pdf trước đó, load vào server có link để xem, phân quyền xem hoặc public",
      "order_1": 7,
      "size": "1.3em",
      "click": 1,
      "next": "DocumentsPage",
      "icon": "paper",
      "status": 1
    },
    {
      "id": 8,
      "name": "Login/Logout",
      "description": "trang login/logout bằng OTP điện thoại di động mobifone",
      "order_1": 8,
      "size": "1.3em",
      "click": 1,
      "next": "LoginPage",
      "icon": "log-in",
      "status": 1
    }
  ];
}