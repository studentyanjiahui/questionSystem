# questionSystem
在积累了一些web开发的技术和思想后，自行设计了一个建议系统作为练手，由于是初学者，不可避免地参考了一些大佬的设计思路，但本人可以保证，绝对原创，每行代码都是我一键一键敲出来的。
# 界面展示
![image](https://github.com/studentyanjiahui/questionSystem/assets/100705236/37a1a383-cb96-45d9-b197-0077ebf28335)

![image](https://github.com/studentyanjiahui/questionSystem/assets/100705236/8fbf547a-872e-42cc-8eff-8849fffe284e)

![image](https://github.com/studentyanjiahui/questionSystem/assets/100705236/33f68f0d-e08e-43ba-900c-b97ad6fc3e98)

# 设计思想
借助vue的store存储登录状态，在router中设置某些页面非登录状态不可访问，缺点是存储在本地，容易被用户篡改，从而使得即使设置了权限管理也不安全，应当向token那样借助后端服务器进行访问，与cookie相适应，既能保证效率有使安全性提高。
