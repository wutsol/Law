## Law
### 0.简介
这个仓库只有前端的项目代码，用到的技术：Vue.js+iView+Echarts。神经网络模型训练的数据来自2018年中国法研杯司法人工智能挑战赛，相关罪名、法律法规、法律知识等爬取了中国裁决网、华律网等网站的内容。
### 1.功能描述
通过智能辅助判案佐以法律辅助服务功能，为法律工作者提供一个快速高效的判决环境。
#### 1.1智能辅助决策
智能辅助决策层面致力于给法律工作者提供判案的科学参考，包括智能判案、案件推荐功能；
#### 1.2法律服务
为减轻法律工作者在法律服务过程中的工作量，提供法条查询、罪名查询、案例查询、以及法律知识阅览功能。
![主要功能](https://img-blog.csdnimg.cn/20200304005008135.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzE3MTEwNg==,size_16,color_FFFFFF,t_70)
### 2.主要界面效果展示
这里主要展示主界面、分析报告界面与法律知识推荐的界面效果。
#### 2.1主界面
![主界面](https://img-blog.csdnimg.cn/20200304005617184.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzE3MTEwNg==,size_16,color_FFFFFF,t_70)
#### 2.2 分析报告界面
![分析报告](https://img-blog.csdnimg.cn/2020030410174241.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzE3MTEwNg==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200304101818212.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzE3MTEwNg==,size_16,color_FFFFFF,t_70)
#### 2.3 法律知识界面
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200304102256327.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzE3MTEwNg==,size_16,color_FFFFFF,t_70)
#### 3.核心技术
本项目实现的核心还是深度学习技术，但不在本仓库，由另一名队友负责，主要说一下用到的技术。

 - 使用神经网络训练法研杯的数据集，该数据集一共包含了268W刑法法律文书，涉及183条罪名，202条法条，刑期长短包括0-25年、无期、死刑。
 - 相关的案例推荐通过迁移学习技术，将罪名预测模型运用到相关案例。
 - 由于数据集中案例只有案情描述，并没有一个指定的标题。为了使得案情描述更加简明扼要，使用最大边界相关算法（MMR）来抽取文本摘要来作为案情描述的标题。
 - 法律知识推荐使用SIF句向量抽取句子语义。
 
 ####  4.总结
 总的来说我认为自己负责的部分对于参加Web组来说做的不够好，包括界面、用户登录等方面，尽管在一些界面跳转等一些小方面做了优化，但项目还是注重在深度学习技术的运用上，做项目的过程中对于一些新技术的学习有一些领悟，包括一些前后端的联调等等，后续还需要更加努力。
