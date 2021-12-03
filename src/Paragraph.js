import { useContext } from 'react'
import {ThemeContext} from './App'

function Paragraph(){

    const theme = useContext(ThemeContext)

    return(
        <p className={theme}>
            Acid hydrochloric là một acid vô cơ mạnh, tạo ra từ sự hòa tan của khí hydro chloride (HCl) trong nước. Ban đầu, acid này được sản xuất từ acid sulfuric và muối ăn vào thời Phục Hưng, thậm chí từ thời Trung Cổ, sau đó được các nhà hóa học Glauber, Priestley và Davy sử dụng trong các nghiên cứu khoa học của họ. Acid hydrochloric được tìm thấy trong dịch vị, và cũng là một trong những yếu tố gây bệnh loét dạ dày khi hệ thống tự bảo vệ của dạ dày hoạt động không hiệu quả. Acid hydrochloric đậm đặc nhất có nồng độ tối đa là 40%. Ở dạng đậm đặc, acid này có thể tạo thành các sương mù acid, chúng đều có khả năng ăn mòn các mô con người, gây tổn thương cơ quan hô hấp, mắt, da và ruột. Acid hydrochloric được sản xuất với quy mô lớn vào cách mạng công nghiệp ở thế kỷ XVIII, chủ yếu được sử dụng trong ngành công nghiệp hóa chất để sản xuất nhựa PVC, và các sản phẩm trung gian như MDI/TDI để tạo ra polyurethane. Có khoảng 20 triệu tấn acid hydrochloric được sản xuất hàng năm.
        </p>
    )
}

export default Paragraph