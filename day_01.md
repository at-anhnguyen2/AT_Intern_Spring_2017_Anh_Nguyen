#Git
**Git** là một tên gọi của **Hệ thống quản lý phiên bản phân tán** (*Distributed Version Control System - DVCS*). Hệ thống này giúp mỗi máy tính có thể lưu trữ nhiều phiên bản khác nhau của một mã nguồn được nhân bản (**clone**) từ một kho chứa mã nguồn (gọi là **repository**).
#Github
**Github** là một nơi hoặc là một máy chủ công cộng, mỗi người có thể tạo **repository** của riêng mình để có thể lưu trữ các mã nguồn của mình và làm việc.
#Repository
**Repository** là một nơi dùng để lưu trữ mã nguồn và một người khác có thể sao chép (clone) lại mã nguồn đó để làm việc. Có 2 loại Repository là *Local Repository* và *Remote Repository*
#Branch
**Branch** dùng để phân nhánh, branch đã phân nhánh sẽ không ảnh hưởng đến các branch khác nên có thể tiến hành nhiều thay đổi đồng thời trên cùng một Repository.
**Tạo Branch**
```sh
$git checkout -b name_of_branch
```
#Pull Request
Sau khi push mã nguồn của mình lên, **Pull Request** nhằm tạo một yêu cầu ghép các mã nguồn branch mình đang làm việc vào nhánh chính(master).
**Tạo Pull Request**
Vào Branch đang làm việc, bên cạnh file mình cần tạo pull request bấm vào *New pull request*. Cửa số **Open a pull request** hiện lên, điền các thông tin cần thiết và bấm *Create pull request*
#Git commit
**Git commit** là một hành đồng để Git lưu lại sự thay đổi của tập tin và thư mục. Mỗi lần commit nó sẽ lưu lại lịch sử chỉnh sửa của tập tin kèm theo tên và địa chỉ mail của người commit.
#Git add
Nếu muốn Commit một tập tin nào đó, cần phải đưa tập tin đó vào trạng thái *Tracked* bằng lệnh **Git add**. Trạng thái *Tracked* là tập tin đã được Git đánh dấu theo dõi để làm việc với tập tin đó.
#Git push
**Git push** là câu lệnh dùng để push tập tin đã được Commit lên Remote Repository trong Githup.
#Git log
**Git log** là câu lệnh dùng để xem lịch sử của các lần commit trước đó.
#Resolve Conflict
Sau khi xảy ra conflict thì git đã gom hết nội dung của 2 branch lại và chỉ rõ bị *conflict* ở dòng nào. Công việc còn lại là chỉnh theo ý muốn của mình, sau đó add và commit như bình thường.
#Compare rebase and merge
**Rebase** chỉ giữ lại commit mới nhất, nên khi muốn quay lại với commit cũ thì không thể.
**Merge** giữ lại toàn bộ các commit, điều này làm cho git commit list dài. *Merge* sẽ hạn chế được *conflict* hơn *rebase*
#Delete Branch
**Delete a local branch**
```sh
$git branch -d the_local_branch
```
**Remove a remote branch**
```sh
$git push origin :the_remote_branch
``` 