package com.bit_etland.web.cmm;

import java.util.Map;


import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Proxy {
	private int pageNum, pageSize, blockSize,totalCount,blockNum,
	startRow,endRow,startPage,endPage,prevBlock,nextBlock,pageCount;
	private boolean existPrev, existnext;
	
	public void carryOut(Map<?,?> pramMap) {
		

		@SuppressWarnings("unchecked")
		Map<String,String> a = (Map<String, String>) pramMap;
		
		pageNum = (a.get("pageNum")==null)?1: Integer.parseInt(a.get("pageNum"));
		pageSize = (a.get("pageSize")==null)?5: Integer.parseInt(a.get("pageSize"));
		blockSize = (a.get("blockSize")==null)?5:Integer.parseInt(a.get("blockSize"));
		blockNum = (a.get("block_num")==null)?0:Integer.parseInt(a.get("block_num"));
		
		totalCount = Integer.parseInt(a.get("totalCount"));
		startRow = pageSize*(pageNum-1);
		endRow = pageNum * pageSize;
		endRow = (totalCount > endRow)?endRow:totalCount;
		pageCount = totalCount/pageSize;
		if(totalCount%pageSize!=0) {
			pageCount++;
		}
		blockNum = (int)Math.floor((pageNum-1)/ blockSize);
		startPage = blockNum*blockSize+1;
		endPage = startPage+(blockSize-1);
		if(endPage>pageCount) {
			endPage=pageCount;
		}
		existPrev = (blockSize>=pageNum)?false:true;
		existnext = (pageCount<=(startPage + pageSize))?false:true;
		prevBlock = startPage - pageSize;
		nextBlock = startPage + pageSize;
		System.out.println(startPage);
		System.out.println("endPage       "+endPage);
}
}