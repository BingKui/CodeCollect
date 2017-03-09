//老规则，为了方便复制，TaskControl 再写一遍

	//创建任务控制类
	var TaskControl = function(taskFunction, finishFunction) {
		this.finish = false;
		this.next = function() {
			if (!this.finish) {
				taskFunction.call(this);
			} else {
				finishFunction.call(this);
			}
		};
	};

	//老规则，为了方便复制，TaskControl 再写一遍：结束

	//任务
	var task = function() {
		this.index++;
		//判断列表中还有没有任务
		if (this.index >= this.data.length) {
			this.finish = true;
			//继续下一个，触发完成
			this.next();
		} else {
			console.time("任务：" + this.index);
			//如果还有任务，开始处理任务
			this.cache.push({
				url: "/q/" + this.data[this.index],
				index: this.index,
				start: new Date()
			});

			$.get(this.cache[this.index].url, (function(html) {
				this.cache[this.index].finish = new Date();
				this.cache[this.index].htmlsize = html.length;
				console.log(this.cache[this.index]);
				console.timeEnd("任务：" + this.index);
				//继续下一个
				this.next();
			}).bind(this));
		}
	};

	var finish = function() {
		console.log("任务完成");
		console.table(this.cache);
	};

	var run = new TaskControl(task, finish);

	//为了测试方便，将数据也绑定过来
	run.data = ["1010000007271957", "1010000003115114", "1010000007271957"]; //列表
	run.index = -1; //默认索引
	run.cache = []; //设置个执行缓存

	run.next(); //开始执行
	res.send('ok');
